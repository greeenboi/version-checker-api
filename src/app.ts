import Elysia from "elysia";

import { checkVersionController } from "./routes/check-version"

export const app = new Elysia({ aot: false })
  .onError(({ code, error }) => {
    console.log(code)
    return new Response(JSON.stringify({
      error: "Failed to fetch latest release",
      message: error
    }), { status: 500 })
  })
  .use(checkVersionController)

app.get('/', () => "Hello from Elysia 🦊")