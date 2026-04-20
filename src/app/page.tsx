'use client'
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
    const pages = [];

    const start = Math.max(1, page - 3);
    const end = page + 3;

    for (let i = start; i <= end; i++) {
      if (i <= totalPages) {
        pages.push(i);
      }
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
        <div key={e?.id}>
          <img  src={e?.image ??"" }/>
          <p>{e?.name}</p>
          <p>{e?.status}</p>
          </div>
      ))}
      </div>
      <div className="paginacion">
        {getPages().map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={p === page ? "paginaActual" : ""}>
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;