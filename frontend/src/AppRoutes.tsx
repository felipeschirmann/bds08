import Home from 'pages/Home';
import Before from 'pages/Before'
import Navbar from 'components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/before" element={<Before />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;