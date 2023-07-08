import './App.css';
import Navigation from '../src/component/nav.js'
import Footer from '../src/component/footer.js'
import Film from '../src/component/Film.js'
import { ThemeContext } from './component/themcontext';
import { useContext } from 'react';




function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='App' style={{ backgroundColor: theme.backgroundColorAll }}>
      <Navigation />
      <Film />
      <Footer />
    </div >
  );
}

export default App;
