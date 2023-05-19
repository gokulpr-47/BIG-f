const ResourcesModel = require("../models/resources");
const ErrorMessages = "Error at Resources Repository layer:";

class ResourcesRepository { 
    async createResources({author, inputNotes,curatedNotes, mainTopics, topic, deadline, studyType, visibilty}) {
        try{
            const resource = new ResourcesModel({author, inputNotes, mainTopics, curatedNotes, topic, deadline, studyType, visibilty});
            resource.save();
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