<script>
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import Dropdown4 from "@/components/dropdown/Dropdown4.vue";
import FollowingDropdown from "@/components/dropdown/FollowingDropdown.vue";

import ApiService from "@/core/services/ApiService";
import NewTradeModal from "@/components/modals/forms/NewTradeModal.vue";
import FollowUserModal from "@/components/modals/forms/FollowUserModal.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default {
  name: "Profile",
  components: {
    Dropdown3,
    Dropdown4,
    NewTradeModal,
    FollowUserModal,
    FollowingDropdown,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const activeTab = ref(route.name);
    const loading = ref(false);
    const cloudinaryName = ref(process.env.VUE_APP_CLOUDINARY_NAME);

    const userName = ref(route.params.userName);

    const isSelfProfile = computed(() => {
      return store.getters.currentUser.userName == route.params.userName;
    });
    const isFollowed = computed(() => {
      let arr = store.getters.currentProfile.followers.filter(
        (user) => user.id === store.getters.currentUser.id
      );

      let isFollowed = false;
      if (arr.length) {
        isFollowed = true;
      }
      return isFollowed;
    });

    store.dispatch(Actions.GET_PROFILE, userName.value);

    const currentProfile = computed(() => {
      return store.getters.currentProfile;
    });

    watch(
      () => route.path,
      (prev, current) => {
        userName.value = route.params.userName;
        activeTab.value = route.name;

        if (route.params.userName) {
          store.dispatch(Actions.GET_PROFILE, userName.value);
        }

        // MenuComponent.hideDropdowns(undefined);
        // DrawerComponent.hideAll();
        // check if current user is authenticated
        // if (!store.getters.isUserAuthenticated) {
        //   router.push({ name: "sign-in" });
        // }
        // removeModalBackdrop();
      }
    );
    return {
      userName,
      cloudinaryName,
      activeTab,
      isSelfProfile,
      isFollowed,
      currentProfile,
    };
  },
};
</script>
<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="
              symbol symbol-100px symbol-lg-160px symbol-fixed
              position-relative
            "
          >
            <img
              :src="
                currentProfile.profilePhoto
                  ? `https://res.cloudinary.com/${cloudinaryName}/image/upload/w_300,h_300,c_fill,g_custom/${currentProfile.profilePhoto}.jpg`
                  : `media/avatars/blank.png`
              "
              alt="image"
              class="loading"
            />
            <div
              class="
                position-absolute
                translate-middle
                bottom-0
                start-100
                mb-6
                bg-success
                rounded-circle
                border border-4 border-white
                h-20px
                w-20px
              "
            ></div>
          </div>
        </div>
        <!--end::Pic-->

        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="
              d-flex
              justify-content-between
              align-items-start
              flex-wrap
              mb-2
            "
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                  >{{ currentProfile.name }} {{ currentProfile.lastName }}</a
                >
                <a href="#">
                  <span class="svg-icon svg-icon-1 svg-icon-primary">
                    <inline-svg src="media/icons/duotune/general/gen026.svg" />
                  </span>
                </a>
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                <a
                  href="#"
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    me-5
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotune/communication/com006.svg"
                    />
                  </span>
                  Developer
                </a>
                <a
                  href="#"
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    me-5
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg src="media/icons/duotune/general/gen018.svg" />
                  </span>
                  SF, Bay Area
                </a>
                <a
                  href="#"
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotune/communication/com011.svg"
                    />
                  </span>
                  max@kt.com
                </a>
              </div>
              <!--end::Info-->
            </div>
            <!--end::User-->

            <!--begin::Actions-->
            <div class="d-flex my-4">
              <!-- <a
                href="#"
                class="btn btn-sm btn-light me-2"
                id="kt_user_follow_button"
              >
                <span class="svg-icon svg-icon-3 d-none">
                  <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                </span>
                Follow
              </a> -->
              <a
                v-if="isSelfProfile"
                class="btn btn-sm btn-primary me-3"
                data-bs-toggle="modal"
                :data-bs-target="`#newTradeModal`"
                >New Trade</a
              >
              <div v-else>
                <div v-show="isFollowed">
                  <a
                    class="btn btn-sm btn-primary me-3 pe-0"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                    data-kt-menu-flip="top-end"
                  >
                    Following
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
                    </span>
                  </a>

                  <FollowingDropdown></FollowingDropdown>
                  <!-- <Dropdown4></Dropdown4> -->
                  <!-- <Dropdown3></Dropdown3> -->
                  <!-- <button
                    type="button"
                    class="
                      btn
                      btn-sm
                      btn-icon
                      btn-color-primary
                      btn-active-light-primary
                    "
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                    data-kt-menu-flip="top-end"
                  >
                    <span class="svg-icon svg-icon-2">
                      Following1
                      <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
                    </span>
                  </button>
                  <Dropdown3></Dropdown3> -->
                </div>

                <Dropdown4></Dropdown4>
                <Dropdown3></Dropdown3>

                <a
                  v-show="!isFollowed"
                  class="btn btn-sm btn-primary me-3"
                  data-bs-toggle="modal"
                  :data-bs-target="`#followUserModal`"
                  >Follow</a
                >
              </div>
              <NewTradeModal v-if="isSelfProfile" />
              <FollowUserModal :updating="isFollowed" v-if="!isSelfProfile" />

              <!--begin::Menu-->
              <!-- <div class="me-0">
                <button
                  class="
                    btn btn-sm btn-icon btn-bg-light btn-active-color-primary
                  "
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <i class="bi bi-three-dots fs-3"></i>
                </button>
                <Dropdown4></Dropdown4>
                <Dropdown3></Dropdown3>
              </div> -->
              <!--end::Menu-->
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->
          <div class="d-flex flex-wrap flex-stack">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <!--begin::Stats-->
              <div class="d-flex flex-wrap">
                <!--begin::Stat-->
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    me-6
                    mb-3
                  "
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="4500"
                      data-kt-countup-prefix="$"
                    >
                      4,500$
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Earnings</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->

                <!--begin::Stat-->
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    me-6
                    mb-3
                  "
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-danger me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr065.svg" />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="75"
                    >
                      75
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Projects</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->

                <!--begin::Stat-->
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    me-6
                    mb-3
                  "
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="60"
                      data-kt-countup-prefix="%"
                    >
                      60%
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Success Rate</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Progress-->
            <div
              class="
                d-flex
                align-items-center
                w-200px w-sm-300px
                flex-column
                mt-3
              "
            >
              <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-bold fs-6 text-gray-400"
                  >Profile Compleation</span
                >
                <span class="fw-bolder fs-6">50%</span>
              </div>

              <div class="h-5px mx-3 w-100 bg-light mb-3">
                <div
                  class="bg-success rounded h-5px"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--end::Progress-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="
            nav nav-stretch nav-line-tabs nav-line-tabs-2x
            border-transparent
            fs-5
            fw-bolder
            flex-nowrap
          "
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              :to="{
                name: 'myTrades',
                params: { userName },
              }"
              class="nav-link text-active-primary me-6"
              :class="{
                active: activeTab == 'myTrades' || activeTab == 'copiedTrades',
              }"
            >
              Trades
            </router-link>
          </li>
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              :to="{
                name: 'followers',
                params: { userName },
              }"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Followers({{ currentProfile.followers.length }})
            </router-link>
          </li>
          <!--end::Nav item-->
          <li class="nav-item">
            <router-link
              :to="{
                name: 'followings',
                params: { userName },
              }"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Following({{ currentProfile.followings.length }})
            </router-link>
          </li>
          <!--end::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <router-view></router-view>
</template>
