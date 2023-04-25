import { Inter } from "next/font/google";
import "@styles/tailwind/main.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="text-sm">{children}</body>
    </html>
  );
}
