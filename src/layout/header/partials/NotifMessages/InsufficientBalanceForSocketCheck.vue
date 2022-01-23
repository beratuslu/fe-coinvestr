<template>
  <div class="w-100" @mouseenter="setNotifAsRead(notification.id)">
    {{ notifText }}
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
    // Results,
  },
  setup(props) {
    const setNotifAsRead = (notifId) => {
      props.store.dispatch(Actions.SET_NOTIFICATION_AS_READ, notifId);
    };

    const notifText = computed(() => {
      return props.store.getters.enumsAndConstants.notifications[
        props.notification.notifType
      ].body;
    });

    return {
      notifText,
      setNotifAsRead,
    };
  },
};
</script>

<style>
</style>