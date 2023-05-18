const ResourcesModel = require("../models/resources");
const ErrorMessages = "Error at Resources Repository layer:";

class ResourcesRepository {

    async createResources({author, inputNotes,curatedNotes, topic, deadline, studyType, visibilty}) {
        try{
            const resource = new ResourcesModel({author, inputNotes, topic, deadline, studyType, visibilty});
            resource.save();
        }catch(e){
            console.log(ErrorMessages, e);
            return {success: false, error: e};
        }
    }

}