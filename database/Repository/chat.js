const ChatModel = require("../models/chat");
const ErrorMessage = "Error at Chat Repository Layer"
class ChatRepository {

    async CreateChat(uid, messageText, dateTime){
        try{
            const messages = [{messageText, dateTime}]
            const chat = new ChatModel({uid, messages});
            await chat.save();
            return {success: true, data: chat}
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error:e}
        }
    }

    async GetUserChats(uid){
        try{
            const chats = await ChatModel.find({uid});
            return {success: true, data: chats}
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error: e};
        }
    }
}

module.exports = {ChatRepository}