import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
// import { AxiosRequestConfig } from "axios";
import router from "@/router";

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  token: string;
}

export interface UserAuthInfo {
  errors: Array<string>;
  user: User;
  isAuthenticated: boolean;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  errors = [];
  user = {} as User;
  // isAuthenticated = !!JwtService.getToken();
  isAuthenticated = false;

  /**
   * Get current user object
   * @returns User
   */
  get authenticatedUser(): User {
    return this.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get authentification errors
   * @returns array
   */
  get getErrors(): Array<string> {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_AUTH](data) {
    this.isAuthenticated = true;
    this.user = data.user;
    this.errors = [];
    JwtService.saveToken(data.token);
    JwtService.saveUser(data.user);
    ApiService.setHeaderAndUser();
  }

  @Mutation
  [Mutations.SET_USER](user) {
    this.user = user;
    this.isAuthenticated = true;
  }

  @Mutation
  [Mutations.SET_PASSWORD](password) {
    this.user.password = password;
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.user = {} as User;
    this.errors = [];
    JwtService.destroyToken();
    ApiService.removeHeader();
    // const router = useRouter();
    router.push({ name: "sign-in" });

    // ApiService.vueInstance.$router.push({ name: "sign-in" });
    // App.$router.push({ name: "sign-in" });
  }

  @Action({ rawError: true })
  [Actions.LOGIN](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("auth/login", credentials)
        .then((response) => {
          this.context.commit(Mutations.SET_AUTH, response.data);
          resolve();
        })
        .catch((error) => {
          this.context.commit(Mutations.SET_ERROR, [
            error.response.data.message,
          ]);

          // reject();
          reject("asdasd1235");
        });
    });
  }

  @Action
  [Actions.LOGOUT]() {
    this.context.commit(Mutations.PURGE_AUTH);
  }

  @Action
  [Actions.REGISTER](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("register", credentials)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("forgot_password", payload)
        .then((response) => {
          this.context.commit(Mutations.SET_AUTH, response);
          resolve();
        })
        .catch(({ response }) => {
          console.log(response.data.errors);
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.VERIFY_AUTH]() {
    if (JwtService.getToken()) {
      ApiService.setHeaderAndUser();
      ApiService.get("verify")
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
        });
    } else {
      this.context.commit(Mutations.PURGE_AUTH);
    }
  }

  // @Action
  // [Actions.UPDATE_USER](payload) {
  //   ApiService.setHeader();
  //   return new Promise<void>((resolve, reject) => {
  //     ApiService.post("update_user", payload)
  //       .then(({ data }) => {
  //         this.context.commit(Mutations.SET_USER, data);
  //         resolve();
  //       })
  //       .catch(({ response }) => {
  //         this.context.commit(Mutations.SET_ERROR, response.data.errors);
  //         reject();
  //       });
  //   });
  // }
}
