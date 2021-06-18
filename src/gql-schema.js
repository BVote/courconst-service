const { gql } = require("apollo-server-express");

const typeDefs = gql`
    # "required" clauses is removed intentionnally to facilitate testing
    scalar DateTime
    
    # union Sponsor = Deputy | Mayor

    # type Deputy {
    #     identity: Citizen
    # }

    # type Mayor {
    #     identity: Citizen
    # }

    type Citizen {
        cid: ID!
        firstnames: [String]
        lastnames: [String]
        emails: [String]
        telephones: [String]
        photos: [String]
        birthdate: DateTime
        birthplace: String
        address: String
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    type Candidate {
        id: ID!
        lead: Citizen!
        assistant: Citizen!
        # party: String!
        # sponsors: [Sponsor]!
    }

    input CitizenInputType {
        cid: ID!
        firstnames: [String]
        lastnames: [String]
        emails: [String]
        telephones: [String]
        photos: [String]
        birthdate: DateTime
        birthplace: String
        address: String
        # createdAt: DateTime!
        # updatedAt: DateTime!
    }

    input CandidateInputType {
        lead: CitizenInputType!
        assistant: CitizenInputType!
    }

    type Query {
        getLoremIpsum: String

        getCandidateById(id:ID!): Candidate!

        # getCandidateByCid(cid:ID!): Candidate!
        # getCandidateByName(name: String!): Candidate!
        # getCandidateByEmail(email: String!): Candidate!

        getCandidates: [Candidate]!
    }

    type Mutation {
        createNothing(nothing: String): String

        createCandidate(
            candidate: CandidateInputType
        ): Candidate!

        createCandidateUsingRavip(
            candidate: CandidateInputType
        ): Candidate!

        createRandomCandidateWithRavip(
            candidate: CandidateInputType
        ): Candidate!
    }

`;

module.exports = { typeDefs };