<script>
import { ref, h } from "vue";
import Main from "@/layout/header/partials/search/Main.vue";
import Empty from "@/layout/header/partials/search/Empty.vue";
import MenuComponent from "@/components/menu/MenuComponent.vue";
import ApiService from "@/core/services/ApiService";
import { ElNotification } from "element-plus";
import { useStore } from "vuex";

export default {
  name: "Notifications",
  components: {
    // Results,
    Main,
    Empty,
    MenuComponent,
  },
  setup() {
    const loading = ref(false);
    const notifications = ref([]);
    const store = useStore();

    const getData = () => {
      loading.value = true;
      ApiService.post(`api/v1/notifications`, {
        pagination: { pageSize: 45, pageNumber: 1 },
      })
        .then((response) => {
          notifications.value = response.data;
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {
          loading.value = false;
        });
    };

    // ElNotification.success({
    //   title: "Info",
    //   // message: "This is a message without close button",
    //   message: "asdasd",
    //   showClose: true,
    //   position: "bottom-left",
    // });
    getData();

    return {
      notifications,
      // searching,
    };
  },
};
</script>
<template>
  <MenuComponent menu-selector="#notifications-drop-down">
    <template v-slot:toggle>
      <!--begin::Search-->
      <div
        id="kt_header_search"
        class="d-flex align-items-stretch"
        data-kt-menu-target="#notifications-drop-down"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <!--begin::Search toggle-->
        <div class="d-flex align-items-center" id="kt_header_search_toggle">
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
              <!-- <inline-svg src="media/icons/duotune/general/gen021.svg" /> -->
              <!-- <inline-svg src="media/icons/duotune/abstract/abs023.svg" /> -->
              <inline-svg src="media/icons/duotune/abstract/abs027.svg" />
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
        <!--end::Search toggle-->
      </div>
      <!--end::Search-->
    </template>
    <template v-slot:content>
      <!--begin::Menu-->
      <div
        class="
          menu menu-sub menu-sub-dropdown menu-column
          p-7
          w-325px w-md-375px
        "
        data-kt-menu="true"
        id="notifications-drop-down"
      >
        <!--begin::Wrapper-->
        <div>
          <h3 class="card-title align-items-start flex-column">
            <span class="fw-bolder mb-2 text-dark">Notifications</span>
          </h3>
          <!--begin::Separator-->
          <div class="separator border-gray-200 mb-6"></div>
          <!--end::Separator-->

          <Main />
          <Empty v-if="!notifications.length"></Empty>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Menu-->
    </template>
  </MenuComponent>
</template>
