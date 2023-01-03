import React from 'react'
import Routes from './routes/Routes'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalState from './global/GlobalState'


function App() {
  return (
    <div className="App-header">
      <GlobalState>
        <Routes />
      </GlobalState>
      
    </div>
  );
}

export default App;
