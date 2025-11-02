const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Get cart' });
});

router.post('/add', (req, res) => {
  res.json({ success: true, message: 'Add to cart' });
});

router.put('/items/:itemId', (req, res) => {
  res.json({ success: true, message: 'Update cart item' });
});

router.delete('/items/:itemId', (req, res) => {
  res.json({ success: true, message: 'Remove from cart' });
});

module.exports = router;