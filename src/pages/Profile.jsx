import { Pencil, RefreshCw, Home, Briefcase, CreditCard, Wallet, HelpCircle, MessageSquare, Clock, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Profile() {
  return (
    <div className="flex flex-col h-full bg-color pb-24 relative min-h-screen">
      <Header title="Account Profile" rightIcon="settings" />

      {/* Profile Info */}
      <div className="flex flex-col items-center mt-6 mb-8 px-6">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-sm overflow-hidden" style={{ borderColor: 'var(--accent-blue-light)' }}>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" alt="Alex Johnson" className="w-full h-full object-cover" />
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full border-2 border-white flex justify-center items-center shadow-sm" style={{ backgroundColor: 'var(--primary-blue)' }}>
            <Pencil size={14} color="white" />
          </button>
        </div>
        <h2 className="text-xl font-bold text-dark mb-1">Alex Johnson</h2>
        <p className="text-xs text-gray mb-3">alex.j@example.com</p>
        <span className="text-xs font-bold px-4 py-1 rounded-full" style={{ backgroundColor: 'var(--accent-blue-light)', color: 'var(--primary-blue)', border: '1px solid var(--accent-blue-light)' }}>
          Gold Member
        </span>
      </div>

      <div className="px-6 flex flex-col" style={{ gap: '32px' }}>
        
        {/* ACTIVE SUBSCRIPTIONS */}
        <div>
          <h3 className="text-[11px] font-bold text-gray uppercase tracking-widest mb-3">ACTIVE SUBSCRIPTIONS</h3>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--accent-blue-light)' }}>
              <RefreshCw size={20} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-dark mb-1 truncate">Premium Monthly Plan</h4>
              <p className="text-xs text-gray truncate">Next billing: Oct 24, 2023</p>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <span className="font-bold text-primary mb-1">₹19.99</span>
              <button className="text-[10px] font-bold text-gray uppercase">Manage</button>
            </div>
          </div>
        </div>

        {/* SAVED ADDRESSES */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[11px] font-bold text-gray uppercase tracking-widest">SAVED ADDRESSES</h3>
            <button className="text-xs font-bold text-primary">Add New</button>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 cursor-pointer">
              <Home size={20} color="#94a3b8" className="mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-dark mb-1">Home</h4>
                <p className="text-xs text-gray" style={{ lineHeight: '1.5' }}>123 Maple Street, Apt 4B<br/>Brooklyn, NY 11201</p>
              </div>
              <ChevronRight size={16} color="#cbd5e1" className="mt-1" />
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 cursor-pointer">
              <Briefcase size={20} color="#94a3b8" className="mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-dark mb-1">Office</h4>
                <p className="text-xs text-gray" style={{ lineHeight: '1.5' }}>450 Lexington Ave, Floor 12<br/>New York, NY 10017</p>
              </div>
              <ChevronRight size={16} color="#cbd5e1" className="mt-1" />
            </div>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div>
          <h3 className="text-[11px] font-bold text-gray uppercase tracking-widest mb-3">PAYMENT METHODS</h3>
          <div className="flex flex-col gap-3">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer">
              <CreditCard size={20} color="#475569" className="shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-dark mb-1 truncate">Visa ending in 4242</h4>
                <p className="text-xs text-gray">Expires 12/25</p>
              </div>
              <span className="text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider" style={{ backgroundColor: 'var(--accent-blue-light)', color: 'var(--primary-blue)' }}>
                DEFAULT
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer">
              <Wallet size={20} color="#475569" className="shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-dark truncate">PayPal (alex.j@email.com)</h4>
              </div>
              <ChevronRight size={16} color="#cbd5e1" />
            </div>
          </div>
        </div>

        {/* SUPPORT CENTER */}
        <div style={{ marginBottom: '32px' }}>
          <h3 className="text-[11px] font-bold text-gray uppercase tracking-widest mb-3">SUPPORT CENTER</h3>
          <div className="grid grid-cols-2 gap-3 mb-3 shrink-0" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
            <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
              <HelpCircle size={20} className="text-primary" fill="var(--accent-blue-light)" />
              <span className="text-xs font-bold text-dark">FAQ</span>
            </button>
            <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
              <MessageSquare size={20} className="text-primary" fill="var(--accent-blue-light)" />
              <span className="text-xs font-bold text-dark">Live Chat</span>
            </button>
          </div>
          <button className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
            <Clock size={20} className="text-primary" />
            <span className="text-xs font-bold text-dark">Previous Tickets</span>
          </button>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}
