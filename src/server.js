import { createServer } from 'node:http';
import { handle } from './app.js';

const port = Number(process.env.PORT ?? 4000);

createServer((req, res) => {
  const { status, body } = handle({ method: req.method, url: req.url });
  res.writeHead(status, { 'content-type': 'application/json' });
  res.end(JSON.stringify(body));
}).listen(port, () => console.log(`acme-app listening on http://localhost:${port}`));
