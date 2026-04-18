"use client";

import { AuthProvider } from "@/context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material";
import { Raleway } from "next/font/google";
import { ReactNode } from "react";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
}
