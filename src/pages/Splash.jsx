import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplet, ShieldCheck } from 'lucide-react';

export default function Splash() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => navigate('/onboarding'), 800);
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col h-full animate-fade-in" style={{ backgroundColor: '#f0f6fc', minHeight: '100vh' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/milk.png" 
          alt="Fresh Milk" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ padding: '40px 30px', backgroundColor: '#f6f9fc', flex: '0.8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: '64px',
          height: '64px',
          backgroundColor: '#e5f0ff',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <Droplet size={32} color="#4fa6fd" />
        </div>
        <h1 className="text-3xl font-bold" style={{ marginBottom: '12px' }}>MooFresh</h1>
        <p className="text-gray text-center font-medium" style={{ marginBottom: '40px' }}>
          Fresh Milk Delivered Every Morning
        </p>

        <div className="w-full" style={{ marginBottom: '32px' }}>
          <div className="flex justify-between" style={{ marginBottom: '8px' }}>
            <span className="text-gray text-sm font-semibold">Preparing your delivery...</span>
            <span className="text-primary text-sm font-bold">{progress}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', backgroundColor: '#e5f0ff', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#4fa6fd', transition: 'width 0.5s ease-out' }}></div>
          </div>
        </div>

        <div className="flex items-center text-light text-xs font-semibold" style={{ gap: '6px', marginTop: 'auto' }}>
          <ShieldCheck size={16} />
          <span>PREMIUM QUALITY GUARANTEED</span>
        </div>
      </div>
    </div>
  );
}
