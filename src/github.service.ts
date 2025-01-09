import { Octokit } from 'octokit';
import type { VersionResponse } from './types';

export class GitHubService {
  async getLatestVersion(owner: string, repo: string): Promise<VersionResponse> {
    const octokit = new Octokit();
    const { data } = await octokit.rest.repos.getLatestRelease({
      owner,
      repo,
    });

    return {
      version: data.tag_name.replace(/^v/, ''),
      published_at: data.published_at!,
      html_url: data.html_url
    };
  }
}