import Immutable from 'immutable';
import * as c from '../constants/constant-ed';

const initialState = Immutable.fromJS({
    mode: 1, // 1: encrypt 2: decrypt
    mgKey: '',
    input: '',
    ouput: '' 
})

export default (state = initialState, action) => {
    switch (action.type) {
        case c.CHANGE_MODE:
            const currentMode = state.get('mode');
            return state.set('mode', currentMode == 1 ? 2 : 1);
        case c.CHANGE_TEXT_BOX:
            return state.set(action.payload.fieldName, action.payload.value);
        case c.FETCH_OUTPUT:
            return state.set('output', action.payload);
    }
    return state;
}