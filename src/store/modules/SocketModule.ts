// import { ElMessage } from "element-plus";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
// import ApiService from "@/core/services/ApiService";
// import Pusher from "pusher-js";
// import JwtService from "@/core/services/JwtService";
import { initPusher } from "./pusher";

let pusher;

const state = {
  notifications: [],
};

const getters = {
  enumsAndConstants1(state) {
    return state.enumsAndConstants1;
  },
};

const actions = {
  [Actions.CONNECT_SOCKET](context, payload) {
    return new Promise((resolve) => {
      pusher = initPusher();
      const channel = pusher.subscribe("my-channel");

      context.dispatch(
        Actions.CONNECT_PRIVATE_CHANNEL,
        pusher.connection.socket_id
      );
    });
  },

  [Actions.DISCONNECT_SOCKET](context) {
    return new Promise((resolve) => {
      const channels = Object.keys(pusher.channels.channels);
      channels.forEach((channelName) => {
        pusher.unsubscribe(channelName);
      });
      // pusher.disconnect();

      resolve("disconnected!");
    });
  },
};

const mutations = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
