import { createApp } from "vue";
import App from "./App.vue";
import moment from "moment";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import vfmPlugin from "vue-final-modal";
import { ElMessage, ElNotification } from "element-plus";

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import "bootstrap";

const app = createApp(App);
// app.config.globalProperties.$notif = ElNotification;
app.provide("moment", moment);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(vfmPlugin);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);

app.mount("#app");
// export default app;
export default app;
