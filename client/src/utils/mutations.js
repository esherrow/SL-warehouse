// import gql from 'graphql-tag';
import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  user{
    first_name
  last_name
  address
  phone
  email
  password
  units{
    _id
  number
  location
  status
  }
  admin
  }
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

export const ADD_USER = gql`
mutation addUser( $first_name: String!,$last_name: String!,$address: String!,$phone: String!,$email: String!,$password: String!)
{
  addUser(first_name:$first_name, last_name:$last_name, address:$address, phone:$phone, email:$email, password:$password){
    token
    user{
      first_name
    last_name
    address
    phone
    email
    password
    admin
    }
  }
}`;

export const DELETE_WAIT = gql`
mutation deleteWait($email: String!) {
  deleteWait(email: $email) {
      token
  }
}`;