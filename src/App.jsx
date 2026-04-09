import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Subscription from './pages/Subscription';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import TrackDelivery from './pages/TrackDelivery';
import Notifications from './pages/Notifications';
import OrderHistory from './pages/OrderHistory';
import Profile from './pages/Profile';

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
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/track-delivery" element={<TrackDelivery />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/plan" element={<OrderHistory />} />
          <Route path="/orders" element={<OrderHistory />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
