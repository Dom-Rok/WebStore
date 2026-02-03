import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { baseApiUrl } from "@/app/api/ApiGlobals"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "FakeStoreAPI",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                if (!credentials?.username || !credentials?.password) {
                    return null
                }

                try {
                    const res = await fetch(`${baseApiUrl}/auth/login`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            username: credentials.username,
                            password: credentials.password
                        })
                    })

                    if (!res.ok) {
                        console.error("Login failed with status:", res.status)
                        return null
                    }

                    const data = await res.json().catch(err => {
                        console.error("Failed to parse response as JSON:", err)
                        return null
                    })

                    if (data && data.token) {
                        return {
                            id: credentials.username,
                            name: credentials.username,
                            email: credentials.username,
                            accessToken: data.token
                        }
                    }

                    return null
                } catch (err) {
                    console.error("Authentication error:", err)
                    return null
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60 // 30 dni
    },

    callbacks: {
        async jwt({ token, user }) {
            // Initial sign in
            if (user) {
                token.accessToken = user.accessToken
                token.userId = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.userId as string
            }
            session.accessToken = token.accessToken as string
            return session
        },

        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    },
    debug: process.env.NODE_ENV === "development"
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }