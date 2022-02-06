import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// redux
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './redux/reducers';
import { Provider } from 'react-redux';



const store = createStore(reducer as any, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

