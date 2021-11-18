// import { Mutations, Actions } from "@/store/enums/StoreEnums";
// import store from "@/store";

const ID_TOKEN_KEY = "id_token" as string;
const ID_USER_KEY = "id_user" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const getUser = (): string | null => {
  return window.localStorage.getItem(ID_USER_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};
/* eslint-disable @typescript-eslint/no-explicit-any*/
export const saveUser = (user: any): void => {
  window.localStorage.setItem(ID_USER_KEY, JSON.stringify(user));
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(ID_USER_KEY);
};

export default { getToken, saveToken, destroyToken, saveUser, getUser };
