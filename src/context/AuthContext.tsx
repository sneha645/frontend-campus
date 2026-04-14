"use client";

import { AuthContextType, User } from "@/types/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: () => {},
  registerStudent: async () => {},
  registerMentor: async () => {},
  registerRecruiter: async () => {},
  isLoading: false,
  success: "",
  error: "",
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const me = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoading(false);
        return;
      }

      const res = await axios.get(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("me", res.data.user);

      setUser(res.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
      localStorage.removeItem("token");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${API_URL}/auth/login`,
        { email, password },
        { withCredentials: true },
      );

      if (res.status === 200 || res.status === 201) {
        const { user, token } = res.data.data;

        localStorage.setItem("token", token);

        setUser(user);

        router.push(`/${user.role}/dashboard`);

        // setSuccess(res.data.message);
        console.log(res.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error signing in:", error.response?.data.message);
        setError(error.response?.data.message);
      } else {
        console.error("Error signing in:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    router.push("/sign-in");
  };

  const register = async (url: string, payload: any) => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${API_URL}${url}`, payload, {
        withCredentials: true,
      });

      if (res.status === 201) {
        setUser(res.data.user);
        setSuccess("Registration successful!");

        setTimeout(() => {
          router.push("/sign-in");
        }, 3000);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed!");
    } finally {
      setIsLoading(false);
    }
  };

  const registerStudent = (
    email: string,
    password: string,
    name: string,
    role: string,
  ) => register("/auth/register-student", { email, password, name, role });

  const registerMentor = (
    email: string,
    password: string,
    name: string,
    role: string,
  ) => register("/auth/register-mentor", { email, password, name, role });

  const registerRecruiter = (
    email: string,
    password: string,
    name: string,
    role: string,
  ) => register("/auth/register-recruiter", { email, password, name, role });

  useEffect(() => {
    me();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        registerStudent,
        registerMentor,
        registerRecruiter,
        isLoading,
        success,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
