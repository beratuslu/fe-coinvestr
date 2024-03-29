import { App } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/JwtService";
import store from "@/store";

import { AxiosResponse, AxiosRequestConfig } from "axios";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import app from "@/main";
const BASE_URL = process.env.VUE_APP_API_BASE_URL;

axios.interceptors.response.use(function (response) {
  return response.data;
});
const UNAUTHORIZED = 401;
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    let status = null;
    if (error.response) {
      status = error.response.status;
    }
    if (status === UNAUTHORIZED) {
      store.commit(Mutations.PURGE_AUTH);
    }
    return Promise.reject(error);
  }
);

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App;

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    // ApiService.vueInstance.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    ApiService.vueInstance.axios.defaults.baseURL = BASE_URL;
  }

  /**
   * @description set the default HTTP request headers
   */
  public static setHeaderAndUser(): void {
    const tokenFromLocalStorage = JwtService.getToken();
    if (tokenFromLocalStorage) {
      ApiService.vueInstance.axios.defaults.headers.common[
        "Authorization"
      ] = `bearer ${tokenFromLocalStorage}`;
    }
    const userFromLocalStorage = JwtService.getUser();

    if (userFromLocalStorage) {
      store.commit(Mutations.SET_USER, JSON.parse(userFromLocalStorage));
    }
  }

  public static removeHeader(): void {
    delete axios.defaults.headers.common["Authorization"];
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.get(resource, params);
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(
    resource: string,
    slug = "" as string
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.get(`${resource}/${slug}`);
    // .catch((error) => {
    //   throw new Error(`[KT] ApiService ${error}`);
    // });
  }

  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(resource: string, params?: any): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.post(`${resource}`, params);
  }

  /**
   * @description send the UPDATE HTTP request
   * @param resource: string
   * @param slug: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static update(
    resource: string,
    slug: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params);
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(
    resource: string,
    params: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.put(`${resource}`, params);
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.delete(resource).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
}

export default ApiService;
