import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function OrderHistory() {
  const [activeTab, setActiveTab] = useState('WEEKLY');
  const tabs = ['WEEKLY', 'MONTHLY'];

  const recentOrders = [
    {
      id: 101, name: 'Burger King', status: 'DELIVERED', date: 'Oct 24, 2023', items: 3, price: 24.50,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 102, name: 'Pizza Hut', status: 'DELIVERED', date: 'Oct 21, 2023', items: 2, price: 32.00,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 103, name: 'Sushi House', status: 'DELIVERED', date: 'Oct 19, 2023', items: 5, price: 45.20,
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=200&auto=format&fit=crop'
    }
  ];

  const pastOrders = [
    {
      id: 104, name: 'Taco Bell', status: '', date: 'Oct 15, 2023', items: 4, price: 18.75,
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=200&auto=format&fit=crop',
      greyscale: true
    }
  ];

  const OrderCard = ({ order, isPast }) => (
    <div className="bg-white p-4 rounded-2xl mb-4 shadow-sm" style={{ border: '1px solid var(--border-light)' }}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-bold text-base text-dark">{order.name}</h4>
            {order.status && (
              <span className="text-[9px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#d1fae5', color: '#059669' }}>
                {order.status}
              </span>
            )}
          </div>
          <p className="text-xs text-gray mb-1">
            {order.date} • {order.items} items • ₹{order.price.toFixed(2)}
          </p>
        </div>
        <img 
          src={order.image} 
          alt={order.name} 
          className="w-16 h-16 rounded-xl object-cover" 
          style={{ filter: order.greyscale ? 'grayscale(100%)' : 'none' }}
        />
      </div>
      <button 
        className="w-full flex items-center justify-center py-2.5 rounded-xl text-sm font-bold shadow-sm"
        style={{ 
          backgroundColor: isPast ? '#f1f5f9' : 'var(--primary-blue)', 
          color: isPast ? 'var(--text-dark)' : 'white'
        }}
      >
        <RotateCcw size={16} className="mr-2" /> Reorder
      </button>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-color pb-24 relative min-h-screen">
      <Header title="Order History" />

      {/* Tabs */}
      <div className="flex px-4 pt-2 bg-color border-b" style={{ borderBottomColor: 'var(--border-light)' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-3 text-xs font-bold tracking-wider"
            style={{ 
              color: activeTab === tab ? 'var(--primary-blue)' : 'var(--text-gray)',
              borderBottom: activeTab === tab ? '2px solid var(--primary-blue)' : '2px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-6 pt-6">
        <h3 className="font-bold text-lg text-dark mb-4">Recent Orders</h3>
        {recentOrders.map(order => <OrderCard key={order.id} order={order} />)}

        <h3 className="font-bold text-lg text-dark mt-6 mb-4">Past Orders</h3>
        {pastOrders.map(order => <OrderCard key={order.id} order={order} isPast={true} />)}
      </div>

      <BottomNav />
    </div>
  );
}
