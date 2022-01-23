<template>
  <div class="w-100" @mouseenter="setNotifAsRead(notification.id)">
    We encountered an error while processing your
    <a
      :href="`/#copy-trade/${notification.params.copyTradeId}`"
      @click="goTo(`/copy-trade/${notification.params.copyTradeId}`, $event)"
      class="nav-link cursor-pointer d-inline px-0"
      >copy trade</a
    >
    . We created a
    <a
      :href="`/#copy-trade/${notification.params.copyTradeId}`"
      @click="goTo(`/copy-trade/${notification.params.copyTradeId}`, $event)"
      class="nav-link cursor-pointer d-inline px-0"
      >ticket</a
    >
    to solve the problem together.
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