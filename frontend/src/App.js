import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (

    <div className="App">

      
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
