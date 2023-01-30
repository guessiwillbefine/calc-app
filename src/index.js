import React from 'react';
import ReactDOM from 'react-dom/client';
import CalcBody from './Calculator/Calc_Body';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from './store/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer);
console.log(store);
export default store;

root.render(
    <Provider store={store}>
        <CalcBody store={store}/>
    </Provider>
);
