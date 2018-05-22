import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import './styles/index.css';

const store = createStore (allReducers);


ReactDOM.render(
<App />,document.getElementById('root'));
registerServiceWorker();
