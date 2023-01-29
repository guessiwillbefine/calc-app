import React from 'react';
import ReactDOM from 'react-dom/client';
import CalcBody from './Calculator/Calc_Body';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider>
        <React.StrictMode>
            <CalcBody/>
        </React.StrictMode>
    </Provider>
);
