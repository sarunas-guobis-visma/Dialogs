import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {worker} from './__tests__/mocks/browser'

worker.start().then(r => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
})

