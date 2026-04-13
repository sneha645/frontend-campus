"use client";

import { AuthProvider } from "@/context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

export default function RecruiterLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
}
