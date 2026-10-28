import assert from 'node:assert/strict';
import { test } from 'node:test';
import { handle } from '../src/app.js';

test('GET / describes the API', () => {
  const res = handle({ method: 'GET', url: '/' });
  assert.equal(res.status, 200);
  assert.equal(res.body.name, 'acme-app');
});

test('unknown routes are 404', () => {
  assert.equal(handle({ method: 'GET', url: '/nope' }).status, 404);
});
