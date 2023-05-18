const ErrorMessage = "Error in Resources Service Layer:";
const {OPENAI_SECRET_KEY} = require("../config/index")
const axios = require('axios')

class ResourcesService{
    resourceRepo;
    openAi = new OpenAI();

    constructor(resourceRepo){
        this.resourceRepo = resourceRepo
    }
    async createRources ({author, inputNotes, topic, deadline, studyType, visibilty}){
        try{
            //to get the topics for the 
            const topics = this.openAi.getTopicsFromText(inputNotes);
            // const prompt = "elaborate the following topics '" + topics +"'";
            // const curatedNotes  = this.openAi.textCompletion(prompt);
            // this.resourceRepo.cre
            return {success:true, data:topics};
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error: e}
        }
    }
}

class OpenAI {
    axiosPrivate


    async getTopicsFromText(text) {
        // console.log(privateAxios)
        // text = "what are the main topics covered in the following text " + text + " the output must contain only the topic names"
        try{

        }catch(e){
            console.log("Error while contact openAI for text to topic", e);
        }
    }

    async textCompletion(prompt) {
        this.privateAxios.post("/v1/completions", {
          "model": "text-davinci-003",
          "prompt": prompt,
          "max_tokens": 500,
          "temperature": 0,
          "top_p": 1,
          "n": 1,
          "stream": false,
          "logprobs": null
        }).then(res=>{
            console.log(res);
            return res.choices[0].text;
        })
    }
}

module.exports = {ResourcesService}