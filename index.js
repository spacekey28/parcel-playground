import './style/main';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello parcel with React</h1>
}

const rootDiv = document.getElementById('root');

ReactDOM.render(<App/>, rootDiv);