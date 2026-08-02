# Sazabi SDK

The official TypeScript SDK for the [Sazabi](https://sazabi.com) public API,
published to npm as [`@sazabi/sdk`](https://www.npmjs.com/package/@sazabi/sdk).

```bash
npm install @sazabi/sdk
```

```ts
import { createClient } from "@sazabi/sdk";

const client = createClient({
  credentialProvider: {
    getToken: () => process.env.SAZABI_TOKEN!,
    getProjectId: () => process.env.SAZABI_PROJECT_ID,
  },
});

const threads = await client.threads.list({ limit: 10 });
```

## About this repository

This is a **release mirror**, not the development repository. The SDK is
developed in the Sazabi monorepo; each release lands here as the exact
content published to npm via [trusted publishing (OIDC)](https://docs.npmjs.com/trusted-publishers/).

Channels map to npm dist-tags:

| Ref | dist-tag | Contents |
|---|---|---|
| `main` | `latest` | Production releases |
| `channel/next` | `next` | Staging (soak) prereleases |
| `channel/dev` | `dev` | Development prereleases |

Issues and feature requests are welcome here or at
[support@sazabi.ai](mailto:support@sazabi.ai).
