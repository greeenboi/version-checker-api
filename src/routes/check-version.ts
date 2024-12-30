import Elysia from "elysia"
import { GitHubService } from "../github.service"

export const checkVersionController = new Elysia()
  .get("/api/version/:owner/:repo", async ({ params }) => {
    const githubService = new GitHubService()
    return await githubService.getLatestVersion(params.owner, params.repo)
  })