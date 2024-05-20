import "./globals.css";
import type { Metadata } from "next";
import { ROBOTO } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "TONGO WORLD P2E Game",
  description:
    "TONGO WORLD leverages the TON blockchain to offer a nostalgic yet innovative Play-to-Earn gaming experience, blending virtual pet care with strategic battles. Players earn tangible rewards by participating in a dynamic, community-driven economy, making every decision impactful. This project stands out by combining entertainment with real financial benefits, setting a new trend in blockchain gaming."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ROBOTO.className}>
        <div className="w-screen min-h-screen overflow-y-auto flex flex-col gap-10 justify-start items-center overflow-x-hidden">
          <div className="w-screen flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
