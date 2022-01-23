<template>
  <div class="w-100" @mouseenter="setNotifAsRead(notification.id)">
    Buy order filled of
    <a
      :href="`/#copy-trade/${notification.params.copyTradeId}`"
      @click="goTo(`/copy-trade/${notification.params.copyTradeId}`, $event)"
      class="nav-link cursor-pointer d-inline px-0"
      >copy trade</a
    >.

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
          <td>Quantity:</td>
          <td class="fw-bolder">{{ notification.params.lastExecutionQty }}</td>
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