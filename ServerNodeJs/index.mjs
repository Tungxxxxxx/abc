import { app, server } from './src/Server.mjs';
server.listen(3000, () => {
  console.log('Listening on port : 3000');
});
