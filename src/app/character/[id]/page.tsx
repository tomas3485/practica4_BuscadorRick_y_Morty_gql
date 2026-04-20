'use client'
import { GET_CHARACTER_BY_ID } from "@/features/characters/queries";
import { GetCharacterByIdQuery, type GetCharacterByIdQueryVariables } from "@/gql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation"
import "@/app/character/[id]/page3.css"
import Link from "next/link";

const CharacterInfo = ()=> {
    const params = useParams();
    const  id= params?.id;

    const{data,loading,error} =useQuery<GetCharacterByIdQuery,GetCharacterByIdQueryVariables>(
        GET_CHARACTER_BY_ID,{
            variables: {characterId:String(id)}
        }
    );
    if(loading) return <p>loading...</p>
    if(error) return <p>El personaje no existe</p>

    const character = data?.character;
    return(
        <div className="bckg">
            <div className="mainCharacter">
                <h1>{character?.name}</h1>
                <img src={character?.image ?? ""}/>
                <div className="info">
                    <p>Especie: {character?.species}</p>
                    <p>Estado: {character?.status}</p>
                    <p>Origen: {character?.origin?.name}</p>
                </div>
                <Link href={`/`}>HOME</Link>
            </div>
        </div>
    )
}

export default CharacterInfo;