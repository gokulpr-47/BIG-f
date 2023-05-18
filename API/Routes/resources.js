const express = require('express');
const router = express.Router();

const {ResourcesRepository} = require("../../database/Repository/resources");
console.log(ResourcesRepository)
const resourcesRepository = new ResourcesRepository()


const {ResourcesService} = require("../../services/resouces");
const resourcesService = new ResourcesService(resourcesRepository); 
 
router.post("/", (req,res)=>{
    res.status(200).send(req.body)
})

router.post("/create/:uid", async(req, res)=>{
    try{
        const {author, inputNotes, topic, deadline, studyType, visibilty} = req.body;
        const data = await resourcesService.createRources({author,inputNotes, topic, deadline, studyType, });
        if(data.success) return res.status(200).json({data});
        return res.status(400).json({data})
    }catch(e){
        console.log("Error while handling creating a resource:", e);
        return res.status(400).json({success: false, error: e});
    }
})

module.exports = router;