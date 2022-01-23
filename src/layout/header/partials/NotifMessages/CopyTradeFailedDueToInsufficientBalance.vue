<template>
  <div class="w-100" @mouseenter="setNotifAsRead(notification.id)">
    Because of after copy trade your BTC balance will be below 3 dollars. This
    copy trade skipped for your account.
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