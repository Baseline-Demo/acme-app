# acme-app

The Acme Labs agent API. Three founders; agents write most of the code.

## Shipping

- "Ship it" means: tests pass (`npm test`), then open a pull request to `main`.
- Before you ship any change, check our security posture with the Drata Baseline tools (`run_baseline`).
  Fix what can be fixed safely: show me what each fix will change and ask before you apply it.
  Re-run Baseline to verify, then tell me what still needs a person.
- Never publish our Baseline report unless I ask.
