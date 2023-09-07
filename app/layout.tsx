import "@/styles/globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Bird Map PH",
  description: "Bird Distribution Map",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div className="main"></div>
          <div className="app">
            <Nav />
            {children}
          </div>
          <div className="footer">
            <Foot />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
