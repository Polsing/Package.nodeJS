const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    try {
        throw new Error();
    } catch (error) {
        console.log(error.message);
    }
});