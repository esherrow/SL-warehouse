// import gql from 'graphql-tag';
import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_TO_WAIT = gql`
  mutation ADD_TO_WAIT($first_name: String!,
    $last_name: String!,
    $email: String!, 
    $phone: String!, $location: String!, 
    $size: String!) 
    
    {
    ADD_TO_WAIT(first_name: $first_name, last_name: $last_name, email: $email, phone: $phone, location: $location, size: $size) {
      email
    }
  }
`;