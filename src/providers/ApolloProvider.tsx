'use client'

import { client } from "@/lib/api/gqlClient"
import { ApolloProvider } from "@apollo/client/react"
import type { ReactNode } from "react"

const ApolloProviderWrapped=({
    children
}:{
    children: ReactNode
})=>{
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}

export default ApolloProviderWrapped;