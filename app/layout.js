import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./components/container";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Octopus Labs",
  description: "The Octopus Labs ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900 tracking-tight font-rubik  min-h-screen">
        <Header />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
