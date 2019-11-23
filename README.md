# micro-app

Micro web component stack (MJS + JSX + SSR) 🌊

**<https://fn2.dev>** — [`src/components/homeComponent.tsx`](https://github.com/winton/micro-app/blob/master/src/components/homeComponent.tsx)

**<https://fn2.dev/does-not-exist>** — [`src/components/notFoundComponent.tsx`](https://github.com/winton/micro-app/blob/master/src/components/notFoundComponent.tsx)

## Architecture

<img align="right" src="https://cdn.fn2.dev/waterfall.png" width=280>

The aim of this project is to implement a web component stack that is as fast and small as possible.

On the client, libraries are packaged as individual MJS files and dynamically imported in parallel. There is no need to
compile bundles, and each page composes its own dynamic stack.

On the server, Cloudflare Workers serve assets from S3 and render the HTML response using less than 10kb of total
packaged code.

## Develop

```bash
npm install
npm run start
```

## Deploy

To deploy to Cloudflare, you'll need to install and configure wrangler:

```bash
npm i -g @cloudflare/wrangler
wrangler config
```

### Deploy render worker

```bash
npm run deploy
```

### Deploy asset worker

```bash
npm run deploy:assets
```

> ℹ️ The regular deploy command uploads new assets. You only need to deploy this worker if you modify
> [`cloudflare/assets.js`](cloudflare/assets.js).

## Add a route

1. Create a new component in [`src/components`](src/components).
2. Add a route for the component in [`src/index.ts`](src/index.ts).
3. Add the component to the server side stack in
   [`src/stack.ts`](src/stack.ts).
4. Add the component to the client side stack in
   [`src/components/stackComponent.ts`](src/components/stackComponent.tsx).

## Update packages

```bash
npm run update
npm install
```

## Cloudflare configuration

### Cloudflare DNS

<img src="https://cdn.fn2.dev/cloudflare-dns.png" width=280>

### Cloudflare page rules

<img src="https://cdn.fn2.dev/cloudflare-page-rules.png" width=330>

## Build your own project

Generate this project with your own naming by running [boiler](https://github.com/winton/boiler):

```bash
npm i -g @fn2/boiler
mkdir my-project; cd my-project
boiler
```

Then select "Web components" under "New project".
