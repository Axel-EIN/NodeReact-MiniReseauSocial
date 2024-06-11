import { server } from './services/socket.js';
import { ENV } from './config/env.js';

// PORT
const PORT = ENV.PORT || 8080;

// LISTEN 
server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});