import { ArrowLeft, MessageSquare, MoreVertical, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({ title, subtitle, rightIcon, onBack }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between" style={{ padding: '24px 24px 16px', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 10 }}>
      <button onClick={() => onBack ? onBack() : navigate(-1)} style={{ padding: '8px', marginLeft: '-8px' }}>
        <ArrowLeft size={20} color="var(--text-dark)" />
      </button>
      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <h2 className="text-lg font-bold">{title}</h2>
        {subtitle && <p className="text-xs text-gray" style={{ marginTop: '-2px' }}>{subtitle}</p>}
      </div>
      {rightIcon ? (
        <button style={{ padding: '8px', marginRight: '-8px', color: rightIcon === 'chat' ? 'var(--primary-blue)' : 'var(--text-dark)' }}>
          {rightIcon === 'chat' && <MessageSquare fill="currentColor" size={20} />}
          {rightIcon === 'more' && <MoreVertical size={20} />}
          {rightIcon === 'settings' && <Settings size={20} />}
        </button>
      ) : (
        <div style={{ width: '36px' }}></div>
      )}
    </div>
  );
}
