import { gql } from '@apollo/client';

export const QUERY_UNITS = gql`
query  {
    units {
            number
            location
            status
        }
    }
    `;