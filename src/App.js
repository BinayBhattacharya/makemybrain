import React from 'react';
import './App.css';
import Header from './components/Header';
import Aboutus from './components/Aboutus';
import Blogs from './components/Blogs';
import Book from './components/Book';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Home from './components/Home';
import Comic from './components/Comic';
import Freegifts from './components/Freegifts';
import Reviews from './components/Reviews';
import { Route, Routes } from 'react-router-dom';

function App() {
  return <React.Fragment>
  <header>
    <Header />
  </header>
  <main>
    
    <Routes>
      <Route path="/aboutus" element={<Aboutus />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/book" element={<Book />}/>
      <Route path="/contactus" element={<Contactus />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/comic" element={<Comic />}/>
      <Route path="/freegifts" element={<Freegifts />}/>
      <Route path="/reviews" element={<Reviews />}/>

    </Routes>
  </main>
  <footer>
    <Footer />
  </footer>
</React.Fragment>;

}

export default App;
