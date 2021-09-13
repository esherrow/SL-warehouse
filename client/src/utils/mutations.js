// import gql from 'graphql-tag';
import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TO_WAIT = gql`
  mutation ADD_TO_WAIT($firstName: String!,
    $lastName: String!,
    $email: String!, 
    $phone: String!, $location: String!, 
    $size: String) 
    
    {
    ADD_TO_WAIT(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, location: $location, size: $size) 
  }
`;