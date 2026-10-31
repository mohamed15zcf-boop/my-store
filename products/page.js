'use client';

export default function Products() {
  const products = [
    { id: 1, name: 'هاتف ذكي', price: '1500 ر.س', emoji: '📱' },
    { id: 2, name: 'سماعات', price: '300 ر.س', emoji: '🎧' },
    { id: 3, name: 'شاحن', price: '150 ر.س', emoji: '🔌' },
    { id: 4, name: 'كابل', price: '50 ر.س', emoji: '🔗' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6', padding: '20px' }}>
      {/* الرأس */}
      <header style={{
        background: '#2563eb',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '32px', margin: 0 }}>🛍️ متجري</h1>
        <p style={{ margin: '10px 0 0 0' }}>المنتجات الأفضل</p>
      </header>

      {/* المنتجات */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px'
      }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>
              {product.emoji}
            </div>
            <h3 style={{ fontSize: '16px', margin: '10px 0' }}>
              {product.name}
            </h3>
            <p style={{ 
              fontSize: '20px', 
              color: '#2563eb', 
              fontWeight: 'bold',
              margin: '10px 0'
            }}>
              {product.price}
            </p>
            <button style={{
              background: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              أضف للسلة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
