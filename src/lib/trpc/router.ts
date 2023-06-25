import * as trpc from "@trpc/server";
import { router, procedure } from "./init";
import { TypeOf, z } from "zod";

const todos = [{ message: "Breakfast" }]

export const appRouter = router({
  getTodos: procedure.query(() => {
    console.log("WOOP")
    return todos
  }),
  createTodo: procedure.input(
    z.object({
      message: z.string(),
    })
  )
  .mutation(({input}) => {
    console.log(input);
    todos.push({message: input?.message})
    return "Complete"
  })
})

export type AppRouter = typeof appRouter;