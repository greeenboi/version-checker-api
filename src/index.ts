import { Hono } from 'hono'
import { GitHubService } from './github.service';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Welcome to Version Checker API');
});

app.get('/api/version/:owner/:repo', async (c) => {
  const github = new GitHubService();
  try {
    const { owner, repo } = c.req.param();
    const version = await github.getLatestVersion(owner, repo);
    return c.json(version);
  } catch (error) {
    return c.json({
      error: 'Failed to fetch latest release',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

export default app
