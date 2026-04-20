import Link from "next/link"



export type Params = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
  status?: string | null,
}
export const CharacterCard =  ({id,name,image,status}:Params)=>{
    return(
      <Link href={`/character/${id}`}>
        <div>
        <div key={id}>
          <img src={image ??"" }/>
          <p>{name}</p>
          <p>{status}</p>
        </div>
        </div>
      </Link>
    )
}