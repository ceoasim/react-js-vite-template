import { useSelector } from 'react-redux';

export const GetLanguage = () =>
  useSelector(
    (state) => state.common.language);
export const GetToggleToast = () =>
  useSelector(
    (state) => state.common.toggleToast);
export const GetToastMessage = () =>
  useSelector(
    (state) => state.common.toastMessage);
export const GetToastType = () =>
  useSelector(
    (state) => state.common.toastType);
export const GetloginModalState = () =>
  useSelector(
    (state) => state.common.loginModal);
export const GetRegisterModalState = () =>
  useSelector(
    (state) => state.common.registerModal);