import { gql } from "@apollo/client";

export const GET_SIMPLE_CHARACTERS = gql`
  query GetSimpleCharacters($filter: FilterCharacter,$page : Int) {
    characters(filter: $filter,page : $page) {
      results {
        id
        name
        image
        status
      }info {
        next
        prev
        pages
      }
    }
  }
`;