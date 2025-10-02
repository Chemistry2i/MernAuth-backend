const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// @route   GET /api/protected
// @desc    Protected test route
// @access  Private
router.get('/protected', auth, (req, res) => {
  res.json({
    success: true,
    message: 'Access granted to protected route',
    user: {
      id: req.user._id,
      email: req.user.email
    }
  });
});

module.exports = router;
