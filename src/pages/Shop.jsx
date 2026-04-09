import { ShoppingCart, Menu, Search, Plus, Minus, SlidersHorizontal } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function Shop() {
  const categories = ['Milk', 'Curd', 'Paneer', 'Butter', 'Ghee'];

  return (
    <div className="flex flex-col h-full animate-fade-in" style={{ backgroundColor: '#f6f9fc', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Header */}
      <div className="flex justify-between items-center" style={{ padding: '24px 24px 16px' }}>
        <div style={{ width: '40px', height: '40px', backgroundColor: '#e5f0ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Menu size={20} color="#4fa6fd" />
        </div>
        <h2 className="text-lg font-bold">Dairy Fresh</h2>
        <div style={{ width: '40px', height: '40px', backgroundColor: '#e5f0ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <ShoppingCart size={20} color="#4fa6fd" />
          <div style={{ position: 'absolute', top: '8px', right: '8px', width: '14px', height: '14px', backgroundColor: '#4fa6fd', borderRadius: '50%', border: '2px solid #e5f0ff', color: 'white', fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            2
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-light scrollbar-hide" style={{ padding: '0 24px', overflowX: 'auto', gap: '24px' }}>
        {categories.map((cat, idx) => (
          <div 
            key={cat} 
            className={`text-sm font-semibold whitespace-nowrap ${idx === 0 ? 'text-primary' : 'text-gray'}`} 
            style={{ paddingBottom: '12px', borderBottom: idx === 0 ? '2px solid #4fa6fd' : '2px solid transparent', cursor: 'pointer' }}
          >
            {cat}
          </div>
        ))}
      </div>

      <div style={{ padding: '24px 24px 0' }}>
        {/* Search */}
        <div className="flex items-center" style={{ backgroundColor: '#e2e8f0', borderRadius: '16px', padding: '12px 16px', marginBottom: '24px', opacity: 0.7 }}>
          <Search size={20} className="text-gray" style={{ marginRight: '12px' }} />
          <input 
            type="text" 
            placeholder="Search dairy products..." 
            style={{ background: 'none', border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: 'var(--text-dark)' }}
          />
        </div>

        <div className="flex justify-between items-center" style={{ marginBottom: '20px' }}>
          <h3 className="text-lg font-bold">Fresh Milk</h3>
          <a href="#" className="text-sm text-primary flex items-center gap-1 font-semibold">Filter</a>
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', paddingBottom: '24px' }}>
           {/* Item 1 */}
           <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--surface-shadow)' }}>
             <div style={{ position: 'relative' }}>
                <img src="/milk.png" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#10b981', color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '8px' }}>ORGANIC</span>
             </div>
             <div style={{ padding: '16px' }}>
               <h4 className="font-bold text-sm" style={{ marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Farm Fresh Whole...</h4>
               <p className="text-xs text-gray" style={{ marginBottom: '12px' }}>1 Litre</p>
               
               <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
                  <span className="font-bold text-primary text-base">₹4.50</span>
                  <div className="flex items-center" style={{ backgroundColor: '#f0f6fc', borderRadius: '8px', padding: '4px' }}>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Minus size={14} /></button>
                    <span className="font-bold text-sm mx-2" style={{ width: '16px', textAlign: 'center' }}>1</span>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Plus size={14} /></button>
                  </div>
               </div>

               <button className="btn-primary text-sm" style={{ padding: '10px', borderRadius: '10px' }}>
                 <ShoppingCart size={16} /> Add
               </button>
             </div>
           </div>

           {/* Item 2 */}
           <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--surface-shadow)' }}>
             <img src="/milk.png" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
             <div style={{ padding: '16px' }}>
               <h4 className="font-bold text-sm" style={{ marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Skimmed Low Fat...</h4>
               <p className="text-xs text-gray" style={{ marginBottom: '12px' }}>500 ml</p>
               
               <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
                  <span className="font-bold text-primary text-base">₹2.25</span>
                  <div className="flex items-center" style={{ backgroundColor: '#f0f6fc', borderRadius: '8px', padding: '4px' }}>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Minus size={14} /></button>
                    <span className="font-bold text-sm mx-2" style={{ width: '16px', textAlign: 'center' }}>1</span>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Plus size={14} /></button>
                  </div>
               </div>

               <button className="btn-primary text-sm" style={{ padding: '10px', borderRadius: '10px' }}>
                 <ShoppingCart size={16} /> Add
               </button>
             </div>
           </div>

            {/* Item 3 */}
           <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--surface-shadow)' }}>
             <div style={{ position: 'relative' }}>
                <img src="/curd.png" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#f97316', color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '8px' }}>POPULAR</span>
             </div>
             <div style={{ padding: '16px' }}>
               <h4 className="font-bold text-sm" style={{ marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Probiotic Thick Curd</h4>
               <p className="text-xs text-gray" style={{ marginBottom: '12px' }}>400g</p>
               
               <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
                  <span className="font-bold text-primary text-base">₹3.10</span>
                  <div className="flex items-center" style={{ backgroundColor: '#f0f6fc', borderRadius: '8px', padding: '4px' }}>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Minus size={14} /></button>
                    <span className="font-bold text-sm mx-2" style={{ width: '16px', textAlign: 'center' }}>1</span>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Plus size={14} /></button>
                  </div>
               </div>

               <button className="btn-primary text-sm" style={{ padding: '10px', borderRadius: '10px' }}>
                 <ShoppingCart size={16} /> Add
               </button>
             </div>
           </div>

            {/* Item 4 */}
           <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--surface-shadow)' }}>
             <img src="/paneer.png" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
             <div style={{ padding: '16px' }}>
               <h4 className="font-bold text-sm" style={{ marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Fresh Malai Paneer</h4>
               <p className="text-xs text-gray" style={{ marginBottom: '12px' }}>200g</p>
               
               <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
                  <span className="font-bold text-primary text-base">₹5.20</span>
                  <div className="flex items-center" style={{ backgroundColor: '#f8fafc', borderRadius: '8px', padding: '4px', opacity: 0.5 }}>
                    <button style={{ color: '#94a3b8', padding: '4px' }}><Minus size={14} /></button>
                    <span className="font-bold text-sm mx-2" style={{ width: '16px', textAlign: 'center' }}>0</span>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Plus size={14} /></button>
                  </div>
               </div>

               <button className="btn-primary text-sm" style={{ padding: '10px', borderRadius: '10px' }}>
                 <ShoppingCart size={16} /> Add
               </button>
             </div>
           </div>

           {/* Item 5 */}
           <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--surface-shadow)' }}>
             <img src="/butter.png" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
             <div style={{ padding: '16px' }}>
               <h4 className="font-bold text-sm" style={{ marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Salted Cow Butter</h4>
               <p className="text-xs text-gray" style={{ marginBottom: '12px' }}>500g</p>
               
               <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
                  <span className="font-bold text-primary text-base">₹6.80</span>
                  <div className="flex items-center" style={{ backgroundColor: '#f0f6fc', borderRadius: '8px', padding: '4px' }}>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Minus size={14} /></button>
                    <span className="font-bold text-sm mx-2" style={{ width: '16px', textAlign: 'center' }}>1</span>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Plus size={14} /></button>
                  </div>
               </div>

               <button className="btn-primary text-sm" style={{ padding: '10px', borderRadius: '10px' }}>
                 <ShoppingCart size={16} /> Add
               </button>
             </div>
           </div>

           {/* Item 6 */}
           <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--surface-shadow)' }}>
             <img src="/butter.png" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
             <div style={{ padding: '16px' }}>
               <h4 className="font-bold text-sm" style={{ marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Pure Desi Ghee</h4>
               <p className="text-xs text-gray" style={{ marginBottom: '12px' }}>1 Litre</p>
               
               <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
                  <span className="font-bold text-primary text-base">₹18.00</span>
                  <div className="flex items-center" style={{ backgroundColor: '#f0f6fc', borderRadius: '8px', padding: '4px' }}>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Minus size={14} /></button>
                    <span className="font-bold text-sm mx-2" style={{ width: '16px', textAlign: 'center' }}>1</span>
                    <button style={{ color: '#4fa6fd', padding: '4px' }}><Plus size={14} /></button>
                  </div>
               </div>

               <button className="btn-primary text-sm" style={{ padding: '10px', borderRadius: '10px' }}>
                 <ShoppingCart size={16} /> Add
               </button>
             </div>
           </div>

        </div>
      </div>
      <BottomNav />
    </div>
  );
}
