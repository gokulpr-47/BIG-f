const ResourcesModel = require("../models/resources");
const ErrorMessages = "Error at Resources Repository layer:";

class ResourcesRepository { 
    async createResources({author, inputNotes,curatedNotes, mainTopics, topic, deadline, studyType, visibilty}) {
        try{
            const resource = new ResourcesModel({author, inputNotes, mainTopics, curatedNotes, topic, deadline, studyType, visibilty});
            await resource.save();
            return {success: true, data: resource}
        }catch(e){
            console.log(ErrorMessages, e);
            return {success: false, error: e};
        }
    }

    async getResourceById({id}) {
        try{
            const res = await ResourcesModel.findById(id);
            return {success: true, data: res};
        }catch(e){
            console.log(ErrorMessages, e);
            return {success: false, error: e}
        }
    }

    async appendText({resource_id, textMessage}){

        try{
            console.log(textMessage);
            const res = await ResourcesModel.findById(resource_id);
            res.curatedNotes += `\n${textMessage}`;
            await res.save() 
            return {success: true, data: res}
        }catch(e){
            console.log(ErrorMessages, e);
            return {success: false, error: e}
        }
    }

    async getAdditionalResources({mainTopics}){
        try{
            const res = await ResourcesModel.find({mainTopics: {$in: mainTopics}});
            return {success: true, data: res};
        }catch(e){
            console.log(ErrorMessages, e);
            return {success: false, error: e};
        }
    }

}
module.exports = {ResourcesRepository}