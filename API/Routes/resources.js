const express = require('express');
const router = express.Router();

router.post("/create/:uid", async(req, res)=>{
    try{

    }catch(e){
        console.log("Error while handling creating a resource:", e);
        return res.status(400).json({success: false, error: e})
    }
})

module.exports = router;