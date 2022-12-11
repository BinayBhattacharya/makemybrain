import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import Signup from './components/Signup';
import Login from './components/Login';
import Renderscreen from './components/Renderscreen';
import Resetpass from './components/Resetpass';
import Forgotpass from './components/Forgotpass';
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';

function App() {
  return (

    <div className="App">

      
      <main>
        <Routes>
          <Route path="/go" element={<Register />}/>
          <Route path="/" element={<Renderscreen />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/forgot-password" element={<Forgotpass />}/>
          <Route path="/reset" element={<Resetpass />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/editprofile" element={<Editprofile />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
