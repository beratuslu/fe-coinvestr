import { h } from "vue";

import { ElMessage, ElNotification } from "element-plus";
import Vue from "vue";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";

import { pusher } from "./pusher";
import NotifMessages from "@/layout/header/partials/NotifMessages/";

// import { default as app } from "../../main";
// import app from "../../main";
// console.log("🚀 ~ file: NotificationModule.ts ~ line 13 ~ app", App);

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

      console.log(
        "🚀 ~ file: NotificationModule.ts ~ line 70 ~ returnnewPromise ~ Vue",
        Vue
      );

      channel.bind("notification", (data) => {
        context.commit(Mutations.ADD_NOTIFICATION, data);

        ApiService.vueInstance.config.globalProperties.$notify.success({
          title: "Info",
          message: "This is a message without close button",
          // message: h(NotifMessages["INSUFFICIENT_BALANCE_FOR_SOCKET_CHECK"], {
          //   notification: data,
          //   store: context.store,
          // }),
          showClose: true,
          position: "bottom-left",
        });

        // app.$notify.success({
        //   title: "Info",
        //   message: "This is a message without close button",
        //   // message: h(NotifMessages["INSUFFICIENT_BALANCE_FOR_SOCKET_CHECK"], {
        //   //   notification: data,
        //   //   store: context.store,
        //   // }),
        //   showClose: true,
        //   position: "bottom-left",
        // });

        // ElNotification.success({
        //   title: "Info",
        //   // message: "This is a message without close button",
        //   message: h(NotifMessages["INSUFFICIENT_BALANCE_FOR_SOCKET_CHECK"], {
        //     notification: data,
        //     store: context.store,
        //   }),
        //   showClose: true,
        //   position: "bottom-left",
        // });
      });
    });
  },

  // [Actions.GET_NOTIFICATIONS](context, userName) {
  //   return new Promise((resolve) => {
  //     ApiService.post(`api/v1/notifications`, {
  //       pagination: { pageSize: 45, pageNumber: 1 },
  //     })
  //       .then((response) => {
  //         context.commit(Mutations.SET_PROFILE, response.data);
  //         resolve(response.data);
  //       })
  //       .catch((err) => {
  //         ElMessage.error(err.message || "Server error");
  //         // context.commit(SET_ERROR, response.data.errors);
  //       });
  //   });
  // },
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
