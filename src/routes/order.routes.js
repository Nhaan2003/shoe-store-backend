const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Get user orders' });
});

router.post('/', (req, res) => {
  res.json({ success: true, message: 'Create order' });
});

router.get('/:orderId', (req, res) => {
  res.json({ success: true, message: 'Get order details' });
});

module.exports = router;