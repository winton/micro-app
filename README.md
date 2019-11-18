# micro-app

Micro web app (MJS + JSX + SSR) 🌊

Live deployment at <https://fn2.dev>

## Architecture

<img align="right" src="https://cdn.fn2.dev/waterfall.png" width=200>

The aim of this project is to implement a web component stack that is as fast and small as possible.

On the client, libraries are packaged as individual MJS files and dynamically imported in parallel. There is no need to compile bundles, and each page composes its own dynamic stack.

On the server, Cloudflare Workers serve assets from S3 and render the HTML response using less than 10kb of code.

## Develop

```bash
npm install
npm run start
```

## Deploy render worker

```bash
npm run deploy
```

## Deploy asset worker

```bash
npm run deploy:assets
```

## Update

```bash
npm run update
npm install
```

## Add a route

1. Create a new component in [`src/components`](https://github.com/winton/micro-app/tree/master/src/components).
2. Add a route for the component in [`src/index.ts`](https://github.com/winton/micro-app/blob/master/src/index.ts).
3. Add the component to the server side stack in [`src/stack.ts`](https://github.com/winton/micro-app/blob/master/src/stack.ts).
4. Add the component to the client side stack in [`src/components/stackComponent.ts`](https://github.com/winton/micro-app/blob/master/src/components/stackComponent.tsx).
