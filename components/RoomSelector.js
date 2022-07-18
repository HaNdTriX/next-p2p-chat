import { useRouter } from "next/router";

export default function RoomSelector() {
  const { push } = useRouter();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        push({ query: Object.fromEntries(data) });
      }}
    >
      <h2>🕵️ Select a room</h2>
      <input
        placeholder="Room Name"
        type="text"
        id="room"
        required
        name="room"
      />
      <button type="submit">Join</button>
    </form>
  );
}
