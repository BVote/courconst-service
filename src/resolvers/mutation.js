require('dotenv').config()
const Faker = require("faker");
const fetch = require("isomorphic-fetch");
const gravatar = require("../utils/gravatar");
const { getDummyCandidate } = require("../utils/dummy");

Faker.locale = "fr";


module.exports = {
    createCandidate: async (parents, args, { models }) => {
        const { lead, assistant } = args.candidate;
        return models.Candidate.create({ lead:lead, assistant:assistant });
    },

    createCandidateUsingRavip: async (parents, args, { models }) => {
        return "501 not implemented";
    }, 

    createRandomCandidateWithRavip: async (parents, args, { models }) => {
        let candidate = undefined;
        await fetch(process.env.RAVIP_API_URI, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(
                { query: `
                    query {
                        getRandomCitizen {
                            cid
                            firstnames
                            lastnames
                            emails
                            telephones
                            address
                            birthdate
                            birthplace
                            createdAt
                            updatedAt
                        }
                    }` 
                }
            ),
        })
        .then(res => res.json())
        .then(res => {
            const [lead, assistant] = res.data.getRandomCitizen;
            candidate = models.Candidate.create({lead:lead, assistant:assistant});
        })
        .catch(error => console.error(error));
        if(!candidate) {
            // throw a graphql exception here
            console.log("$candidate is undefined");
        }
        return candidate;
    },

    createNothing: () => "Nothing is created"

}