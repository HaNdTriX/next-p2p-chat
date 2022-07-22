import Head from "next/head";
import { useRouter } from "next/router";
import RoomSelector from "../components/RoomSelector";
import ChatRoom from "../components/ChatRoom";
import About from "../components/About";

export default function IndexPage() {
  const { query } = useRouter();

  const room = (query.room || "default") as string;
  const password = query.password as string;

  return (
    <>
      <Head>
        <title>{room} | Next.js p2p chat</title>
      </Head>
      <h1>Next.js p2p chat</h1>
      <RoomSelector />
      <ChatRoom room={room} password={password} />
      <About />
    </>
  );
}
