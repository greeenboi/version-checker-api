
import { Octokit } from 'octokit'
import type { VersionResponse } from './types'

export class GitHubService {
  private octokit: Octokit

  constructor() {
    this.octokit = new Octokit()
  }

  async getLatestVersion(owner: string, repo: string): Promise<VersionResponse> {
    const { data } = await this.octokit.rest.repos.getLatestRelease({ owner, repo })
    return {
      version: data.tag_name,
      published_at: data.published_at,
      html_url: data.html_url
    }
  }
}