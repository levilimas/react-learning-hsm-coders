import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/globalStyle';
import ReactRouterDom from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;