import { call, put, select, takeLatest } from 'redux-saga/effects'
import * as Actions from './action';
import { Api } from './api'
import {
  OPEN_LOGIN_MODAL
} from './types'

const getToken = state => state.onboarding.token;
const getLanguage = state => state.common.language;
const getUser = state => state.onboarding.user;

function* getTestSaga(action) {
  try {
    console.log('yoyo');
    
  } catch (error) {
    yield put(Actions.getSaleTimersSuccess([]));
    console.log("error", error);
  }
}

function* commonSaga() {
  yield takeLatest(OPEN_LOGIN_MODAL, getTestSaga);

}

export default commonSaga;
