import {
  CHANGE_LANGUAGE,
  TOGGLE_TOAST,
  OPEN_LOGIN_MODAL,
  OPEN_REGISTER_MODAL
} from './types';

export const changeLanguage = (lang) => (
  {
    type: CHANGE_LANGUAGE,
    payload: lang
  }
);


export const toggleToast = (isOpen, message, toastType) => (
  {
    type: TOGGLE_TOAST,
    payload: { isOpen, message, toastType },
  }
);

export const openLoginModal = (open) => (
  {
    type: OPEN_LOGIN_MODAL,
    payload: open
  }
);

export const openRegisterModal = (open) => (
  {
    type: OPEN_REGISTER_MODAL,
    payload: open
  }
);
