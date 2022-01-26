<template>
  <div class="w-100" @mouseenter="setNotifAsRead(notification.id)">
    <h6>{{ notifEnums[notification.notifType].title }}</h6>
    {{ notifText }}
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
    // Results,
  },
  setup(props) {
    const setNotifAsRead = (notifId) => {
      if (!props.notification.isRead) {
        props.store.dispatch(Actions.SET_NOTIFICATION_AS_READ, notifId);
      }
    };

    const notifText = computed(() => {
      return props.store.getters.enumsAndConstants.notifications[
        props.notification.notifType
      ].body;
    });
    const notifEnums = computed(() => {
      return props.store.getters.enumsAndConstants.notifications;
    });

    return {
      notifText,
      setNotifAsRead,
      notifEnums,
    };
  },
};
</script>

<style>
</style>