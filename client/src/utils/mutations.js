import gql from 'graphql-tag';

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
  mutation addToWait($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $location: String!, $size: String) {
    addToWait($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $location: String!, $size: String) 
  }
`;