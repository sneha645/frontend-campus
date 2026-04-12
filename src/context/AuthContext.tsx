"use client";

import { AuthContextType, User } from "@/types/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  login: async () => {},
  logout: () => {},
  registerStudent: async () => {},
  registerMentor: async () => {},
  registerRecruiter: async () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      console.log(response.data.data);
      if (response.status === 201) {
        setUser(response.data.data.user);
        setToken(response.data.data.token);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.data.token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  const registerStudent = async (
    email: string,
    password: string,
    name: string,
    role: string,
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register-student",
        {
          email,
          password,
          name,
          role,
        },
        {
          withCredentials: true,
        },
      );
      if (response.status === 201) {
        setUser(response.data.user);
        setToken(response.data.token);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.error("Error registering student:", error);
    }
  };

  const registerMentor = async (
    email: string,
    password: string,
    name: string,
    role: string,
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register-mentor",
        {
          email,
          password,
          name,
          role,
        },
        {
          withCredentials: true,
        },
      );
      if (response.status === 201) {
        setUser(response.data.user);
        setToken(response.data.token);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.error("Error registering mentor:", error);
    }
  };

  const registerRecruiter = async (
    email: string,
    password: string,
    name: string,
    role: string,
    companyName: string,
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register-recruiter",
        {
          email,
          password,
          name,
          role,
          companyName,
        },
        {
          withCredentials: true,
        },
      );
      if (response.status === 201) {
        setUser(response.data.user);
        setToken(response.data.token);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.error("Error registering recruiter:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        registerStudent,
        registerMentor,
        registerRecruiter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
