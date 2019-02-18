import axios from 'axios';
import { take, call, put, fork } from 'redux-saga/effects';
import * as c from '../constants/constant-ed';
import {fetchOutput} from '../actions/action-ed';

export function* sagaSubmit(){
    while (true) {
      const {payload} = yield take(c.SUBMIT_ED);
      try {
        const url = 'encrypt-decrypt/get-result';
  
        let res = yield call(axios.post, url, payload);
        if(res.data.status == "success"){
          yield put(fetchOutput(res.data.data));
        }else{
          alert('Something wrong happened!');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }