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