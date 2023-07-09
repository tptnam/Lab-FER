import { ThemeContext } from './component/themcontext';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navigation from '../src/component/nav.js'
import Footer from '../src/component/footer.js'
import Film from '../src/component/Film.js'
import Contact from './component/contact';
import FilmDetail from './component/FilmDetail';




function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='App' style={{ backgroundColor: theme.backgroundColorAll }}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Film />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/FilmDetail/:id' element={<FilmDetail />}></Route >

      </Routes>
      <Footer />
    </div >
  );
}

export default App;
