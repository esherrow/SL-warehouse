import { gql } from '@apollo/client';

export const QUERY_UNITS = gql`
query {
    GetUnits {
            number
            location
            status
            cost
    }
}
    `;

export const QUERY_CLIENTS = gql`
query {
    users {
        _id
        first_name
        last_name
        email
        address
        phone
    }
}`;