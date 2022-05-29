const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const fs = require('fs');
const path = require('path');

// @route   GET api/test
// @desc    Test route
// @access  Public
router.get('/',(req, res) => res.send('User route'))

// @route   GET api/file
// @desc    Test route
// @access  Public
router.get('/file', (req,res) => {
    var clockingPath = path.join(__dirname, '..','..', 'data','clockings.json');

    let rawdata = fs.readFileSync(clockingPath);
    let clockData = JSON.parse(rawdata);
    res.send(clockData.data)
})


router.post('/validate', [
    check('name','Name is required').not().isEmpty(),
    check('password','Please enter').isLength({ min: 6 })
],(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    res.send('Done')
})


module.exports = router;