import logo from './logo.svg';
import './App.css';
import './index'
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Services } from './Pages/Services';
import { Contact } from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
