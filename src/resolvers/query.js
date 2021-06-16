module.exports = {
    ipsum: () => "Lorem ipsum dolores",

    getCandidateById: async (parents, args, { models }) => {
        return await models.Candidate.findById({id: args.id});
    },
    // getCandidateByCid: async (parents, args, { models }) => {
    //     return await models.Candidate.findOne({cid: args.cid});
    // },

    // getCandidateByName: async (parents, args, { models }) => {
    //     return await models.Candidate.find({
    //         $or: [
    //             {
    //                 firstnames: {$elemMatch: /args.name/}
    //             },
    //             {
    //                 lastnames: {$elemMatch: /args.name/}
    //             }
    //         ]
    //     });
    // },

    // getCandidateByEmail: async (parents, args, { models }) => {
    //     return await models.Candidate.find({});
    // }, 

    getCandidates: async (parents, args, { models }) => {
        // implement cursor based pagination later
        return await models.Candidate.find({});
    }
}