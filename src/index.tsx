import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConfigureStore from "./redux/StoreConfig";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={ConfigureStore}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
