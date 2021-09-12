import { gql } from '@apollo/client';

export const QUERY_UNITS = gql`
query getUnits {
    unit {
            number
            location
            status
        }
    }
    `;