import { gql } from '@apollo/client';

export const QUERY_UNITS = gql`
query GetUnits {
    unit {
            number
            location
            status
        }
    }
    `;