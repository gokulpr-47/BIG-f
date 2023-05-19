const express = require('express');
const router = express.Router();

const {ResourcesRepository} = require("../../database/Repository/resources");
console.log(ResourcesRepository)
const resourcesRepository = new ResourcesRepository();
const {ChatRepository} = require("../../database/Repository/chat");
const chatRepo = new ChatRepository();
const {ResourcesService} = require("../../services/resouces");
const resourcesService = new ResourcesService(resourcesRepository, chatRepo); 
 
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
});

router.get("/single/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const data = await resourcesService.GetResourceById({id});
        if(data.success) return res.status(200).json(data);
        return res.status(200).json(data)
    }catch(e){
        console.log("Error while handline get resource by id", e);
        return res.status(400).json({success: false, error: e})
    }
})

router.post("/chat/new-message/:uid", async(req, res)=>{
    try{
        const {uid} = req.params;
        const {messageText, dateTime} = req.body;
        const data = await resourcesService.addMessage({messageText, dateTime, uid});
        if(data.success) return res.status(200).json(data);
        return res.status(400).json(data)
    }catch(e){
        console.log("Error while handling new-message", e);
        return res.status(400).json({success: false, error: e});
    }
})

router.post("/add-text-message-to-resource", async(req, res)=>{
    try{
        const {uid, message_id, resource_id} = req.body;
        const data = await resourcesService.AddMessageToResource({uid, message_id, resource_id});
        if(data?.success) return res.status(200).json(data);
        return res.status(400).json(data);
    }catch(e){
        console.log("Error while handling addition of text message to resource", e);
        return res.status(400).json({success: false, error: e});
    }
})

router.post("/additional-resources", async(req, res)=>{
    try{
        const {mainTopics} = req.body;
        const data = await resourcesService.getAdditionalResources({mainTopics});
        if(data.success)return res.status(200).json(data);
        return res.status(400).json(data)
    }catch(e){
        console.log("Error while handling addition info request", e);
        return res.status(400).json({success: false, error: e});
    }
})

module.exports = router;