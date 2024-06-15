import { Router } from 'express';
import { GitHubController } from '../github/github.controller';
import { GitHubDatasource } from '../../Infraestructura/DataSource/github.datasource';
import { GitHubRepository } from '../../Infraestructura/Repositories/github.repository';

export class GitHubRoutes {
  static get routes(): Router {
    const router = Router();

    const githubToken = process.env.GITHUB_TOKEN || '';
    const datasource = new GitHubDatasource(githubToken);
    const githubRepository = new GitHubRepository(datasource);
    const githubController = new GitHubController(githubRepository);

    router.get('/repos', githubController.getUserRepos);

    return router;
  }
}
