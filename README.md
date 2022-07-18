# Next.js p2p chat

This example uses [Y.js](https://github.com/yjs/yjs), [valtio](https://github.com/pmndrs/valtio), and [valtio-yjs](https://github.com/dai-shi/valtio-yjs) to implement a simple peer to peer chat. The history is stored in IndexedDB and synced via WebRTC to other clients. Conflicts are being automatically resolved by Y.js.
For signaling public servers (`wss://y-webrtc-signaling-eu.herokuapp.com/` and `wss://signaling.yjs.dev/`) are used to create the webrtc-handshake.

## Development

First, run the development server:

```bash
yarn dev
```

## Production

```bash
yarn build && yarn start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
