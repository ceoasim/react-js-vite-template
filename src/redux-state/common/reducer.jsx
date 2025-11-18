/* eslint-disable import/no-anonymous-default-export */
import {
  CHANGE_LANGUAGE,
  TOGGLE_TOAST,
  OPEN_LOGIN_MODAL,
  OPEN_REGISTER_MODAL,
} from "./types";

const INITIAL_STATE = {
  toggleToast: false,
  toastType: "",
  toastMessage: "",
  loginModal: true,
  registerModal: false,
  language: "en",
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: payload };

    case TOGGLE_TOAST:
      return {
        ...state,
        toggleToast: payload.isOpen,
        toastMessage: payload.message,
        toastType: payload.type,
      };


    case OPEN_LOGIN_MODAL:
      return { ...state, loginModal: payload };
    case OPEN_REGISTER_MODAL:
      return { ...state, registerModal: payload };


    default:
      return state;
  }
};
