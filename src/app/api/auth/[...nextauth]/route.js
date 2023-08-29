import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email Or Password',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },

            },
            async authorize(credentials, req) {
                return { 'name': "souarav" };
            },

        },

        ),

    ],
    pages: {
        signIn: '/auth/signin',
    }

});

export { handler as GET, handler as POST }