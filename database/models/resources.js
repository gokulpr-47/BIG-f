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
    mainTopics: {
        type:[String],
    },
    curatedNotes: {
        type:String,
    },
    reference: {
        type:String
    },
    Atime: {
        type:String,
    },
    Adate: {
        type:Number,
    },
    studyType: {
        type: String,
        enum: ["grinder", "greeber"]
    },
    visibility: {
        type: String,
        enum: ["public", "private"]
    }
});

module.exports = model('resource', ResourceSchema);