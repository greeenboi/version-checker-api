import { Env } from "bun"
import { app } from "./app"
import { Context } from "elysia"

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: Context,
    
  ): Promise<Response> {

    return await app.fetch(request)
  },
}