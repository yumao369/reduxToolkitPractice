import React from 'react';
import Counter from './components/counter';
import CounterView from './components/counterView';

function App() {
  return (
    <div className="App">
      <CounterView />
      <Counter />
    </div>
  );
}

export default App;
