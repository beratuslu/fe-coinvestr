import { h } from "vue";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";
import { pusher } from "./pusher";
import NotifMessages from "@/layout/header/partials/NotifMessages/";

const state = {
  notifications: [],
};

const getters = {
  notifications(state) {
    return state.notifications;
  },
};

const actions = {
  [Actions.CONNECT_PRIVATE_CHANNEL](context, socketId) {
    return new Promise((resolve) => {
      const channel = pusher.subscribe(
        `private-user-${context.getters.authenticatedUser.id}`
      );
      channel.bind("notification", (data) => {
        context.commit(Mutations.ADD_NOTIFICATION, data);
        console.log(
          "🚀 ~ file: NotificationModule.ts ~ line 25 ~ channel.bind ~ data",
          data
        );
        console.log(
          "🚀 ~ file: NotificationModule.ts ~ line 30 ~ channel.bind ~ ApiService.vueInstance",
          ApiService.vueInstance
        );

        const { title, status } =
          context.getters.enumsAndConstants.notifications[data.notifType];

        ApiService.vueInstance.config.globalProperties.$notify[status]({
          title,
          // message: "This is a message without close button",
          message: h(NotifMessages[data.notifType], {
            notification: data,
            store: context,
            router: ApiService.vueInstance.config.globalProperties.$router,
          }),
          showClose: true,
          position: "bottom-left",
          // duration: 5000,
          duration: 0,
        });
      });
      resolve("connected");
    });
  },
  [Actions.SET_NOTIFICATION_AS_READ](context, notifId) {
    return new Promise((resolve) => {
      console.log(
        "🚀 ~ file: NotificationModule.ts ~ line 45 ~ notifId",
        notifId
      );

      resolve("connected");
    });
  },
};

const mutations = {
  [Mutations.ADD_NOTIFICATION](state, data) {
    state.notifications.push(data);
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
