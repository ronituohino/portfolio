import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <h1 className={inter.className}>🏗️ Website under construction! 🏗️</h1>
      </main>
    </>
  );
}
