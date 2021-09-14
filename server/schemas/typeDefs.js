const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    first_name: String
    last_name: String
    address: String
    phone: String
    email: String
    password: String
    units: [Unit]
    admin: Boolean
    
  }

  type Unit {
    _id: ID
    number: String
    location: String
    status: String
    cost: String
  }

  type Waitlist {
    _id: ID
    first_name: String
    last_name: String
    phone: String
    email: String
    location: String
    size: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    waitlist: [Waitlist]
    GetUnits: [Unit]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(first_name: String!,
            last_name: String!,
            address: String!,
            phone: String!,
            email: String!,
            password: String!
            ): Auth
    ADD_TO_WAIT(first_name: String!,
            last_name: String!,
            email: String!,
            phone: String!,
            location: String!,
            size: String!): Waitlist
    deleteUser(_id: ID!): Auth
  }
`;

module.exports = typeDefs;
