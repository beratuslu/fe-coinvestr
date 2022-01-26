import { h } from "vue";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/StoreEnums";

import ApiService from "@/core/services/ApiService";
import { pusher } from "./pusher";
import NotifMessages from "@/layout/header/partials/NotifMessages/";

export interface Notification {
  id: boolean;
  isRead: string;
}

export interface NotificationModule {
  // id?: number;
  // isRead?: number;
  notifications: Array<Notification>;
  // classes: {
  //   header?: Array<string>;
  //   headerContainer?: Array<string>;
  //   headerMobile?: Array<string>;
  //   headerMenu?: Array<string>;
  //   aside?: Array<string>;
  //   asideMenu?: Array<string>;
  //   asideToggle?: Array<string>;
  //   toolbar?: Array<string>;
  //   toolbarContainer?: Array<string>;
  //   content?: Array<string>;
  //   contentContainer?: Array<string>;
  //   footerContainer?: Array<string>;
  //   sidebar?: Array<string>;
  //   pageTitle?: Array<string>;
  // };
}

@Module
export default class BodyModule
  extends VuexModule
  implements NotificationModule
{
  notifications: any = [];

  /**
   * Get current page title
   * @returns string
   */
  get getNotifications() {
    return this.notifications;
  }
  @Action
  [Actions.CONNECT_PRIVATE_CHANNEL]() {
    return new Promise((resolve) => {
      const channel = pusher.subscribe(
        `private-user-${this.context.getters.authenticatedUser.id}`
      );
      channel.bind("notification", (data) => {
        this.context.commit(Mutations.ADD_NOTIFICATION, data);

        const { title, status } =
          this.context.getters.enumsAndConstants.notifications[data.notifType];

        ApiService.vueInstance.config.globalProperties.$notify[status]({
          title,
          // message: "This is a message without close button",
          message: h(NotifMessages[data.notifType], {
            notification: data,
            store: this.context,
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
  }
  @Action
  [Actions.GET_NOTIFICATIONS](context) {
    return new Promise((resolve) => {
      ApiService.post("api/v1/notifications", {
        pagination: { pageSize: 45, pageNumber: 1 },
      })
        .then((response) => {
          // this.notifications = response.data;
          context.commit(Mutations.SET_NOTIFICATIONS, response.data);
          console.log(
            "🚀 ~ file: NotificationModule.ts ~ line 95 ~ .then ~ response.data",
            response.data
          );
          resolve("asdasd");
          // notifications.value = response.data;
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {
          // loading.value = false;
        });
    });
  }

  @Mutation
  [Mutations.SET_NOTIFICATION_AS_READ](notifId) {
    const index = this.notifications.findIndex(
      (item) => item["id"] === notifId
    );
    this.notifications[index]["isRead"] = true;
  }
  @Mutation
  [Mutations.SET_NOTIFICATIONS](arr) {
    this.notifications = arr;
  }
}
