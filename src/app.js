import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

/** Routes for the Acme Labs agent API. Kept dependency-free so the demo runs offline. */
export function handle(request) {
  if (request.method === 'GET' && request.url === '/') {
    return { status: 200, body: { name: pkg.name, message: 'Acme Labs agent API' } };
  }
  return { status: 404, body: { error: 'Not found' } };
}
