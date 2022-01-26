<script>
import { computed } from "vue";
import { Actions, Mutations } from "@/store/enums/StoreEnums";

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

<template>
  <div class="w-100" @mouseenter="setNotifAsRead(notification.id)">
    <h6>{{ notifEnums[notification.notifType].title }}</h6>
    New trade copied from
    <a
      :href="`/#profile/${notification.params.copiedUser.userName}`"
      @click="
        goTo(
          `/profile/${notification.params.copiedUser.userName}/trades`,
          $event
        )
      "
      class="nav-link cursor-pointer d-inline px-0"
      >{{ notification.params.copiedUser.userName }}</a
    >
    started.

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

