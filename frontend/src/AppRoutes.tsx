import Home from 'pages/Home';
import Before from 'pages/Before'
import After from 'pages/After'
import Navbar from 'components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/before" element={<Before />} />
        <Route path="/after" element={<After />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;