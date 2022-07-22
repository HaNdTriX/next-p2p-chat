import { useRouter } from "next/router";

export default function RoomSelector() {
  const { push } = useRouter();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);
        push({
          query: {
            room: data.get("room") as string,
          },
        });
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
