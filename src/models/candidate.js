const mongoose = require("mongoose");

const Citizen = {
    cid: {
        type: String,
        required: true,
    },
    firstnames: [
        {
            type: [String],
            required: true,
        }
    ],
    lastnames: [
        {
            type: [String],
            required: true,
        }
    ],
    emails: [
        {
            type: [String],
            required: true,
            index: { unique: true },
        }
    ], 
    telephones: [
        {
            type: [String],
            required: false,
            index: { unique: true },
        }
    ],
    birthdate: {
        type: Date,
        required: true,
    },
    birthplace: {
        type: String,
        required: true,
    },
    photos: [
        {
            type: String,
            required: true,
    }
    ],
    address: {
        type: String,
        required: true,
    }
    // father: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Citizen",
    //     required: true,
    // },
    // mother: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Citizen",
    //     required: true,
    // },
};


const candidateSchema = new mongoose.Schema(
    {
        lead: Citizen,
        assistant: Citizen
    },
    { timestamps: true }
);

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
