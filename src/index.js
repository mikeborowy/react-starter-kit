import '../node_modules/bootstrap/dist/css/bootstrap.css';
// This component handles the App template used on every page. React ecosystem
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App/>, 
  document.getElementById('app')
  );
