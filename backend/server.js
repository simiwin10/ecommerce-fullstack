const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware di base
app.use(cors());
app.use(express.json());

// Importazione e collegamento delle rotte dei prodotti
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Rotta di test generale
app.get('/', (req, res) => {
  res.send('API del Backend e-commerce attiva e funzionante!');
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});