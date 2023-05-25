import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../src/JS/(6)_Store';
import CounterDisplay from '../src/JS/(8)_CounterDisplay';
import CounterButtons from '../src/JS/(8)_CounterButton';

function App() {
  return (
    <Provider store = {store}>
      <div>
        <CounterDisplay></CounterDisplay>
        <CounterButtons></CounterButtons>
      </div>
    </Provider>

  );
}

export default App;
