<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-widget-2",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
    list: Array,
  },
  setup() {
    const cloudinaryName = ref(process.env.VUE_APP_CLOUDINARY_NAME);
    // const list = ref([
    //   {
    //     avatar: "media/avatars/150-1.jpg",
    //     name: "Emma Smith",
    //     description: "Project Manager",
    //   },
    //   {
    //     avatar: "media/avatars/150-4.jpg",
    //     name: "Sean Bean",
    //     description: "PHP, SQLite, Artisan CLI",
    //   },
    //   {
    //     avatar: "media/avatars/150-12.jpg",
    //     name: "Brian Cox",
    //     description: "PHP, SQLite, Artisan CLI",
    //   },
    //   {
    //     avatar: "media/avatars/150-8.jpg",
    //     name: "Francis Mitcham",
    //     description: "PHP, SQLite, Artisan CLI",
    //   },
    //   {
    //     avatar: "media/avatars/150-6.jpg",
    //     name: "Dan Wilson",
    //     description: "PHP, SQLite, Artisan CLI",
    //   },
    // ]);
    return {
      cloudinaryName,
      // list,
    };
  },
});
</script>

<template>
  <!--begin::List Widget 2-->
  <div class="col-xxl-12">
    <div class="card" :class="widgetClasses">
      <!--begin::Header-->
      <div class="card-header border-0">
        <h3 class="card-title fw-bolder text-dark"></h3>
        <div class="card-toolbar">
          <button
            :disabled="!list.length"
            type="button"
            class="
              btn btn-sm btn-icon btn-color-primary btn-active-light-primary
            "
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/general/gen024.svg" />
            </span>
          </button>
          <Dropdown2></Dropdown2>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->

      <div v-if="list.length" class="card-body pt-0 row">
        <template v-for="(item, index) in list" :key="index">
          <!--begin::Item-->
          <div
            :class="{ 'mb-7': list.length - 1 !== index }"
            class="d-flex align-items-center col-xxl-3"
          >
            <!--begin::Avatar-->
            <router-link
              :to="`/profile/${item.userName}/overview`"
              class="text-dark fw-bolder text-hover-primary fs-6"
            >
              <div class="symbol symbol-50px me-5">
                <img
                  :src="
                    item.profilePhoto
                      ? `https://res.cloudinary.com/${cloudinaryName}/image/upload/w_300,h_300,c_fill,g_custom/${item.profilePhoto}.jpg`
                      : `media/avatars/blank.png`
                  "
                  alt=""
                />
              </div>
            </router-link>
            <!--end::Avatar-->

            <!--begin::Text-->
            <div class="flex-grow-1">
              <!-- <a
              @click="$router.push(`/profile/${item.userName}/overview`)"
              class="text-dark fw-bolder text-hover-primary fs-6"
              >{{ item.name }}</a
            > -->

              <router-link
                :to="`/profile/${item.userName}/overview`"
                class="text-gray-700 fw-bolder text-hover-primary fs-6"
              >
                {{ item.name }} {{ item.lastName }}
              </router-link>

              <span class="text-muted d-block fw-bold">{{
                item.description
              }}</span>
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->
        </template>
      </div>
      <div v-else class="card-body pt-0 row">
        <p class="text-gray-500">0 user.</p>
      </div>
      <!--end::Body-->
    </div>
  </div>
  <!--end::List Widget 2-->
</template>
