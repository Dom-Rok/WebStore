"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                username,
                password,
                redirect: false,

            });

            if (result?.error) {
                setError("Invalid username or password");
            } else {
                //succes
                //router.push("/products");
                window.location.href = "/products";
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("An error occurred during login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen  justify-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md max-h-[500px]">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Prihlásiť sa</h1>
                    <p className="mt-2 text-gray-600">Prihláste sa pre prezeranie produktov</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Prihlasovacie meno
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Heslo
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ff4100] hover:bg-[#c23304] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {loading ? "Prihlasujem" : "Prihlásiť"}
                        </button>
                    </div>
                </form>
                {error && (
                    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}