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
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(first_name: String!,
            last_name: String!,
            address: String!,
            phone: String!,
            email: String!,
            password: String!,
            admin: Boolean!
            ): User
  }
`;

module.exports = typeDefs;
