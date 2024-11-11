import Header from "@/components/header/header.jsx";
import Navigating from "@/components/navigating/navigating.jsx";
import "./globals.css";


export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container bg-[#f9fafb]">
        <Header />
        <Navigating />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
