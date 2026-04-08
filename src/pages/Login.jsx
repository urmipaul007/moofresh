import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Smartphone } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full animate-fade-in" style={{ backgroundColor: '#f6f9fc', minHeight: '100vh', padding: '24px' }}>
      
      {/* Header */}
      <div className="flex items-center" style={{ paddingTop: '16px', marginBottom: '32px', position: 'relative' }}>
        <button onClick={() => navigate(-1)} style={{ position: 'absolute', left: 0 }}>
          <ArrowLeft size={24} color="#111827" />
        </button>
        <h2 className="text-lg font-bold w-full text-center" style={{ color: '#111827' }}>
          Welcome to MooFresh
        </h2>
      </div>

      {/* Main Card */}
      <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '32px 24px', boxShadow: 'var(--surface-shadow)', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Image Circle */}
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginBottom: '24px', border: '4px solid #f6f9fc' }}>
          <img src="/milk_field.png" alt="Fresh Milk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold" style={{ marginBottom: '12px', color: '#111d35' }}>
          Login or Sign Up
        </h1>
        <p className="text-gray text-center text-sm font-medium" style={{ marginBottom: '32px', padding: '0 8px', lineHeight: '1.5' }}>
          Enter your phone number to get started with fresh dairy deliveries
        </p>

        {/* Phone Input Box */}
        <div className="w-full" style={{ marginBottom: '24px' }}>
          <label className="text-xs font-bold text-dark" style={{ display: 'block', marginBottom: '8px', color: '#111d35' }}>
            Phone Number
          </label>
          <div className="flex items-center" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px' }}>
            <Smartphone size={20} color="#94a3b8" style={{ marginRight: '12px' }} />
            <input 
              type="tel" 
              placeholder="+1 (555) 000-0000" 
              style={{ background: 'transparent', border: 'none', outline: 'none', width: '100%', fontSize: '15px', color: '#111d35', fontWeight: '500' }}
            />
          </div>
        </div>

        {/* Send OTP Button */}
        <button 
          className="btn-primary w-full shadow-sm" 
          onClick={() => navigate('/home')}
          style={{ padding: '16px', borderRadius: '12px', fontSize: '15px', marginBottom: '24px' }}
        >
          Send OTP
        </button>

        {/* Divider */}
        <div className="flex items-center w-full" style={{ marginBottom: '24px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
          <span className="text-xs text-light font-medium" style={{ margin: '0 16px' }}>or continue with</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
        </div>

        {/* Google Button */}
        <button 
          className="w-full flex justify-center items-center font-bold" 
          onClick={() => navigate('/home')}
          style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px', backgroundColor: 'transparent', color: '#111d35', gap: '12px' }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
              <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
              <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
              <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
            </g>
          </svg>
          Google
        </button>

        <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
          <p className="text-xs text-light text-center" style={{ lineHeight: '1.6' }}>
            By continuing, you agree to our <a href="#" className="font-semibold" style={{ color: '#4fa6fd' }}>Terms<br/>of Service</a> and <a href="#" className="font-semibold" style={{ color: '#4fa6fd' }}>Privacy Policy</a>
          </p>
        </div>
      </div>

      <div className="flex justify-center" style={{ marginTop: '32px', marginBottom: '8px' }}>
        <p className="text-xs text-gray font-medium">
          Need help? <a href="#" className="font-bold" style={{ color: '#4fa6fd' }}>Contact Support</a>
        </p>
      </div>

    </div>
  );
}
