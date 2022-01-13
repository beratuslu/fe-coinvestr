<script>
import { defineComponent, computed, ref } from "vue";
import FollowUserModal from "@/components/modals/forms/FollowUserModal.vue";
import ApiService from "@/core/services/ApiService";
import { ElMessage } from "element-plus";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
export default defineComponent({
  name: "FollowingDropdown",
  // props: {
  //   isFollowed: Boolean,
  // },
  components: {
    FollowUserModal,
  },
  setup(props) {
    const store = useStore();
    const loading = ref(false);
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
    const currentProfile = computed(() => {
      return store.getters.currentProfile;
    });

    function unfollow(values) {
      loading.value = true;
      const postData = {
        traderId: currentProfile.value.id,
      };
      ApiService.post(`api/v1/profile/unfollow`, postData)
        .then((response) => {
          ElMessage.success(
            response.message || "You quit following this user!"
          );
          store.dispatch(Actions.GET_PROFILE, currentProfile.value.userName);
        })
        .catch((err) => {
          ElMessage.error(err.message || "Server error");
        })
        .finally(() => {
          loading.value = false;
        });
    }

    return { isFollowed, unfollow };
  },
});
</script>

<template>
  <!--begin::Menu-->
  <div
    class="
      menu
      menu-sub
      menu-sub-dropdown
      menu-column
      menu-rounded
      menu-gray-800
      menu-state-bg-light-primary
      fw-bold
      py-2
      w-125px
      fs-6
    "
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-2 my-1">
      <!-- <a href="#" class="menu-link px-5 fs-7"> Edit Copy </a> -->
      <a
        class="menu-link px-5 fs-7"
        data-bs-toggle="modal"
        :data-bs-target="`#followUserModal`"
        >Edit Copy</a
      >
      <FollowUserModal :updating="isFollowed" />
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-2">
      <a @click="unfollow" class="menu-link text-danger fs-7 px-5">
        Unfollow
      </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>
