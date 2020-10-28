const mongoose = require("mongoose");

const epSchema = mongoose.Schema(
    {
        ep: { type: Number, required: true },
        titleep: { type: String, required: true  },
        detail: { type: String, required: true },
        titleid: { type: String, required: true },
        createdAt: {type: Date,default: Date.now},
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Ep", epSchema);