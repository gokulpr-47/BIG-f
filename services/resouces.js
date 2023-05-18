const ErrorMessage = "Error in Resources Service Layer:";
const axios = require('axios');
const {OPENAI_SECRET_KEY} = require("../config/index")

const replaceExcapeSequence =(text) =>{
    console.log(text)
    text = text.replace(/[\r\n]/gm, '');
    return text;
}

class ResourcesService{
    resourceRepo;
    openAi = new OpenAI();

    constructor(resourceRepo){
        this.resourceRepo = resourceRepo
    }
    async createRources ({author, inputNotes, topic, deadline, studyType, visibilty}){
        try{
            let response = ""
            //to get the topics for the 
            let topics = await this.openAi.getTopicsFromText(inputNotes);
            console.log(topics, "!!!!!!!!!!", typeof topics);
            if(topics){
                response = topics;
                topics = replaceExcapeSequence(topics);
                console.log(topics);
                const prompt = "elaborate the following topics mentioned in the array " + topics;
                const curatedNotes  = await this.openAi.textCompletion(prompt);
                console.log(curatedNotes, "line 28");
                response = curatedNotes
            }else{
                console.log("It ain't string")
            }
            return {success:true, data:response};
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
        text = replaceExcapeSequence(text);
        console.log(text)
        text = "what are the main topics covered in the following text " + text + " the output must contain only the topic names in an array. ouput should not contain any excape sequence"
        try{
            let response = await axiosPrivate.post("/v1/completions", {
                "model": "text-davinci-003",
                "prompt": text,
                "max_tokens": 1700,
                "temperature": 0,
                "top_p": 1,
                "n": 1,
                "stream": false,
                "logprobs": null,
              })
            return response.data.choices[0].text
        }catch(e){
            console.log("Error while contact openAI for text to topic", e);
        }
    }

    async textCompletion(prompt) {
        try {

            const axiosPrivate = axios.create({
                baseURL: 'https://api.openai.com',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${OPENAI_SECRET_KEY}`
                }
            })
            
            const response = await axiosPrivate.post("/v1/completions", {
                "model": "text-davinci-003",
                "prompt": prompt,
                "max_tokens": 500,
                "temperature": 0,
                "top_p": 1,
                "n": 1,
                "stream": false,
                "logprobs": null
            }).then(res=>{
                console.log(res?.data.choices[0].text, "line 94")
                return res?.data.choices[0].text
            })
            console.log(response, "line 96");
            return response;
        }catch(e){
            console.log("Error while curation", e);
            return null
        }

    }
}

module.exports = {ResourcesService}