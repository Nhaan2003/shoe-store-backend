const express = require('express');
const router = express.Router();

router.get('/orders', (req, res) => {
  res.json({ success: true, message: 'Staff orders endpoint' });
});

router.get('/tasks', (req, res) => {
  res.json({ success: true, message: 'Staff tasks endpoint' });
});

module.exports = router;