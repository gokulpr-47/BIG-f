const ErrorMessage = "Error in Resources Service Layer:";
const axios = require('axios');
const {OPENAI_SECRET_KEY} = require("../config/index")

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
    


    async getTopicsFromText(text) {
    
        const axiosPrivate = axios.create({
            baseURL: 'https://api.openai.com',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${OPENAI_SECRET_KEY}`
            }
        })
        // text = "what are the main topics covered in the following text " + text + " the output must contain only the topic names"
        try{
            axiosPrivate.post("/v1/completions", {
                "model": "text-davinci-003",
                "prompt": "Say this is a test",
                "max_tokens": 7,
                "temperature": 0,
                "top_p": 1,
                "n": 1,
                "stream": false,
                "logprobs": null,
              }).then(res=>{
                console.log(res);
              }).catch(e=>{
                console.log("Error while contacting openAI", e)
              })
            return axiosPrivate
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