import Home from 'pages/Home';
import Search from 'pages/Search'
import Navbar from 'components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;