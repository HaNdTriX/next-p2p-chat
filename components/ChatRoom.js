import { useEffect, useMemo } from "react";
import * as Y from "yjs";
import { bindProxyAndYArray } from "valtio-yjs";
import { proxy, useSnapshot } from "valtio";
import { IndexeddbPersistence } from "../lib/y-indexeddb";
import { nanoid } from "nanoid/non-secure";
import { WebrtcProvider } from "y-webrtc";
import styles from "./ChatRoom.module.css";

export function useChatRoom(room = "default", password) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const store = useMemo(() => proxy([]), [room, password]);

  useEffect(() => {
    const docName = `next.chat.messages.${room}`;
    const ydoc = new Y.Doc();
    const yarray = ydoc.getArray("messages");

    bindProxyAndYArray(store, yarray);

    new IndexeddbPersistence(docName, ydoc);
    new WebrtcProvider(docName, ydoc, { password });

    return () => {
      ydoc.destroy();
    };
  }, [store, room, password]);

  return store;
}

export default function ChatRoom({ room = "default", password }) {
  const messages = useChatRoom(room, password);
  const snap = useSnapshot(messages);

  return (
    <div>
      <h2>🚪 Room ({room})</h2>

      <ul className={styles.messageContainer}>
        {snap.map((message, i) => (
          <li key={i} className={styles.message}>
            <button
              className={styles.deleteBtn}
              aria-label="Delete message"
              onClick={() => messages.splice(i, 1)}
            >
              🗑
            </button>
            <small>⏱ {new Date(message.createdAt).toLocaleString()}</small>
            <br />
            <span>{message.text}</span>
          </li>
        ))}
        {snap.length === 0 && <li>No messages yet</li>}
      </ul>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.target);
          messages.push({
            id: nanoid(),
            text: data.get("message"),
            createdAt: Date.now(),
          });
          event.target.reset();
        }}
      >
        <input
          autoFocus
          autoComplete="off"
          name="message"
          type="text"
          placeholder="Type a message..."
          required
        />
        <button>Send</button>
      </form>
    </div>
  );
}
