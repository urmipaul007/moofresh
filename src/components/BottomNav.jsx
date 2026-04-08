import { Home, Grid, Calendar, ShoppingCart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink 
        to="/home" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Home size={20} />
        <span>Home</span>
      </NavLink>
      <NavLink 
        to="/shop" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Grid size={20} />
        <span>Categories</span>
      </NavLink>
      <NavLink 
        to="/plan" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Calendar size={20} />
        <span>Orders</span>
      </NavLink>
      <NavLink 
        to="/cart" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        style={{ position: 'relative' }}
      >
        <ShoppingCart size={20} />
        <span>Cart</span>
        <div style={{
          position: 'absolute',
          top: '-4px',
          right: '8px',
          backgroundColor: '#ef4444',
          color: 'white',
          fontSize: '8px',
          fontWeight: 'bold',
          borderRadius: '50%',
          width: '14px',
          height: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          2
        </div>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <User size={20} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}
