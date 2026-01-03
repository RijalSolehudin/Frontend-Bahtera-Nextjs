"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { apiRequest } from "@/lib/api";
import { useRouter, usePathname } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    const checkUserLoggedIn = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const userData = await apiRequest("/user");
                setUser(userData);
            } catch (error) {
                console.error("Session expired or invalid token", error);
                localStorage.removeItem("token");
                setUser(null);
            }
        }
        setIsLoading(false);
    };

    const login = async (email, password) => {
        try {
            const data = await apiRequest("/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });

            localStorage.setItem("token", data.token);
            setUser(data.user);
            router.push("/");
            return { success: true };
        } catch (error) {
            console.error("Login failed", error);
            return { success: false, error: error.message || "Login failed" };
        }
    };

    const register = async (userData) => {
        try {
            const data = await apiRequest("/register", {
                method: "POST",
                body: JSON.stringify(userData),
            });

            localStorage.setItem("token", data.token);
            setUser(data.user);
            router.push("/");
            return { success: true };
        } catch (error) {
            console.error("Registration failed", error);
            // Return validation errors if available
            return { success: false, error: error.errors || error.message || "Registration failed" };
        }
    };

    const logout = async () => {
        try {
            await apiRequest("/logout", { method: "POST" });
        } catch (error) {
            console.error("Logout error", error);
        } finally {
            localStorage.removeItem("token");
            setUser(null);
            router.push("/login");
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
