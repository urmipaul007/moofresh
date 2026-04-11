import { useState } from 'react';
import { Home, ArrowRight, Wallet, CreditCard, Banknote, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Checkout() {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('t1');
  const [selectedPayment, setSelectedPayment] = useState('upi');

  const timeslots = [
    { id: 't1', title: 'TODAY', time: '4-6 PM' },
    { id: 't2', title: 'TODAY', time: '6-8 PM' },
    { id: 't3', title: 'TOMORROW', time: '8-10 AM' }
  ];

  return (
    <div className="flex flex-col h-full animate-fade-in bg-color pb-6" style={{ minHeight: '100vh', paddingBottom: '32px' }}>
      <Header title="Checkout" />
      
      <div style={{ padding: '0 24px' }}>
        
        {/* Delivery Address */}
        <div className="flex justify-between items-center" style={{ marginTop: '16px', marginBottom: '16px' }}>
          <h3 className="font-bold text-lg text-dark">Delivery Address</h3>
          <button className="text-primary font-semibold text-xs">Change</button>
        </div>
        
        <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '16px', boxShadow: 'var(--surface-shadow)' }}>
          <div className="flex items-start" style={{ gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--accent-blue-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Home size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-dark" style={{ marginBottom: '4px' }}>Home</h4>
              <p className="text-xs text-gray" style={{ lineHeight: '1.5' }}>
                123, Maple Street, Springfield, IL<br/>
                62704, United States
              </p>
            </div>
          </div>
          <div style={{ height: '80px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
            <iframe 
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD0rhEXLsmsi-ArbH2PA_2Sv2swIzPaap8&q=123+Maple+Street,+Springfield,+IL" 
              style={{ width: '100%', height: '100%', border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Delivery Map"
            ></iframe>
          </div>
        </div>

        {/* Delivery Time Slot */}
        <h3 className="font-bold text-lg text-dark" style={{ marginTop: '24px', marginBottom: '16px' }}>Delivery Time Slot</h3>
        <div className="flex" style={{ gap: '12px', overflowX: 'auto', margin: '0 -24px', padding: '0 24px', scrollbarWidth: 'none' }}>
          {timeslots.map(slot => (
            <button
              key={slot.id}
              onClick={() => setSelectedTime(slot.id)}
              style={{
                minWidth: '100px',
                padding: '16px 0',
                borderRadius: '16px',
                border: selectedTime === slot.id ? '2px solid var(--primary-blue)' : '2px solid transparent',
                backgroundColor: selectedTime === slot.id ? 'var(--primary-blue)' : 'white',
                color: selectedTime === slot.id ? 'white' : 'var(--text-dark)',
                boxShadow: 'var(--surface-shadow)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="text-xs font-bold" style={{ opacity: selectedTime === slot.id ? 0.9 : 0.5, marginBottom: '4px' }}>{slot.title}</span>
              <span className="text-sm font-bold">{slot.time}</span>
            </button>
          ))}
        </div>

        {/* Payment Options */}
        <h3 className="font-bold text-lg text-dark" style={{ marginTop: '24px', marginBottom: '16px' }}>Payment Options</h3>
        <div className="flex flex-col" style={{ gap: '12px' }}>
          {[
            { id: 'upi', icon: <Wallet size={20} className="text-primary" />, title: 'UPI Payments', subtitle: 'GPay, PhonePe, Paytm' },
            { id: 'card', icon: <CreditCard size={20} color="#475569" />, title: 'Credit / Debit Cards', subtitle: 'Visa, Mastercard, AMEX' },
            { id: 'cod', icon: <Banknote size={20} color="#475569" />, title: 'Cash on Delivery', subtitle: 'Pay when you receive' }
          ].map(opt => (
            <div 
              key={opt.id} 
              onClick={() => setSelectedPayment(opt.id)}
              className="flex items-center" 
              style={{ 
                backgroundColor: 'white', 
                padding: '16px', 
                borderRadius: '16px',
                border: selectedPayment === opt.id ? '2px solid var(--primary-blue)' : '1px solid var(--border-light)',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '40px', height: '40px', backgroundColor: selectedPayment === opt.id ? 'var(--accent-blue-light)' : '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
                {opt.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h4 className="font-bold text-sm text-dark">{opt.title}</h4>
                <p className="text-xs text-gray">{opt.subtitle}</p>
              </div>
              <div style={{
                width: '20px', height: '20px', borderRadius: '50%',
                border: selectedPayment === opt.id ? '6px solid var(--primary-blue)' : '2px solid var(--border-light)',
                backgroundColor: 'white'
              }}></div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <h3 className="font-bold text-lg text-dark" style={{ marginTop: '24px', marginBottom: '16px' }}>Order Summary</h3>
        <div className="flex flex-col" style={{ gap: '12px', marginBottom: '16px' }}>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray">Items Total</span>
            <span className="font-bold text-dark">₹57.25</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray">Delivery Fee</span>
            <span className="font-bold text-dark">₹2.99</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray">Taxes & Charges</span>
            <span className="font-bold text-dark">₹1.45</span>
          </div>
        </div>
        
        <div style={{ height: '1px', backgroundColor: 'var(--border-light)', margin: '16px 0' }}></div>
        
        <div className="flex justify-between items-center" style={{ marginBottom: '24px' }}>
          <span className="font-bold text-dark text-base">Total Payable</span>
          <span className="font-bold text-dark text-lg">₹61.69</span>
        </div>

        <div className="flex justify-center items-center text-xs text-light font-medium" style={{ gap: '8px', marginBottom: '24px' }}>
          <ShieldCheck size={16} />
          SECURE SSL ENCRYPTED CHECKOUT
        </div>

        <button 
          onClick={() => navigate('/track-delivery')}
          className="w-full btn-primary flex justify-center items-center shadow-md text-base"
          style={{ padding: '16px' }}
        >
          Pay ₹61.69 <ArrowRight size={20} style={{ marginLeft: '8px' }} />
        </button>

      </div>
    </div>
  );
}
