// import React from 'react';
// import ReactDOM from 'react-dom';

// import { WebMap } from './WebMap';


// ReactDOM.render(
//     <WebMap />,
//     document.getElementById('root'),
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/webmap/App';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);