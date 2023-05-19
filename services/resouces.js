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
    chatRepo
    openAi = new OpenAI();

    constructor(resourceRepo, chatRepo){
        this.resourceRepo = resourceRepo
        this.chatRepo = chatRepo
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
                response = curatedNotes;
                const data = await this.resourceRepo.createResources({author, mainTopics: JSON.parse(topics), inputNotes,curatedNotes, topic, deadline, studyType, visibilty})
                console.log(data, "line 35")
                return data;
            }else{
                return {success :false, error: "server-error"}
            }
            
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error: e}
        }
    }

    async getAdditionalResources({mainTopics}){
        try{
            const data = await this.resourceRepo.getResourcesByTopics({mainTopics});
            return data;
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error: e};
        }
    }

    async addMessage({messageText, dateTime, uid}){
        try{
            const  responseMessage = await this.openAi.sendChatMessage(messageText);

            const messages = [{messageText: messageText, dateTime, from: "user"}, {messageText: responseMessage, dateTime, from: "assistant"}];
            //check if chats already exits
            const chatsData = await this.chatRepo.GetUserChats({uid});
            console.log(chatsData)
            let data = {}
            if(chatsData.data?.length){
                data = await this.chatRepo.AddMessage({uid, messages})
            }else{
                console.log("No previous Chats")
                data = await this.chatRepo.CreateChat({uid, messages});
            };

            return {success: true, data: responseMessage};

        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error:e};
        }
    }

    async AddMessageToResource({uid, message_id, resource_id}) {
        try{
            console.log(message_id)
            const textMessage  = await this.chatRepo.getTextMessageById({id: message_id, uid});
            const data = await this.resourceRepo.appendText({resource_id, textMessage: textMessage.data})
            
            return data;
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error:e}
        }
    }

    async GetResourceById({id}){
        try{
            const data = await this.resourceRepo.getResourceById({id});
            return data;
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error: e};
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

    async sendChatMessage(text){
        try{
            const axiosPrivate = axios.create({
                baseURL: 'https://api.openai.com',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${OPENAI_SECRET_KEY}`
                }
            })

            const response = await axiosPrivate.post("/v1/chat/completions", {
  "model": "gpt-3.5-turbo",
  "messages": [{role: "user", content: text}]
})
            console.log(response, "line 135");
            return response?.data?.choices[0]?.message?.content;
        }catch(e){
            console.log("Error while sending message", e);
            return null 
        }
    }
}

module.exports = {ResourcesService}