<script>
/* eslint-disable vue/no-unused-components */
import { ref, computed, watch } from "vue";
import Main from "@/layout/header/partials/search/Main.vue";
import Empty from "@/layout/header/partials/search/Empty.vue";
import MenuComponent from "@/components/menu/MenuComponent.vue";
import INSUFFICIENT_BALANCE_FOR_SOCKET_CHECK from "@/layout/header/partials/NotifMessages/InsufficientBalanceForSocketCheck.vue";
import COPY_TRADE_START from "@/layout/header/partials/NotifMessages/CopyTradeStart.vue";
import COPY_TRADE_FAILED_DUE_TO_INSUFFICIENT_BALANCE from "@/layout/header/partials/NotifMessages/CopyTradeFailedDueToInsufficientBalance.vue";
import COPY_TRADE_ACTIVITY_BUY_ORDER_PLACED from "@/layout/header/partials/NotifMessages/CopyTradeActivityBuyOrderPlaced.vue";
import COPY_TRADE_ACTIVITY_BUY_ORDER_FILLED_PARTIALLY from "@/layout/header/partials/NotifMessages/CopyTradeActivityBuyOrderFilledPartially.vue";
import COPY_TRADE_ACTIVITY_BUY_ORDER_FILLED from "@/layout/header/partials/NotifMessages/CopyTradeActivityBuyOrderFilled.vue";
import COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_FILLED_PARTIALLY from "@/layout/header/partials/NotifMessages/CopyTradeActivityProfitSellOrderFilledPartially.vue";
import COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_FILLED from "@/layout/header/partials/NotifMessages/CopyTradeActivityProfitSellOrderFilled.vue";
import COPY_TRADE_ACTIVITY_STOP_SELL_ORDER_FILLED_PARTIALLY from "@/layout/header/partials/NotifMessages/CopyTradeActivityStopSellOrderFilledPartially.vue";
import COPY_TRADE_ACTIVITY_STOP_SELL_ORDER_FILLED from "@/layout/header/partials/NotifMessages/CopyTradeActivityStopSellOrderFilled.vue";
import COPY_TRADE_COMPLETED from "@/layout/header/partials/NotifMessages/CopyTradeCompleted.vue";
import COPY_TRADE_FAILED_DUE_TO_INVALID_BUY_ORDER from "@/layout/header/partials/NotifMessages/CopyTradeFailedDueToInvalidBuyOrder.vue";
import COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_PLACED from "@/layout/header/partials/NotifMessages/CopyTradeActivityProfitSellOrderPlaced.vue";
import COPY_TRADE_ERRORED from "@/layout/header/partials/NotifMessages/CopyTradeErrored.vue";

import ApiService from "@/core/services/ApiService";
import { ElNotification } from "element-plus";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";

export default {
  name: "Notifications",
  components: {
    // Results,
    Main,
    Empty,
    MenuComponent,
    INSUFFICIENT_BALANCE_FOR_SOCKET_CHECK,
    COPY_TRADE_START,
    COPY_TRADE_FAILED_DUE_TO_INSUFFICIENT_BALANCE,
    COPY_TRADE_ACTIVITY_BUY_ORDER_PLACED,
    COPY_TRADE_ACTIVITY_BUY_ORDER_FILLED_PARTIALLY,
    COPY_TRADE_ACTIVITY_BUY_ORDER_FILLED,
    COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_FILLED_PARTIALLY,
    COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_FILLED,
    COPY_TRADE_ACTIVITY_STOP_SELL_ORDER_FILLED_PARTIALLY,
    COPY_TRADE_ACTIVITY_STOP_SELL_ORDER_FILLED,
    COPY_TRADE_COMPLETED,
    COPY_TRADE_FAILED_DUE_TO_INVALID_BUY_ORDER,
    COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_PLACED,
    COPY_TRADE_ERRORED,
  },
  setup() {
    const loading = ref(false);

    const store = useStore();
    const router = useRouter();

    const notifications = computed(() => {
      return store.getters.getNotifications;
    });

    const setNotifAsRead = (notifId) => {
      store.dispatch(Actions.SET_NOTIFICATION_AS_READ, notifId);
    };

    // watch(
    //   () => notifications,
    //   (current, next) => {
    //     console.log(
    //       "🚀 ~ file: NotificationsMenu1.vue ~ line 65 ~ watch ~ current",
    //       current
    //     );
    //   },
    //   { deep: true }
    // );
    return {
      notifications,
      store,
      router,
      setNotifAsRead,
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
          p-6
          pe-0
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
          <div class="scroll-y mh-200px mh-lg-425px">
            <!-- <Main></Main> -->

            <div
              class="position-relative"
              v-for="notif in notifications"
              :key="notif.id"
            >
              <component
                class="pe-6"
                :is="notif.notifType"
                :router="router"
                :store="store"
                :notification="notif"
              >
              </component>

              <el-tooltip
                class="box-item"
                :class="{ 'cursor-default': notif.isRead }"
                effect="dark"
                content="mark as read"
                placement="left-start"
                :disabled="notif.isRead"
              >
                <div
                  @click="setNotifAsRead(notif.id)"
                  style="
                    right: -10px !important;
                    top: 50%;
                    width: 18px;
                    height: 18px;
                  "
                  class="
                    position-absolute
                    translate-middle
                    mb-6
                    rounded-circle
                    border border-4 border-white
                    cursor-pointer
                  "
                  :class="{
                    'bg-primary': !notif.isRead,
                    'bg-secondary': notif.isRead,
                  }"
                ></div>
              </el-tooltip>
              <div class="separator border-gray-300 mb-6 mt-6"></div>
            </div>
          </div>
          <Empty v-if="!notifications.length"></Empty>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Menu-->
    </template>
  </MenuComponent>
</template>
