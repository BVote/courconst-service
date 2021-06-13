const Faker = require("faker");
const gravatar = require("../utils/gravatar");
const { getDummyCandidate } = require("../utils/dummy");
Faker.locale = "fr";

/***************************************************************************************
 * We fake all mutation parameters to avoid passing parameters to mutations each time
 * this means that the required symbole "!" has been removed for the moment at GQL side
 * but not at mongoose side. In fact, playground args are accessible through "args"
 ***************************************************************************************/

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