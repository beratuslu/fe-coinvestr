import { h } from "vue";
import Vue from "vue";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";
import { pusher } from "./pusher";
import NotifMessages from "@/layout/header/partials/NotifMessages/";

const state = {
  notifications: [{}],
  singleItem: { boolval: false },
};

const getters = {
  notifications(state) {
    return state.notifications;
  },
  singleItem(state) {
    return state.singleItem;
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

  [Actions.GET_NOTIFICATIONS](context, postData) {
    return new Promise((resolve) => {
      // const postData = {
      //   pagination: { pageSize: 45, pageNumber: 1 },
      // };
      ApiService.post("api/v1/notifications", {
        pagination: { pageSize: 45, pageNumber: 1 },
      })
        .then((response) => {
          state.notifications = response.data;
          resolve("asdasd");
          // notifications.value = response.data;
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {
          // loading.value = false;
        });
      // ApiService.post("auth/login", credentials)
      //   .then((response) => {
      //     context.commit(Mutations.SET_AUTH, response.data);
      //     context.dispatch(Actions.GET_ENUMS_AND_CONSTANTS);
      //     context.dispatch(Actions.CONNECT_SOCKET);
      //     resolve("asdasd");
      //   })
      //   .catch((error) => {
      //     context.commit(Mutations.SET_ERROR, [error.response.data.message]);
      //     // reject();
      //   });
    });
  },
  [Mutations.SET_NOTIFICATION_AS_READ](context, postData) {
    context.commit("asdasd", postData);
  },
};

const mutations = {
  [Mutations.ADD_NOTIFICATION](state, data) {
    state.notifications.push(data);
  },

  [Mutations.SET_NOTIFICATION_AS_READ](context, notifId) {
    console.log(
      "🚀 ~ file: NotificationModule.js ~ line 95 ~ context",
      context
    );
    console.log(
      "🚀 ~ file: NotificationModule.ts ~ line 45 ~ notifId",
      notifId
    );
    const index = state.notifications.findIndex((item) => item.id === notifId);
    console.log("🚀 ~ file: NotificationModule.js ~ line 99 ~ index", index);
    const notifToUpdate = state.notifications[index];
    notifToUpdate.isRead = true;

    // Vue.set(state.notifications, index, { ...notifToUpdate, isRead: true });
    // Vue.set(state.notifications, index, { ...notifToUpdate, isRead: true });

    // const arr = state.notifications.map((item) =>
    //   item.id !== notifId ? item : { ...item, isRead: true, myNew: "123123asd" }
    // );
    // state.notifications = arr;

    state.notifications = [
      ...state.notifications.splice(index, 1, notifToUpdate),
    ];

    // state.notifications = [notifToUpdate, ...state.notifications];
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
