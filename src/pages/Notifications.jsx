import { useState } from 'react';
import { Check, Tag, Truck, Info, Star } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Orders', 'Offers', 'Delivery'];

  const notifications = [
    {
      id: 1, type: 'success', date: 'TODAY', time: '2m ago',
      icon: <Check size={16} color="#10b981" strokeWidth={3} />,
      bg: '#d1fae5', badge: null,
      title: 'Order Delivered',
      content: <>Your order from <span className="font-bold">Burger King</span> has been delivered. Enjoy your meal!</>
    },
    {
      id: 2, type: 'offer', date: 'TODAY', time: 'New', timeColor: 'var(--primary-blue)',
      icon: <Tag size={16} color="white" />,
      bg: 'var(--primary-blue)', badge: 'New',
      title: '50% Off Flash Sale!',
      content: 'Craving pizza? Get 50% off on all pizzas from Joe\'s Italian. Valid for the next 2 hours.',
      action: 'Claim Discount'
    },
    {
      id: 3, type: 'delivery', date: 'TODAY', time: '15m ago',
      icon: <Truck size={16} color="#f97316" />,
      bg: '#ffedd5', badge: null,
      title: 'Driver is Nearby',
      content: 'Your driver is only 2 blocks away. Get ready to receive your order!'
    },
    {
      id: 4, type: 'info', date: 'YESTERDAY', time: '1d ago',
      icon: <Info size={16} color="#64748b" />,
      bg: '#f1f5f9', badge: null,
      title: 'New Feature: Group Order',
      content: 'You can now place group orders with your friends and split the bill easily.'
    },
    {
      id: 5, type: 'reward', date: 'YESTERDAY', time: '1d ago',
      icon: <Star size={16} color="var(--primary-blue)" fill="var(--primary-blue)" />,
      bg: 'var(--accent-blue-light)', badge: null,
      title: 'Rewards Earned!',
      content: 'You\'ve earned 250 points from your last order. Check your profile for more rewards.'
    }
  ];

  const groupedNotifications = notifications.reduce((acc, notif) => {
    if (!acc[notif.date]) acc[notif.date] = [];
    acc[notif.date].push(notif);
    return acc;
  }, {});

  return (
    <div className="flex flex-col h-full bg-color pb-24 relative">
      <Header title="Notifications" rightIcon="more" />

      {/* Tabs */}
      <div className="flex px-4 pt-2 bg-white border-b border-gray-100" style={{ borderBottomColor: 'var(--border-light)' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-3 text-sm font-semibold"
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

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {Object.keys(groupedNotifications).map(date => (
          <div key={date} className="mb-6">
            <h3 className="px-6 py-4 text-xs font-bold text-gray uppercase tracking-widest">{date}</h3>
            
            <div className="flex flex-col">
              {groupedNotifications[date].map((item, idx) => (
                <div key={item.id} className="flex px-6 py-4 bg-white" style={{ borderBottom: '1px solid var(--border-light)' }}>
                  
                  {/* Icon */}
                  <div style={{ 
                    width: '40px', height: '40px', 
                    borderRadius: '12px', 
                    backgroundColor: item.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    marginRight: '16px'
                  }}>
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-sm text-dark truncate pr-2">{item.title}</h4>
                      <span className="text-xs shrink-0" style={{ color: item.timeColor || 'var(--text-light)' }}>{item.time}</span>
                    </div>
                    <p className="text-sm text-gray" style={{ lineHeight: '1.5', marginBottom: item.action ? '12px' : '0' }}>
                      {item.content}
                    </p>
                    {item.action && (
                      <button className="bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg bg-blue-500" style={{ backgroundColor: 'var(--primary-blue)' }}>
                        {item.action}
                      </button>
                    )}
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
