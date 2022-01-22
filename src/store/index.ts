import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";
import ProfileModule from "@/store/modules/ProfileModule";
import EnumsAndConstantsModule from "@/store/modules/EnumsAndConstantsModule";
import SocketModule from "@/store/modules/SocketModule";
import NotificationModule from "@/store/modules/NotificationModule";

config.rawError = true;

const store = createStore({
  modules: {
    AuthModule,
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
    ProfileModule,
    EnumsAndConstantsModule,
    SocketModule,
    NotificationModule,
  },
});

export default store;
