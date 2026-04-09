import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle, ChevronLeft, ChevronRight, Calendar, CalendarClock, Columns, Plus, Minus } from 'lucide-react';

export default function Subscription() {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState('Daily');
  const [qty, setQty] = useState(2);
  const [pack, setPack] = useState('1 Litre');

  // Simple static days for demonstration
  const days = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col h-full animate-fade-in" style={{ backgroundColor: 'white', minHeight: '100vh', paddingBottom: '90px' }}>
      
      {/* Header */}
      <div className="flex justify-between items-center" style={{ padding: '24px', borderBottom: '1px solid #f1f5f9' }}>
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24} color="#1e293b" />
        </button>
        <h2 className="text-lg font-bold" style={{ color: '#1e293b' }}>Milk Subscription</h2>
        <button>
          <HelpCircle size={24} color="#475569" fill="#e2e8f0" />
        </button>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Calendar Section */}
        <div className="flex justify-between items-center" style={{ marginBottom: '20px' }}>
          <h3 className="text-xs font-bold text-gray tracking-widest uppercase">Subscription<br/>Calendar</h3>
          <div className="flex items-center" style={{ gap: '16px' }}>
            <ChevronLeft size={16} color="#94a3b8" />
            <span className="font-bold text-sm text-center" style={{ color: '#1e293b' }}>October<br/>2023</span>
            <ChevronRight size={16} color="#94a3b8" />
          </div>
        </div>

        {/* Days of week */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', marginBottom: '16px' }}>
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
            <span key={day} className="text-xs font-bold" style={{ color: '#94a3b8' }}>{day}</span>
          ))}
        </div>

        {/* Grid Dates */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', marginBottom: '32px' }}>
          <span className="text-sm font-semibold" style={{ color: '#cbd5e1', alignSelf: 'center' }}>27</span>
          <span className="text-sm font-semibold" style={{ color: '#cbd5e1', alignSelf: 'center' }}>28</span>
          <span className="text-sm font-semibold" style={{ color: '#cbd5e1', alignSelf: 'center' }}>29</span>
          <span className="text-sm font-semibold" style={{ color: '#cbd5e1', alignSelf: 'center' }}>30</span>
          {days.map(d => {
            let style = { width: '40px', height: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: 'auto', fontWeight: 'bold', fontSize: '14px', position: 'relative' };
            if (d === 1 || d === 2 || d === 3) {
              style = { ...style, border: '1px solid #bfdbfe', color: '#3b82f6', backgroundColor: '#eff6ff' };
            } else if (d === 4) {
              style = { ...style, backgroundColor: '#3b82f6', color: 'white' };
            } else {
              style = { ...style, color: '#1e293b' };
            }

            return (
              <div key={d} style={style}>
                {d}
                {(d === 1 || d === 2 || d === 3 || d === 4) && (
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: d === 4 ? 'white' : '#3b82f6', position: 'absolute', bottom: '6px' }}></div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ height: '1px', backgroundColor: '#f1f5f9', margin: '0 -24px 24px -24px' }}></div>
        
        {/* Delivery Schedule Section */}
        <h3 className="text-xs font-bold text-gray tracking-widest uppercase mb-4" style={{ marginBottom: '16px' }}>Delivery Schedule</h3>
        <div className="flex" style={{ gap: '12px', marginBottom: '32px' }}>
          <button 
            onClick={() => setSchedule('Daily')}
            className="flex-1 flex flex-col items-center justify-center font-bold text-xs" 
            style={{ padding: '16px', borderRadius: '16px', border: schedule === 'Daily' ? '2px solid #4fa6fd' : '1px solid #f1f5f9', backgroundColor: schedule === 'Daily' ? '#eff6ff' : 'white', color: schedule === 'Daily' ? '#1e293b' : '#1e293b' }}
          >
            <Calendar size={20} color={schedule === 'Daily' ? '#94a3b8' : '#94a3b8'} style={{ marginBottom: '8px' }} />
            Daily
          </button>
          <button 
            onClick={() => setSchedule('Alternate')}
            className="flex-1 flex flex-col items-center justify-center font-bold text-xs" 
            style={{ padding: '16px', borderRadius: '16px', border: schedule === 'Alternate' ? '2px solid #4fa6fd' : '1px solid #f1f5f9', backgroundColor: schedule === 'Alternate' ? '#eff6ff' : 'white', color: schedule === 'Alternate' ? '#1e293b' : '#1e293b' }}
          >
            <CalendarClock size={20} color={schedule === 'Alternate' ? '#94a3b8' : '#94a3b8'} style={{ marginBottom: '8px' }} />
            Alternate Day
          </button>
          <button 
            onClick={() => setSchedule('Weekly')}
            className="flex-1 flex flex-col items-center justify-center font-bold text-xs" 
            style={{ padding: '16px', borderRadius: '16px', border: schedule === 'Weekly' ? '2px solid #4fa6fd' : '1px solid #f1f5f9', backgroundColor: schedule === 'Weekly' ? '#eff6ff' : 'white', color: schedule === 'Weekly' ? '#1e293b' : '#1e293b' }}
          >
            <div className="flex" style={{ gap: '2px', height: '20px', alignItems: 'center', marginBottom: '8px' }}>
               <div style={{ width: '4px', height: '14px', backgroundColor: '#94a3b8', borderRadius: '2px'}}></div>
               <div style={{ width: '4px', height: '18px', backgroundColor: '#94a3b8', borderRadius: '2px'}}></div>
               <div style={{ width: '4px', height: '20px', backgroundColor: '#94a3b8', borderRadius: '2px'}}></div>
               <div style={{ width: '4px', height: '16px', backgroundColor: '#94a3b8', borderRadius: '2px'}}></div>
            </div>
            Weekly
          </button>
        </div>

        {/* Quantity Section */}
        <h3 className="text-xs font-bold text-gray tracking-widest uppercase mb-4" style={{ marginBottom: '16px' }}>Quantity Per Delivery</h3>
        <div className="flex justify-between items-center" style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '20px', marginBottom: '24px' }}>
          <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: '48px', height: '48px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--surface-shadow)' }}>
            <Minus size={20} color="#4fa6fd" />
          </button>
          <div className="text-center">
            <span className="text-4xl font-bold" style={{ color: '#0f172a' }}>{qty}</span>
            <p className="text-xs text-gray font-medium">Litres</p>
          </div>
          <button onClick={() => setQty(qty + 1)} style={{ width: '48px', height: '48px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--surface-shadow)' }}>
            <Plus size={20} color="#4fa6fd" />
          </button>
        </div>

        {/* Quick Select */}
        <div className="flex justify-between items-center" style={{ marginBottom: '12px' }}>
          <span className="text-sm font-semibold text-gray">Quick Select</span>
          <span className="text-xs font-bold text-primary">Standard Packs</span>
        </div>
        <div className="flex" style={{ gap: '12px', marginBottom: '24px' }}>
          {['500ml', '1 Litre', '2 Litre'].map(p => (
            <button 
              key={p}
              onClick={() => setPack(p)}
              className="flex-1 font-bold text-sm"
              style={{ padding: '12px 0', borderRadius: '8px', backgroundColor: pack === p ? '#4fa6fd' : '#f1f5f9', color: pack === p ? 'white' : '#1e293b' }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Product Card Dark */}
        <div className="flex items-center" style={{ backgroundColor: '#111827', borderRadius: '20px', padding: '16px', marginBottom: '24px' }}>
          <img src="/milk.png" alt="Milk" style={{ width: '64px', height: '64px', borderRadius: '12px', objectFit: 'cover' }} />
          <div style={{ marginLeft: '16px', flex: 1 }}>
             <h4 className="font-bold text-white text-sm" style={{ marginBottom: '4px' }}>Fresh Farm A2 Milk</h4>
             <p className="text-xs" style={{ color: '#9ca3af' }}>Pure, organic, glass bottled</p>
          </div>
          <div className="text-right">
             <span className="text-primary font-bold block" style={{ marginBottom: '2px' }}>₹4.50</span>
             <span className="text-xs" style={{ color: '#9ca3af' }}>per delivery</span>
          </div>
        </div>

      </div>

      {/* Footer Fixed */}
      <div className="sticky-footer" style={{ borderTop: '1px solid #f1f5f9', padding: '16px 24px', zIndex: 50, paddingBottom: 'calc(16px + env(safe-area-inset-bottom))' }}>
        <div className="flex justify-between items-end" style={{ marginBottom: '16px' }}>
          <div>
            <p className="text-xs text-gray font-medium" style={{ marginBottom: '4px' }}>Starting from</p>
            <p className="font-bold text-sm" style={{ color: '#0f172a' }}>Oct 5, 2023</p>
          </div>
          <div className="text-right">
             <p className="text-xs text-gray font-medium" style={{ marginBottom: '4px' }}>Monthly Est.</p>
             <p className="font-bold text-lg" style={{ color: '#0f172a' }}>₹135.00</p>
          </div>
        </div>
        <div style={{ textAlign: 'left' }}>
          <button 
            className="btn-primary"
            onClick={() => navigate('/home')}
            style={{ padding: '16px 32px', borderRadius: '12px', fontSize: '15px' }}
          >
            Confirm Subscription
          </button>
        </div>
      </div>

    </div>
  );
}
