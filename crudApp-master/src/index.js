import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reduxStore/reducer';
import './styleCss/index.css';
import App from './App';

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root'));