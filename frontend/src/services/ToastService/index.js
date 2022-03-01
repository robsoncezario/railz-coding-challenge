import { v4 as uuid } from "uuid";

import store from "../../store/index";
import { addToast } from "../../store/toast/actions";

export default class ToastService {
  static push(type, message, duration = 5000) {
    store.dispatch(addToast(uuid(), type, message, duration));
  }

  static info(message, duration = 5000) {
    ToastService.push("info", message, duration);
  }

  static success(message, duration = 5000) {
    ToastService.push("success", message, duration);
  }

  static error(message, duration = 5000) {
    ToastService.push("error", message, duration);
  }
}
