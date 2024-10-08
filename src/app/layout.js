import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './../components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar />

        <div className="min-h-screen w-9/12">
          {/* this is home router  */}
          {children}
        </div>

        <footer className="bg-yellow-200 py-8 px-4">
          <h3>This is my footer </h3>
        </footer>
      </body>
    </html>
  );
}



