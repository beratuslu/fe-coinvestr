<template>
  <div class="w-100" @mouseenter="setNotifAsRead(notification.id)">
    New trade copied from Copy trade failed due to
    <span class="fw-bolder">{{ notification.params.reason }}</span>

    <table
      class="
        table
        gs-2
        gy-0
        gx-0
        fw-normal
        mt-6
        table-row-bordered table-rounded table-striped
      "
    >
      <tbody>
        <tr>
          <td>Symbol:</td>
          <td class="fw-bolder">{{ notification.params.symbol }}</td>
        </tr>
        <tr>
          <td>Btc Amount:</td>
          <td class="fw-bolder">{{ notification.params.btcAmount }}</td>
        </tr>
        <tr>
          <td>Buy Price:</td>
          <td class="fw-bolder">{{ notification.params.buyPrice }}</td>
        </tr>
        <tr>
          <td>Profit Price:</td>
          <td class="fw-bolder">{{ notification.params.profitPrice }}</td>
        </tr>
        <tr>
          <td>Stop Loss Price:</td>
          <td class="fw-bolder">{{ notification.params.stopLossPrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { Actions } from "@/store/enums/StoreEnums";

export default {
  name: "Notif",
  props: {
    notification: Object,
    store: Object,
    router: Object,
  },
  components: {
    // RouterLink,
  },
  setup(props) {
    const setNotifAsRead = (notifId) => {
      props.store.dispatch(Actions.SET_NOTIFICATION_AS_READ, notifId);
    };
    const goTo = (url, $event) => {
      $event.preventDefault();
      // eslint-disable-next-line vue/no-mutating-props
      props.router.push(url);
    };

    return {
      setNotifAsRead,
      goTo,
    };
  },
};
</script>

<style>
.el-notification__group {
  width: 100%;
}
</style>