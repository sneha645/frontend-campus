import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
