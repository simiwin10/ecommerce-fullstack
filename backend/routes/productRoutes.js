const express = require('express');
const router = express.Router();

// Dati di esempio (Mock Data)
const products = [
  { id: 1, name: "Laptop Gaming", price: 1200.00, description: "Potente laptop per gaming e lavoro" },
  { id: 2, name: "Smartphone", price: 800.00, description: "Ultima generazione con fotocamera avanzata" },
  { id: 3, name: "Cuffie Wireless", price: 150.00, description: "Cuffie noise-cancelling di alta qualità" }
];

// GET /api/products - Ottieni tutti i prodotti
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;