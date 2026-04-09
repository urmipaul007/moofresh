import { Bell, Truck, Trash2, Tag, Percent, Settings, Plus, Minus, Search, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full animate-fade-in" style={{ backgroundColor: '#f6f9fc', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Header */}
      <div className="flex justify-between items-center" style={{ padding: '24px 24px 16px' }}>
        <div className="flex items-center" style={{ gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#e2e8f0', overflow: 'hidden' }}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <p className="text-xs text-gray font-semibold uppercase tracking-wider">Welcome Back</p>
            <h2 className="text-lg font-bold">Good Morning, Alex!</h2>
          </div>
        </div>
        <div 
          onClick={() => navigate('/notifications')}
          style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--surface-shadow)', position: 'relative', cursor: 'pointer' }}
        >
          <Bell size={20} color="var(--text-dark)" />
          <div style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%', border: '2px solid white' }}></div>
        </div>
      </div>

      <div style={{ padding: '0 24px' }}>
        {/* Delivery Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '0', overflow: 'hidden', boxShadow: 'var(--surface-shadow)', marginBottom: '24px' }}>
          <div style={{ position: 'relative', height: '120px' }}>
            <img src="/milk.png" alt="Delivery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7), transparent)' }}></div>
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', backgroundColor: '#4fa6fd', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>
              DELIVERY REMINDER
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <div className="flex justify-between items-start" style={{ marginBottom: '16px' }}>
              <div>
                <h3 className="font-bold text-lg" style={{ marginBottom: '4px' }}>Your Next Delivery</h3>
                <p className="text-primary font-semibold text-sm">Arriving tomorrow, 6:00 AM - 7:30 AM</p>
              </div>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#e5f0ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Truck size={20} className="text-primary" />
              </div>
            </div>
            
            <div className="flex items-center text-sm font-medium text-gray" style={{ gap: '8px', marginBottom: '20px' }}>
              <Trash2 size={16} />
              <span>2L Full Cream Milk, 500g Fresh Curd</span>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <button 
                className="btn-primary shadow-sm" 
                style={{ padding: '12px 24px', borderRadius: '12px' }}
                onClick={() => navigate('/subscription')}
              >
                Modify Delivery
              </button>
            </div>
          </div>
        </div>

        {/* Today's Offers */}
        <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
          <h3 className="text-lg font-bold">Today's Offers</h3>
          <a href="#" className="flex text-sm text-primary font-semibold">View All</a>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px', margin: '0 -24px', paddingLeft: '24px', paddingRight: '24px' }} className="scrollbar-hide">
          <div style={{ minWidth: '280px', backgroundColor: '#4fa6fd', borderRadius: '20px', padding: '20px', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ marginBottom: '8px', opacity: 0.9 }}>Special Discount</p>
            <h4 className="text-xl font-bold" style={{ marginBottom: '8px' }}>20% OFF on Organic<br/>Ghee</h4>
            <p className="text-xs" style={{ marginBottom: '16px', opacity: 0.9 }}>Valid for subscription users only</p>
            <button style={{ backgroundColor: 'white', color: '#4fa6fd', padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
              CLAIM NOW
            </button>
            <Tag size={120} color="white" style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.2 }} />
          </div>
          <div style={{ minWidth: '280px', backgroundColor: '#10b981', borderRadius: '20px', padding: '20px', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <p className="text-xs font-bold uppercase tracking-wider" style={{ marginBottom: '8px', opacity: 0.9 }}>Bundle Offer</p>
            <h4 className="text-xl font-bold" style={{ marginBottom: '8px' }}>Free Bread with<br/>Morning Milk</h4>
             <p className="text-xs" style={{ marginBottom: '16px', opacity: 0.9 }}>When you order 2L or more</p>
            <button style={{ backgroundColor: 'white', color: '#10b981', padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Active Subscriptions */}
        <div className="flex justify-between items-center" style={{ marginBottom: '16px', marginTop: '8px' }}>
          <h3 className="text-lg font-bold">Active Subscriptions</h3>
          <Settings size={18} className="text-gray" />
        </div>

        <div className="flex flex-col" style={{ gap: '12px', marginBottom: '32px' }}>
          <div 
            className="flex items-center" 
            style={{ backgroundColor: 'white', padding: '12px', borderRadius: '16px', boxShadow: 'var(--surface-shadow)', cursor: 'pointer' }}
            onClick={() => navigate('/subscription')}
          >
            <img src="/milk.png" style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }} />
            <div style={{ marginLeft: '16px', flex: 1 }}>
              <div className="flex items-center" style={{ gap: '8px', marginBottom: '4px' }}>
                <h4 className="font-bold">Full Cream Milk</h4>
                <span style={{ backgroundColor: '#d1fae5', color: '#059669', fontSize: '8px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>ACTIVE</span>
              </div>
              <p className="text-xs text-gray" style={{ marginBottom: '4px' }}>1 Litre • Daily Delivery</p>
              <p className="text-xs text-light" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                 <span>📅</span> Next: Tomorrow 6:00 AM
              </p>
            </div>
            <div style={{ width: '40px', height: '24px', backgroundColor: '#4fa6fd', borderRadius: '12px', position: 'relative' }}>
               <div style={{ position: 'absolute', right: '2px', top: '2px', width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%' }}></div>
            </div>
          </div>

          <div 
            className="flex items-center" 
            style={{ backgroundColor: 'white', padding: '12px', borderRadius: '16px', boxShadow: 'var(--surface-shadow)', cursor: 'pointer' }}
            onClick={() => navigate('/subscription')}
          >
            <img src="/curd.png" style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }} />
            <div style={{ marginLeft: '16px', flex: 1 }}>
              <div className="flex items-center" style={{ gap: '8px', marginBottom: '4px' }}>
                <h4 className="font-bold">Probiotic Curd</h4>
                <span style={{ backgroundColor: '#d1fae5', color: '#059669', fontSize: '8px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>ACTIVE</span>
              </div>
              <p className="text-xs text-gray" style={{ marginBottom: '4px' }}>500g • Mon, Wed, Fri</p>
              <p className="text-xs text-light" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                 <span>📅</span> Next: Tomorrow 6:00 AM
              </p>
            </div>
             <div style={{ width: '40px', height: '24px', backgroundColor: '#4fa6fd', borderRadius: '12px', position: 'relative' }}>
               <div style={{ position: 'absolute', right: '2px', top: '2px', width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%' }}></div>
            </div>
          </div>
        </div>

        {/* Popular Products */}
        <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
          <h3 className="text-lg font-bold">Popular Products</h3>
          <a href="#" className="text-sm text-primary font-semibold">Browse Shop</a>
        </div>

        <div className="flex" style={{ gap: '16px', marginBottom: '24px' }}>
          <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--surface-shadow)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'white', borderRadius: '50%', padding: '6px', cursor: 'pointer' }}>
               <Heart size={16} color="#94a3b8" />
            </div>
            <img src="/paneer.png" style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
            <div style={{ padding: '12px' }}>
              <p className="text-xs text-gray font-medium" style={{ marginBottom: '4px' }}>Fresh Dairy</p>
              <h4 className="font-bold text-sm" style={{ marginBottom: '12px' }}>Soft Malai Paneer</h4>
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary">₹4.50</span>
                <button style={{ backgroundColor: '#f0f6fc', padding: '6px', borderRadius: '8px', color: '#4fa6fd' }}>
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--surface-shadow)', position: 'relative' }}>
             <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'white', borderRadius: '50%', padding: '6px', cursor: 'pointer' }}>
               <Heart size={16} color="#94a3b8" />
            </div>
            <img src="/butter.png" style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
            <div style={{ padding: '12px' }}>
              <p className="text-xs text-gray font-medium" style={{ marginBottom: '4px' }}>Artisanal</p>
              <h4 className="font-bold text-sm" style={{ marginBottom: '12px' }}>Salted Cow Butter</h4>
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary">₹3.20</span>
                <button style={{ backgroundColor: '#f0f6fc', padding: '6px', borderRadius: '8px', color: '#4fa6fd' }}>
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <BottomNav />
    </div>
  );
}
