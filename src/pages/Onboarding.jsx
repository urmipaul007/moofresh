import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();
  const [slide] = useState(0);

  return (
    <div className="flex flex-col h-full animate-fade-in" style={{ backgroundColor: '#f6f9fc', minHeight: '100vh', padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', marginBottom: '24px' }}>
        <button className="text-primary font-bold" onClick={() => navigate('/login')}>Skip</button>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ 
            width: '100%', 
            aspectRatio: '1', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            marginBottom: '40px',
            backgroundColor: '#0a3622'
        }}>
          <img 
            src="/milk.png" 
            alt="Dairy" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 className="text-3xl font-bold" style={{ marginBottom: '16px', color: '#111827' }}>
            Fresh dairy products<br/>delivered daily
          </h2>
          <p className="text-gray" style={{ lineHeight: '1.6' }}>
            Get farm-fresh milk and dairy essentials delivered to your doorstep every morning.
          </p>
        </div>

        <div className="flex justify-center" style={{ gap: '8px', marginBottom: 'auto' }}>
          <div style={{ width: '24px', height: '6px', borderRadius: '4px', backgroundColor: '#4fa6fd' }}></div>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cce2ff' }}></div>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cce2ff' }}></div>
        </div>

        <button 
          className="btn-primary" 
          style={{ marginTop: '40px', marginBottom: '16px' }}
          onClick={() => navigate('/login')}
        >
          Next <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
