const express = require('express');

const router = express.Router();

router.route('/interns').get(async (req,res)=>{
    res.status(200);
});

module.exports = router;