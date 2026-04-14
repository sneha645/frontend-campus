import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { StyledComponentsRegistry } from "../lib/StyledComponentRegistry";
import { AuthProvider } from "@/context/AuthContext";

const poppins = Raleway({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Campus Connect",
  description: "Campus Connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <StyledComponentsRegistry>
          <AuthProvider>{children}</AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
