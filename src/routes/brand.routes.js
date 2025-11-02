const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Get all brands' });
});

router.get('/:id', (req, res) => {
  res.json({ success: true, message: 'Get brand by ID' });
});

module.exports = router;