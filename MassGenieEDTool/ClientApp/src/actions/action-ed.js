import * as c from '../constants/constant-ed';

export function changeMode(){
	return{
		type: c.CHANGE_MODE
	};
}

export function changeTextBox(newTextBox){
    return{
        type: c.CHANGE_TEXT_BOX,
        payload: newTextBox
    }
}

export function submit(obj){
    return{
        type: c.SUBMIT_ED,
        payload: obj
    }
}

export function fetchOutput(ouput){
    return{
        type: c.FETCH_OUTPUT,
        payload: ouput
    }
}