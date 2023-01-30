let initialState = {items: ''};

const reducer = (state = initialState, action) => {
    //console.log(`reducer(${state.items}, ${action.payload})`)
    switch (action.type) {
        case 'GET' :
            console.log(action.payload);
            return {
                 ...state,
                items: action.payload
            }

        case 'CLEAR' :
            return [];
        default:
            return state;
    }
}


export default reducer;