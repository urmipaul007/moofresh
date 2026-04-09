import { useState } from 'react';
import { Minus, Plus, Ticket, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: 'Organic Avocado', price: 4.50, qty: 2, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=150&auto=format&fit=crop' },
    { id: 2, name: 'Wagyu Ribeye Steak', price: 45.00, qty: 1, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=150&auto=format&fit=crop' },
    { id: 3, name: 'Garden Asparagus', price: 3.25, qty: 1, image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?q=80&w=150&auto=format&fit=crop' }
  ]);

  const updateQty = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = 2.99;
  const taxes = 1.45;
  const total = subtotal + deliveryFee + taxes;

  return (
    <div className="flex flex-col h-full animate-fade-in pb-24 bg-color">
      <Header title="My Basket" />
      
      <div className="px-6 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-dark">Order Items</h3>
          <span className="text-primary text-sm font-semibold">{items.length} Items</span>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          {items.map(item => (
            <div key={item.id} className="flex p-4 bg-white rounded-2xl shadow-sm items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1">
                <h4 className="font-bold text-sm text-dark">{item.name}</h4>
                <p className="text-xs text-gray mb-1">₹{item.price.toFixed(2)} / unit</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">₹{(item.price * item.qty).toFixed(2)}</span>
                  <div className="flex items-center gap-3 bg-color rounded-full px-2 py-1">
                    <button onClick={() => updateQty(item.id, -1)} className="text-primary w-6 h-6 flex justify-center items-center rounded-full hover:bg-white"><Minus size={14} /></button>
                    <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="text-primary w-6 h-6 flex justify-center items-center rounded-full hover:bg-white"><Plus size={14} /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-2 rounded-2xl flex items-center shadow-sm mb-8 gap-2">
          <div className="pl-3 text-gray">
            <Ticket size={24} />
          </div>
          <input 
            type="text" 
            placeholder="Apply Promo Code" 
            className="flex-1 bg-transparent border-none outline-none text-sm px-2 text-dark"
          />
          <button className="bg-blue-50 text-primary px-6 py-3 rounded-xl font-bold text-sm" style={{backgroundColor: 'var(--accent-blue-light)'}}>
            Apply
          </button>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <div className="flex justify-between">
            <span className="text-gray text-sm">Subtotal</span>
            <span className="font-bold text-dark">₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray text-sm">Delivery Fee</span>
            <span className="font-bold text-dark">₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray text-sm">Estimated Taxes</span>
            <span className="font-bold text-dark">₹{taxes.toFixed(2)}</span>
          </div>
        </div>

        <button 
          onClick={() => navigate('/checkout')}
          className="w-full btn-primary flex justify-center items-center py-4 text-base shadow-md"
        >
          Proceed to Checkout <ArrowRight size={20} className="ml-2" />
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
