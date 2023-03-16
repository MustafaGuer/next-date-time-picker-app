import Head from "next/head";
import { Inter } from "next/font/google";

// import Calendar from "@/components/Calendar";
import ReactCalendar from "@/components/ReactCalendar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center h-screen pt-10">
        {/* <Calendar /> */}
        <div className="flex flex-col gap-10">
          <ReactCalendar />
        </div>
      </main>
    </>
  );
}
