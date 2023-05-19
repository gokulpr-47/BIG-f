const ResourcesModel = require("../models/resources");
const ErrorMessages = "Error at Resources Repository layer:";

class ResourcesRepository { 
    async createResources({author, inputNotes,mainTopics, topic, Adate, Atime,Atype,reference, studyType, visibilty, curatedNotes}) {
        try{
            const resource = new ResourcesModel({author, mainTopics, inputNotes, topic, Adate, Atime,Atype,reference, studyType, visibilty, curatedNotes});
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