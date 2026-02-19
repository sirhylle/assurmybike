import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Subscription from './pages/Subscription';
import Claims from './pages/Claims';
import './index.css';
import './i18n';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/claims" element={<Claims />} />
      </Routes>
    </Router>
  );
}

export default App;
