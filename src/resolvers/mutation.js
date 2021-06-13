const Faker = require("faker");
const gravatar = require("../utils/gravatar");
const { getDummyCandidate } = require("../utils/dummy");
Faker.locale = "fr";


module.exports = {
    createCandidate: async (parents, args, { models }) => {

        const { firstnames, lastnames, emails, photos, telephones, birthdate, birthplace, address } = getDummyCandidate();

        const citizen =  await models.Candidate.create({
            firstnames,
            lastnames,
            emails,
            photos,
            telephones,
            birthdate,
            birthplace,
            address,
            // firstnames: args.identity.firstnames,
            // lastnames: args.identity.lastnames,
            // emails: args.identity.emails,
            // photos: args.identity.photos,
            // telephones: args.identity.telephones,
            // birthdate: args.identity.birthdate,
            // birthplace: args.identity.birthplace,
            // address: args.identity.address
        });
        console.log(candidate);
        return candidate;
    },
    createNothing: () => "Nothing is created"

}