const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
    {
        lead: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Citizen"
        },
        assistant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Citizen"
        },
    },
    { timestamps: true }
);

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
