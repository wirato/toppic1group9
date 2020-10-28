const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        title: { type: String, required: true  },
        detail: { type: String, required: true },
        imageTitle: { type: String, required: true },
        uid: { type: String, required: true },
        createdAt: {type: Date,default: Date.now},
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Post", postSchema);