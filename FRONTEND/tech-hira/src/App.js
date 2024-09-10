import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About'; // Example page
import Contact from './pages/ContactPage'; // Another example page
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
