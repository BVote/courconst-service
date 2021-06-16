const mongoose = require("mongoose");
const { customAlphabet:Alphabet } = require("nanoid");

const SYMBOLES = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nanoid = Alphabet(SYMBOLES, 8);

const citizenSchema = new mongoose.Schema(
    {
        cid: {
            type: String,
            required: true,
            default: () => "bj-"+nanoid()
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
        },
    },
    { timestamps: true }
);


const Citizen = mongoose.model("Citizen", citizenSchema);
module.exports = Citizen;
