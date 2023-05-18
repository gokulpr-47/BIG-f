const {Schema, model} = require("mongoose");

const messageSchema = new Schema({
    messageText: {
        type: String,
        required: true,
      },
      dateTime: {
        type: String,
        required: true,
      },
      insertToCuration: {
        type: Boolean,
        default: false,
      }
})

const ChatModel = new Schema({
    uid: {
        type: String,
        required: true,
    },
    messages: [messageSchema],
});

module.exports = model("chat", ChatModel);