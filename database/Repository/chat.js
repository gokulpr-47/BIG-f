const ChatModel = require("../models/chat");
const ErrorMessage = "Error at Chat Repository Layer"
class ChatRepository {

    async CreateChat({uid, messages}){
        try{
            console.log("@@@@@@@@@@@@")
            console.log(uid, messages);
            const chat = new ChatModel({uid, messages});
            await chat.save();
            return {success: true, data: chat}
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error:e}
        }
    }
    async AddMessage({uid, messages}){
        try{
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            const chats = await ChatModel.findOne({uid})
            console.log(chats);
            if(chats){
                chats.messages.push(messages[0])
                chats.messages.push(messages[1]);
                await chats.save();
            }
            return {success: true, data: chats}
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error: e};
        }
    }

    async getTextMessageById({id, uid}){
        try{
            const message = await ChatModel.aggregate([
                {
                    $match:{
                        'uid': uid
                    },
                },
                {
                    $unwind: "$messages"
                },
                {
                    $addFields: { message_id: { $toObjectId: id } },
                },
                {
                    $match: {
                        $expr: {
                            $eq: [
                              { $toString: "$messages._id" },
                              id
                            ]
                        }
                    }
                }
            ])
            console.log(message[0].messages.messageText)
            const text = message[0].messages.messageText;
            return {success: true, data: text};
        }catch(e){
            console.log(ErrorMessage, e);
            return {success: false, error: e};
        }
    }

    async GetUserChats({uid}){
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