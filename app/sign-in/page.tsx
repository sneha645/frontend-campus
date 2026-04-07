

"use client";

import Image from "next/image";
import { useState } from "react";

export default function SignInPage() {
    const [role, setRole] = useState("Student");

    return (
        <div className="flex min-h-screen">

            {/* LEFT SIDE */}
            <div className="hidden lg:flex w-1/2 bg-gray-100 relative p-10 flex-col justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 text-white p-2 rounded-md">🎓</div>
                    <h1 className="font-semibold text-lg">CampusConnect Pro+</h1>
                </div>

                {/* Background Pattern */}
                {/* <div className="absolute inset-0 opacity-20 bg-[url('/pattern.png')] bg-cover" /> */}

                {/* Quote Section */}
                <div className="relative z-10">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        "This platform completely transformed our campus placement drive.
                        Connecting students with recruiters and tracking projects is now
                        completely seamless and centralized."
                    </p>

                    <div className="flex items-center gap-3 mt-6">
                        <Image
                            src="/avatar.png"
                            alt="user"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div>
                            <p className="font-medium text-sm">Dr. Emily Chen</p>
                            <p className="text-xs text-gray-500">
                                Dean of Placements, Tech University
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
                <div className="w-full max-w-md space-y-6">

                    {/* Heading */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '6px' }}>
                        <h2 style={{ fontSize: '30px', fontWeight: 600 }}>Welcome back</h2>
                        <p style={{ fontSize: '14px', color: '#6b7280', fontWeight: 500 }}>Enter your credentials to access your dashboard</p>
                    </div>

                    {/* Role Tabs */}
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        {["Student", "Faculty", "Recruiter", "Admin"].map((item) => (
                            <button
                                key={item}
                                onClick={() => setRole(item)}
                                className={`flex-1 text-sm py-2 rounded-md ${role === item
                                    ? "bg-white shadow font-medium"
                                    : "text-gray-500"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="text-sm font-medium">
                                Work or University Email
                            </label>
                            <input
                                type="email"
                                placeholder="name@university.edu"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••••"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Remember for 30 days
                            </label>
                            <button type="button" className="text-blue-600">
                                Forgot password?
                            </button>
                        </div>

                        {/* Submit */}
                        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400">
                            OR CONTINUE WITH
                        </span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Social Buttons */}
                    <div className="flex gap-3">
                        <button className="flex-1 border py-2 rounded-md hover:bg-gray-50">
                            GitHub
                        </button>
                        <button className="flex-1 border py-2 rounded-md hover:bg-gray-50">
                            University SSO
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-500">
                        Don’t have an account?{" "}
                        <span className="text-blue-600 cursor-pointer">
                            Request Access
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}