export default function About() {
  return (
    <div>
      <h2>ℹ️ About</h2>
      <p>
        This example uses
        <a href="https://github.com/yjs/yjs">Y.js</a>,{" "}
        <a href="https://github.com/pmndrs/valtio">valtio</a>, and{" "}
        <a href="https://github.com/dai-shi/valtio-yjs">valtio-yjs</a> to
        implement a peer to peer chat. The history is stored in IndexDB and
        synced via WebRTC to other clients. Conflicts are being automatically
        resolved by Y.js.
        <br />
        For signaling public servers (
        <code>wss://y-webrtc-signaling-eu.herokuapp.com/</code> and{" "}
        <code>wss://signaling.yjs.dev/</code>) are used to create the
        webrtc-handshake.
      </p>
    </div>
  );
}
