import {createStore} from "redux";

const defaultState = {
    expressions: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'REQUEST_EXPRESSIONS' : {
            return {
                ...state, expressions: action.payload
            }
        }
        default :
            return state;
    }
}

//todo
const store = createStore(reducer);
