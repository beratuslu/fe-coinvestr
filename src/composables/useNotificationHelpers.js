import { Actions, Mutations } from "@/store/enums/StoreEnums";
export default function helper(store) {
  const setNotifAsRead = (notifId) => {
    store.dispatch(Actions.SET_NOTIFICATION_AS_READ, notifId);
  };

  return {
    setNotifAsRead,
  };
}
