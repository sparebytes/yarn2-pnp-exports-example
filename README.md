# Yarn 2 PNP module resolution does not honor [proposal-pkg-exports](https://github.com/jkrems/proposal-pkg-exports)

## Relevant files
- [packages/package-with-exports/package.json](./packages/package-with-exports/package.json)
- [packages/package-with-exports/index.js](./packages/package-with-exports/index.js)
- [packages/package-with-exports/main.js](./packages/package-with-exports/main.js)
- [packages/package-with-exports/other.js](./packages/package-with-exports/other.js)

## With Node >=12.7.0 and Yarn 1.21

Running:

```shell
rm .pnp.js
mv .yarnrc .yarnrc.bak
yarn install
yarn start
```

Will output:
```
(node:4780) ExperimentalWarning: The ESM module loader is experimental.
main.js executed.
other.js executed.
```

## With Node >=12.7.0 and Yarn 2.0.0-rc

Running:

```shell
mv .yarnrc.bak .yarnrc
yarn install
yarn start
```

Will output:
```(node:19160) ExperimentalWarning: The ESM module loader is experimental.
index.js executed but should not have been.


Unable to load module "package-with-exports/sub/other"
Error: Couldn't find a suitable Node resolution for the specified unqualified path

Source path: /C:/Users/Franklin/Desktop/yarn-pnp-exports-example/packages/package-with-exports/sub/other
Rejected resolution: /C:/Users/Franklin/Desktop/yarn-pnp-exports-example/packages/package-with-exports/sub/other
Rejected resolution: /C:/Users/Franklin/Desktop/yarn-pnp-exports-example/packages/package-with-exports/sub/other.js
Rejected resolution: /C:/Users/Franklin/Desktop/yarn-pnp-exports-example/packages/package-with-exports/sub/other.json
Rejected resolution: /C:/Users/Franklin/Desktop/yarn-pnp-exports-example/packages/package-with-exports/sub/other.node
Rejected resolution: /C:/Users/Franklin/Desktop/yarn-pnp-exports-example/packages/package-with-exports/sub/other.mjs

Require stack:
- C:\Users\Franklin\Desktop\yarn-pnp-exports-example\index.js
    at internalTools_makeError (C:\Users\Franklin\Desktop\yarn-pnp-exports-example\.pnp.js:7832:24)
    at resolveUnqualified (C:\Users\Franklin\Desktop\yarn-pnp-exports-example\.pnp.js:8870:13)
    at resolveRequest (C:\Users\Franklin\Desktop\yarn-pnp-exports-example\.pnp.js:8895:14)
    at Object.resolveRequest (C:\Users\Franklin\Desktop\yarn-pnp-exports-example\.pnp.js:8985:26)
    at Function.external_module_default.a._resolveFilename (C:\Users\Franklin\Desktop\yarn-pnp-exports-example\.pnp.js:8046:29)
    at Function.external_module_default.a._load (C:\Users\Franklin\Desktop\yarn-pnp-exports-example\.pnp.js:7948:50)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (C:\Users\Franklin\Desktop\yarn-pnp-exports-example\index.js:10:5)
    at Module._compile (internal/modules/cjs/loader.js:956:30) {
  code: 'MODULE_NOT_FOUND',
  pnpCode: 'QUALIFIED_PATH_RESOLUTION_FAILED',
  data: {
    unqualifiedPath: '/C:/Users/Franklin/Desktop/yarn-pnp-exports-example/packages/package-with-exports/sub/other',
    request: 'package-with-exports/sub/other',
    issuer: '/C:/Users/Franklin/Desktop/yarn-pnp-exports-example/index.js'
  },
  requireStack: [
    'C:\\Users\\Franklin\\Desktop\\yarn-pnp-exports-example\\index.js'
  ]
}
```
