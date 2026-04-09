import { Check, Package, MapPin, Home as HomeIcon, Phone, Clock, Crosshair } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function TrackDelivery() {
  return (
    <div className="flex flex-col h-full bg-white pb-24 relative">
      <Header title="Track Delivery" subtitle="Order #MK-88219" rightIcon="chat" />

      {/* Map Area */}
      <div style={{ position: 'relative', height: '240px', backgroundColor: '#e2e8f0' }}>
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Map" />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
        
        {/* Rider marker */}
        <div style={{ position: 'absolute', top: '40%', left: '45%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '6px 12px', borderRadius: '16px', fontSize: '10px', fontWeight: 'bold', boxShadow: 'var(--surface-shadow)', marginBottom: '4px' }}>
            Rider is 5 mins away
          </div>
          <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%', border: '4px solid white', boxShadow: 'var(--surface-shadow)' }}></div>
        </div>

        {/* Center map button */}
        <button style={{ position: 'absolute', bottom: '16px', right: '16px', backgroundColor: 'white', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'var(--surface-shadow)' }}>
          <Crosshair size={20} color="var(--text-dark)" />
        </button>
      </div>

      <div style={{ padding: '24px', backgroundColor: 'white', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', marginTop: '-24px', position: 'relative', zIndex: 5 }}>
        
        {/* Estimated Arrival Box */}
        <div className="flex justify-between items-center" style={{ backgroundColor: '#f8fafc', border: '1px solid var(--accent-blue-light)', padding: '16px 20px', borderRadius: '16px', marginBottom: '32px' }}>
          <div>
            <p className="text-xs text-primary font-bold tracking-wider uppercase mb-1">ESTIMATED ARRIVAL</p>
            <h3 className="text-2xl font-bold text-dark">10:45 AM</h3>
          </div>
          <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent-blue-light)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <Clock size={20} className="text-primary" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-4" style={{ marginBottom: '32px' }}>
          <div style={{ position: 'absolute', left: '31px', top: '16px', bottom: '16px', width: '2px', backgroundColor: 'var(--border-light)', zIndex: 0 }}></div>
          
          <div className="flex items-start" style={{ gap: '16px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-dark">Order Confirmed</h4>
              <p className="text-xs text-gray">10:00 AM • Freshness guaranteed</p>
            </div>
          </div>

          <div className="flex items-start" style={{ gap: '16px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
              <Package size={16} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-dark">Packing Bottles</h4>
              <p className="text-xs text-gray">10:15 AM • Cold chain maintained</p>
            </div>
          </div>

          <div className="flex items-start" style={{ gap: '16px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', boxShadow: '0 0 0 4px var(--accent-blue-light)' }}>
              <div style={{ transform: 'scaleX(-1)' }}><HomeIcon size={16} /></div> {/* Actually it's a scooter, we'll use inverted home to look like delivery or MapPin */}
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary">Out for Delivery</h4>
              <p className="text-xs text-gray">10:32 AM • Our rider James is nearby</p>
            </div>
          </div>

          <div className="flex items-start" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-light)' }}>
              <HomeIcon size={16} />
            </div>
            <div>
              <h4 className="font-bold text-sm" style={{ color: 'var(--text-light)' }}>Arrived at Destination</h4>
              <p className="text-xs text-light">Pending arrival</p>
            </div>
          </div>
        </div>

        {/* Courier Details */}
        <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '16px' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
            <div className="flex items-center" style={{ gap: '12px' }}>
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop" alt="James Miller" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 className="font-bold text-sm text-dark mb-1">James Miller</h4>
                <p className="text-xs text-gray">Gold Tier Delivery Partner</p>
              </div>
            </div>
            <button style={{ width: '40px', height: '40px', backgroundColor: 'var(--accent-blue-light)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Phone size={18} className="text-primary" fill="currentColor" />
            </button>
          </div>
          
          <div className="flex items-center gap-2" style={{ padding: '12px 0 0', borderTop: '1px solid var(--border-light)' }}>
            <MapPin size={14} className="text-light" />
            <span className="text-xs text-gray font-medium">Delivery to: 42 Morning Dew Lane, Apartment 4B</span>
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}
