import { ElMessage } from "element-plus";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";

const state = {
  enumsAndConstants: {},
};

const getters = {
  enumsAndConstants(state) {
    return state.enumsAndConstants;
  },
};

const actions = {
  [Actions.GET_ENUMS_AND_CONSTANTS](context, payload) {
    return new Promise((resolve) => {
      ApiService.get(`api/v1/meta/enums-and-constants`)
        .then((response) => {
          context.commit(Mutations.SET_ENUMS_AND_CONSTANTS, response.data);
          resolve(response.data);
        })
        .catch((err) => {
          ElMessage.error(err.message || "Server error");
          // context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
};

const mutations = {
  [Mutations.SET_ENUMS_AND_CONSTANTS](state, data) {
    state.enumsAndConstants = data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
