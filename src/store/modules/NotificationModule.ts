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
  get isThereUnreadNotification() {
    const readNotifications = this.notifications.filter(
      (notif) => !notif.isRead
    );

    return !!readNotifications.length;
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
          duration: 5000,
          // duration: 0,
        });
      });
      resolve("connected");
    });
  }
  @Action
  [Actions.GET_NOTIFICATIONS]() {
    return new Promise((resolve) => {
      ApiService.post("api/v1/notifications", {
        pagination: { pageSize: 45, pageNumber: 1 },
      })
        .then((response) => {
          this.context.commit(Mutations.SET_NOTIFICATIONS, response.data);

          resolve("asdasd");
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {
          // loading.value = false;
        });
    });
  }
  @Action
  [Actions.SET_NOTIFICATION_AS_READ](notifId) {
    return new Promise((resolve) => {
      this.context.commit(Mutations.SET_SINGLE_NOTIFICATION_AS_READ, notifId);
      ApiService.post("api/v1/notifications/mark-notifications-as-read", {
        notifIdArr: [notifId],
      })
        .then((response) => {
          resolve("asdasd");
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {
          // loading.value = false;
        });
    });
  }
  @Action
  [Actions.SET_ALL_NOTIFICATIONS_AS_READ](notifId) {
    return new Promise((resolve) => {
      this.context.commit(Mutations.SET_ALL_NOTIFICATIONS_AS_READ_MUTATION);
      ApiService.post("api/v1/notifications/mark-all-notifications-as-read")
        .then((response) => {
          resolve("asdasd");
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
  [Mutations.SET_SINGLE_NOTIFICATION_AS_READ](notifId) {
    const index = this.notifications.findIndex((item) => item.id === notifId);
    this.notifications[index].isRead = true;
  }
  @Mutation
  [Mutations.SET_NOTIFICATIONS](arr) {
    this.notifications = arr;
  }
  @Mutation
  [Mutations.ADD_NOTIFICATION](notif) {
    this.notifications.unshift(notif);
  }
  @Mutation
  [Mutations.SET_ALL_NOTIFICATIONS_AS_READ_MUTATION]() {
    this.notifications = this.notifications.map((notif) => {
      return {
        ...notif,
        isRead: true,
      };
    });
  }
}
