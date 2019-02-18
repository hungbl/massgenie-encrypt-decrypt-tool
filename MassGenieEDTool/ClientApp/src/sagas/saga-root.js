import { all } from 'redux-saga/effects'
import {sagaSubmit} from './saga-ed';

export function* rootSaga(){
	yield all([
		sagaSubmit(),
	])
}