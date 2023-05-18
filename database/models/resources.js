const { Schema, model } = require("mongoose")


const ResourceSchema = new Schema({
    author: {
        type: String,
        // required: true,
    },
    inputNotes: {
        types: String,
        // required: true
    },
    topic: {
        type:String,
        // required: true,
    },
    curatedNotes: {
        type:String,
    },
    deadline: {
        type:Number,
    },
    studyType: {
        type: String,
        enum: ["grinders", "nerds"]
    },
    visibility: {
        type: String,
        enum: ["public", "private"]
    }
});

module.exports = model('resource', ResourceSchema);
