'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        confirmPassword: "" 
    });

    const onSignup = async (e) => {
        e.preventDefault(); 
        if (user.password !== user.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await axios.post("/api/users/signup", {
                email: user.email,
                password: user.password,
                username: user.username
            });
            console.log("page/signup: Signup Success: ", response.data);
            router.push("/login");
        } catch (error) {
            console.log("page/signup: Signup Failed: ", error.message);
            setError(error.response?.data?.error || "Signup failed");
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && 
            user.password.length > 0 && 
            user.username.length > 0 && 
            user.confirmPassword.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/2 bg-amber-50 flex flex-col items-center justify-center p-8">
                    <img src="/login.png" alt="KrishiMART Logo" className="mb-4" />
                    <h2 className="text-xl font-semibold text-green-800">
                        Simplifying Agriculture for Every Kisan
                    </h2>
                </div>
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-green-700 mb-2">
                        {loading ? "KrishiSmart Welcomes You..." : "Welcome To KrishiSmart"}
                    </h2>
                    <p className="text-gray-600 mb-6">Create your new account.</p>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={onSignup}>
                        <label htmlFor='username' className="block text-gray-700">
                            Enter your username
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="abcxyz"
                            value={user.username}
                            onChange={(e) => setUser({...user, username: e.target.value})}
                        />

                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="johndoe@example.com"
                            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                        />

                        <label htmlFor='password' className="block text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="a strong password"
                                className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})}
                            />
                            <button
                                type="button"
                                className="cursor-pointer absolute right-3 top-3 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <label className="block text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="confirm password"
                                className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={user.confirmPassword}
                                onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
                            />
                            <button
                                type="button"
                                className="cursor-pointer absolute right-3 top-3 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={buttonDisabled || loading}
                            className={`w-full mt-6 bg-green-700 text-white py-2 rounded-md transition ${
                                buttonDisabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
                            }`}
                        >
                            {loading ? "Signing up..." : buttonDisabled ? "Fill all fields" : "Signup"}
                        </button>
                    </form>
                    <Link href="/login" className="block mt-4 text-green-600 hover:underline">
                        Already have an Account? Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;

