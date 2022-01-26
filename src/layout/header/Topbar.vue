<script lang="ts">
import { defineComponent, ref } from "vue";
import KTSearch from "@/layout/header/partials/Search.vue";
import KTNotificationsMenu from "@/layout/header/partials/NotificationsMenu.vue";
import NotificationsMenu1 from "@/layout/header/partials/NotificationsMenu1.vue";
import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";
import NotificationList from "@/layout/header/partials/NotificationList.vue";

export default defineComponent({
  name: "topbar",
  components: {
    // KTNotificationsMenu,
    // KTQuickLinksMenu,
    KTUserMenu,
    // KTSearch,
    NotificationsMenu1,
    // NotificationList,
  },
  setup() {
    const gridData = ref([
      {
        date: "2016-05-02",
        name: "Jack",
        address: "New York City",
      },
      {
        date: "2016-05-04",
        name: "Jack",
        address: "New York City",
      },
      {
        date: "2016-05-01",
        name: "Jack",
        address: "New York City",
      },
      {
        date: "2016-05-03",
        name: "Jack",
        address: "New York City",
      },
    ]);
    return {
      gridData,
    };
  },
});
</script>

<template>
  <div class="d-flex align-items-stretch flex-shrink-0">
    <div class="topbar d-flex align-items-stretch flex-shrink-0">
      <!-- <div class="d-flex align-items-stretch ms-1 ms-lg-3">
        <KTSearch></KTSearch>
      </div> -->
      <!-- 
      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <div
          class="
            btn btn-icon btn-active-light-primary
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
          id="kt_activities_toggle"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="media/icons/duotune/general/gen032.svg" />
          </span>
        </div>
      </div>

      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <div
          class="
            btn btn-icon btn-active-light-primary
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
          data-kt-menu-trigger="click"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="bottom"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="media/icons/duotune/general/gen025.svg" />
          </span>
        </div>
        <KTQuickLinksMenu></KTQuickLinksMenu>
      </div>

      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <div
          class="
            btn btn-icon btn-active-light-primary
            position-relative
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
          id="kt_drawer_chat_toggle"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="media/icons/duotune/communication/com012.svg" />
          </span>

          <span
            class="
              bullet bullet-dot
              bg-success
              h-6px
              w-6px
              position-absolute
              translate-middle
              top-0
              start-50
              animation-blink
            "
          >
          </span>
        </div>
      </div>

      <div class="d-flex align-items-center ms-1 ms-lg-3">
        <div
          class="
            btn btn-icon btn-active-light-primary
            position-relative
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
          data-kt-menu-trigger="click"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="bottom"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="media/icons/duotune/general/gen022.svg" />
          </span>
        </div>
        <KTNotificationsMenu></KTNotificationsMenu>
      </div> -->

      <!-- <el-button>Click to activate</el-button> -->
      <!-- content="this is content, this is content, this is content" -->
      <!-- title="Title" -->
      <!-- <el-popover placement="bottom" :width="400" trigger="click">
        <template #reference>
          <div class="d-flex align-items-center ms-1 ms-lg-3">
            <div
              class="
                btn btn-icon btn-active-light-primary
                position-relative
                w-30px
                h-30px
                w-md-40px
                h-md-40px
              "
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="media/icons/duotune/general/gen022.svg" />
              </span>
            </div>
          </div>
        </template>

        <NotificationList v-if="true" />
      </el-popover> -->

      <div class="d-flex align-items-stretch ms-1 ms-lg-3">
        <NotificationsMenu1 />
      </div>

      <div
        class="d-flex align-items-center me-n3 ms-1 ms-lg-3"
        id="kt_header_user_menu_toggle"
      >
        <div
          class="
            btn btn-icon btn-active-light-primary
            w-30px
            h-30px
            w-md-40px
            h-md-40px
          "
        >
          <img
            src="media/avatars/150-25.jpg"
            alt="metronic"
            class="h-25px w-25px rounded"
          />
        </div>
        <KTUserMenu></KTUserMenu>
      </div>
    </div>
  </div>
</template>
