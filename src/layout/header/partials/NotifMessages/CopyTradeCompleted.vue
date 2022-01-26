<template>
  <div class="w-100" @mouseenter="setNotifAsRead(notification.id)">
    <h6>{{ notifEnums[notification.notifType].title }}</h6>
    <a
      :href="`/#copy-trade/${notification.params.copyTradeId}`"
      @click="goTo(`/copy-trade/${notification.params.copyTradeId}`, $event)"
      class="nav-link cursor-pointer d-inline px-0"
      >copy trade</a
    >
    completed.
  </div>
</template>

<script>
import { computed } from "vue";
import { Mutations } from "@/store/enums/StoreEnums";

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
      props.store.commit(Mutations.SET_NOTIFICATION_AS_READ, notifId);
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