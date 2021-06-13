const { gql } = require("apollo-server-express");


// required clauses removed for the moment

const typeDefs = gql`
    scalar DateTime
    
    type Candidate {
        id: ID!
        cid: ID!
        firstnames: [String]
        lastnames: [String]
        emails: [String]
        mother: String
        father: String
        telephones: [String]
        birthdate: DateTime
        birthplace: String
        address: String
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    type Query {
        ipsum: String
        getCandidateByCid(cid:ID!): Candidate!
        getCandidateById(id: ID!): Candidate!
        getCandidateByName(name: String!): Candidate!
        getCandidateByEmail(email: String!): Candidate!
        getCandidates: [Candidate]!
    }

    type Mutation {
        createNothing(nothing: String): String
        createCandidate(
            firstnames: [String], 
            lastnames: [String], 
            emails: [String],
            telephones: [String],
            birthdate: DateTime,
            birthplace: String,
            address: String
        ): Candidate!
        
    }

`;

module.exports = { typeDefs };