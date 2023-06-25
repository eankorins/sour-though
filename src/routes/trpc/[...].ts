import { APIEvent } from "solid-start"
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from "../../lib/trpc/router"
import { client } from "../../lib/trpc/client"

const handler = (event: APIEvent) => {
  fetchRequestHandler({
    endpoint: '/trpc',
    req: event.request,
    router: appRouter,
    createContext: () => ({cheese:"gouda"})
  })
}