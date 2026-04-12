"use client";

import { AuthContextType, User } from "@/types/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

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
  isLoading: false,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const me = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  console.log("user", user);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
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
        setIsLoading(false);
        setToken(response.data.data.token);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        router.push(`/${response.data.data.user.role}/dashboard`);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error signing in:", error);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoading(false);
  };

  const registerStudent = async (
    email: string,
    password: string,
    name: string,
    role: string,
  ) => {
    setIsLoading(true);
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
      setIsLoading(false);
      if (response.status === 201) {
        setUser(response.data.user);
        setToken(response.data.token);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error registering student:", error);
    }
  };

  const registerMentor = async (
    email: string,
    password: string,
    name: string,
    role: string,
  ) => {
    setIsLoading(true);
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
      setIsLoading(false);
      if (response.status === 201) {
        setUser(response.data.user);
        setToken(response.data.token);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      setIsLoading(false);
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
    setIsLoading(true);
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
      setIsLoading(false);
      if (response.status === 201) {
        setUser(response.data.user);
        setToken(response.data.token);
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      setIsLoading(false);
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
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
