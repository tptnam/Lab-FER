import './App.css';
import Navigation from '../src/component/nav.js'
import Footer from '../src/component/footer.js'
import Film from '../src/component/Film.js'



function App() {
  return (
    <div className='App'>
      <Navigation />
      <Film />
      <Footer />
    </div>
  );
}

export default App;
