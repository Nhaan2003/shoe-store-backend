const express = require('express');
const router = express.Router();

router.get('/products/:productId', (req, res) => {
  res.json({ success: true, message: 'Get product reviews' });
});

router.post('/products/:productId', (req, res) => {
  res.json({ success: true, message: 'Create product review' });
});

module.exports = router;