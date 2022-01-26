<template>
  <div class="w-100" @mouseenter="setNotifAsRead(notification.id)">
    <h6>{{ notifEnums[notification.notifType].title }}</h6>
    Profit sell order placed for
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
          <td>Symbol:</td>
          <td class="fw-bolder">{{ notification.params.symbol }}</td>
        </tr>
        <tr>
          <td>Profit Price:</td>
          <td class="fw-bolder">{{ notification.params.profitPrice }}</td>
        </tr>
        <tr>
          <td>Quantity:</td>
          <td class="fw-bolder">{{ notification.params.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { Mutations, Actions } from "@/store/enums/StoreEnums";

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
      if (!props.notification.isRead) {
        props.store.dispatch(Actions.SET_NOTIFICATION_AS_READ, notifId);
      }
    };
    const goTo = (url, $event) => {
      $event.preventDefault();
      // eslint-disable-next-line vue/no-mutating-props
      props.router.push(url);
    };

    const notifEnums = computed(() => {
      return props.store.getters.enumsAndConstants.notifications;
    });

    return {
      setNotifAsRead,
      goTo,
      notifEnums,
    };
  },
};
</script>

<style>
.el-notification__group {
  width: 100%;
}
</style>