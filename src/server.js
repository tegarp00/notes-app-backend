import Hapi from '@hapi/hapi';
import dotenv from "dotenv";
import routes from './routes.js';

dotenv.config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
    router: {
    stripTrailingSlash: true
  }
  });

  server.route(routes);
//   await server.start(process.env.PORT || 3000, process.env.HOST || '::', err => {
//     if (err) throw err
//     console.log(`server listening on ${server.info.uri}`)
//   })
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
