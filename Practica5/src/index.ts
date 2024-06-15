import { envs } from './config/envs';
import { AppRoutes } from './Presentacion/Routes';
import { Server } from './Presentacion/Server';

(async()=> {
  main();
})();

function main() {

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}