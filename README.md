# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

``` (cmd)
$ yarn
yarn install v1.22.22
warning package-lock.json found...
[1/5] 🔍  Validating package.json...
[2/5] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.24s.
```

## Local Development

``` (cmd)
$ yarn start
yarn run v1.22.22
$ docusaurus start

[INFO] Starting the development server...
.....
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

✔ Client
  Compiled successfully in 3.91s

client (webpack 5.105.4) compiled successfully
```

This command starts a local development server and opens up a [browser window](http://localhost:3000/). Most changes are reflected live without having to restart the server.

### Build

``` (cmd)
$ npm run build
> memphis-mesh@0.0.0 build
> docusaurus build

[INFO] [en] Creating an optimized production build...
.....
[SUCCESS] Generated static files in "build".
[INFO] Use `npm run serve` command to test your build locally.
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

``` (cmd)
USE_SSH=true yarn deploy
```

Not using SSH:

``` (cmd)
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
