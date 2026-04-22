'use client'
import { CharacterCard } from "@/app/components/CharacterCard";
import { GET_SIMPLE_CHARACTERS } from "@/features/characters/queries";
import type { GetSimpleCharactersQuery, GetSimpleCharactersQueryVariables } from "@/gql/graphql";

import { useQuery } from "@apollo/client/react";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data, loading } = useQuery<GetSimpleCharactersQuery, GetSimpleCharactersQueryVariables>(
    GET_SIMPLE_CHARACTERS,
    {
      variables: { filter: { name: search },page },
    }
  );
  if (loading) return <p>loading...</p>;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(input);
    }
  };

  const totalPages = data?.characters?.info?.pages ?? 0;
  

const getPages = () => {
  const pages: (number | "...")[] = [];

  const start = Math.max(2, page - 2);
  const end = Math.min(totalPages, page + 2);

  pages.push(1);

  if (start > 2) pages.push("...");

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};

 
  return (
    <div className="main">
      <div className="titulo">
        <h1>Buscador Rick y Morty</h1>
      </div>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Buscar personaje..."
        />
      </div>
      <div className="personajes">
      {data?.characters?.results?.map((e) => (
        <CharacterCard
          image={e?.image}
          key={e?.id}
          id={e?.id}
          name={e?.name}
          status={e?.status}/>
      ))}
      </div>
      <div className="paginacion">
       {getPages().map((p, i) => (
  <button
    key={i}
    onClick={() => typeof p === "number" && setPage(p)}
    disabled={p === "..."}
  >
    {p}
  </button>
))}
      </div>
    </div>
  );
};

export default Home;