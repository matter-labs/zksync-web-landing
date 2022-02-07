# [zkSync.io](https://zksync.io/) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/matter-labs/zksync-web-landing/blob/main/LICENSE-MIT) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue)](https://github.com/matter-labs/zksync-web-landing/blob/main/LICENSE-MIT)

# Website zkSync.io

First public release of the updated zkSync.io landing page design

## [CHANGELOG](./CHANGELOG.md)

## Build Setup

```bash
# clear possible cache && install dependencies (clear install)
$ sh cli-dev.sh ci

# populate .env file as dev environment && serve with hot reload at localhost:3000
$ yarn dev

# build for dev
$ build:stage
# afterward you'll have prepared distributive in /public folder

# build for production (only if you have firebase:auth)
$ bash cli-dev.sh ci && yarn zk-ci-prepare
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

---

## Solutions used

- [Nuxt.js](https://nuxtjs.org)
- [TS Lang](https://www.typescriptlang.org)
- [Vue.js](https://vuejs.org)
