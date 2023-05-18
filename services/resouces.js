const ErrorMessage = "Error in Resources Service Layer:";

class ResourcesService{
    resourceRepo;
    constructor(resourceRepo){
        this.resourceRepo = resourceRepo
    }

    async createRources ({author, inputNotes,curatedNotes, topic, deadline, studyType, visibilty}){
        
    }
}