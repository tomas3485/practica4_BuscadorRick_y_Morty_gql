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
        pages
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterByID($characterId: ID! ){
    character(id:$characterId){
      id
      name
      origin {
        name
      }
      species
      status
      image
    }
  }

`;