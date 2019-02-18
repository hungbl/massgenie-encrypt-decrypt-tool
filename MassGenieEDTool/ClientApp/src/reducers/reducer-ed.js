import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    mode: 1, // 1: encrypt 2: decrypt
    mgKey: '',
    input: '',
    ouput: '' 
})

export default (state = initialState, action) => {
    // switch (action.type) {
    //     case value:
    //         break;
    // }
    return state;
}