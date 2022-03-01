import { TOAST_PUSH } from "./types";

export function addToast(uuid, type, message, duration) {
  return {
    type: TOAST_PUSH,
    payload: {
      uuid: uuid,
      type: type,
      message: message,
      duration: duration,
    },
  };
}
