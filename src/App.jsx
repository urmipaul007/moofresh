import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Subscription from './pages/Subscription';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/subscription" element={<Subscription />} />
          
          {/* Dummy routes for other bottom nav items */}
          <Route path="/plan" element={<div className="flex justify-center items-center h-full text-gray font-bold text-xl">Orders Page Coming Soon</div>} />
          <Route path="/cart" element={<div className="flex justify-center items-center h-full text-gray font-bold text-xl">Cart Page Coming Soon</div>} />
          <Route path="/profile" element={<div className="flex justify-center items-center h-full text-gray font-bold text-xl">Profile Page Coming Soon</div>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
