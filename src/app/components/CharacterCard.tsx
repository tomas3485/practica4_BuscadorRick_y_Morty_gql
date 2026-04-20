import Link from "next/link" 
import "@/app/components/page2.css"


export type Params = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
  status?: string | null,
}
export const CharacterCard =  ({id,name,image,status}:Params)=>{
    return(
      <Link href={`/character/${id}`}>
        <div className="cont">
        <div key={id}>
          <img src={image ??"" }/>
          <p>{name}</p>
          <p>{status}</p>
        </div>
        </div>
      </Link>
    )
}