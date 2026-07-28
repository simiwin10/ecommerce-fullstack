import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sostituisci 5001 con la porta esatta che usi nel backend (.env)
    axios.get('http://localhost:5001/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Errore nel recupero dei prodotti:", err);
        setError("Impossibile connettersi al server backend.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1>E-Commerce Full Stack</h1>
        <p>Catalogo prodotti caricato dal backend Node.js / Express</p>
      </header>

      {loading && <p style={{ textAlign: 'center' }}>Caricamento prodotti in corso...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {products.map(product => (
          <div 
            key={product.id} 
            style={{ 
              border: '1px solid #e0e0e0', 
              borderRadius: '8px', 
              padding: '20px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              backgroundColor: '#fff'
            }}
          >
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{product.name}</h3>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#0066cc', margin: '0 0 10px 0' }}>
              €{product.price.toFixed(2)}
            </p>
            <p style={{ color: '#666', fontSize: '0.95em', margin: 0 }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;