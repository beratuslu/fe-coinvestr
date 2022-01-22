import Pusher from "pusher-js";
import JwtService from "@/core/services/JwtService";

let pusher = {};

const initPusher = () => {
  const BASE_URL = process.env.VUE_APP_API_BASE_URL;
  const tokenFromLocalStorage = JwtService.getToken();

  pusher = new Pusher("d556fb180636830126fa", {
    cluster: "eu",
    authEndpoint: `${BASE_URL}/pusher/auth`,

    auth: { headers: { Authorization: `bearer ${tokenFromLocalStorage}` } },
  });
  return pusher;
};

export { initPusher, pusher };

// export default {
//   initPusher,
//   pusher,
// };
