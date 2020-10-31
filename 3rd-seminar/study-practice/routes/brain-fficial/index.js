const express = require('express');
const router = express.Router();

const member = require('./member')

router.get('/', (req, res) => {
    res.status(200).send(member);
})

module.exports = router;