import { ElMessage } from "element-plus";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";

const state = {
  user_personal_info1: {
    photo: "media/users/300_21.jpg",
    name: "James",
    surname: "Jones",
    company_name: "Fifestudios",
    job: "Application Developer",
    email: "matt@fifestudios.com",
    phone: "44(76)34254578",
    company_site: "fifestudios",
  },
  user_account_info1: {
    username: "nick84",
    email: "nick.watson@loop.com",
    language: "English",
    time_zone: "(GMT-11:00) Midway Island",
    communication: {
      email: true,
      sms: true,
      phone: false,
    },
    verification: true,
  },
  currentProfile: { followers: [], followings: [] },
};

const getters = {
  currentProfile(state) {
    return state.currentProfile;
  },
  currentUserPersonalInfo1(state) {
    return state.user_personal_info;
  },

  currentUserAccountInfo1(state) {
    return state.user_account_info;
  },
};

const actions = {
  [Actions.GET_PROFILE](context, userName) {
    return new Promise((resolve) => {
      ApiService.get(`api/v1/profile/${userName}`)
        .then((response) => {
          context.commit(Mutations.SET_PROFILE, response.data);
          resolve(response.data);
        })
        .catch((err) => {
          ElMessage.error(err.message || "Server error");
          // context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [Actions.UPDATE_PERSONAL_INFO](context, payload) {
    context.commit(Mutations.SET_PERSONAL_INFO, payload);
  },
  [Actions.UPDATE_ACCOUNT_INFO](context, payload) {
    context.commit(Mutations.SET_ACCOUNT_INFO, payload);
  },
};

const mutations = {
  [Mutations.SET_PROFILE](state, profile) {
    state.currentProfile = profile;
  },
  [Mutations.SET_PERSONAL_INFO](state, user_personal_info) {
    state.user_personal_info = user_personal_info;
  },
  [Mutations.SET_ACCOUNT_INFO](state, user_account_info) {
    state.user_account_info = user_account_info;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
