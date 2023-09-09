import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/Database/schema/userSchema";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email Or Password',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },

            },
            async authorize(credentials, req) {
                const loginuser = await User.findOne({ email: credentials.username });
                if (loginuser != null) {
                    const checkpass = await bcrypt.compare(credentials.password, loginuser.password);
                    const token = jwt.sign({ id: loginuser._id, role: loginuser.role }, process.env.JWT_KEY);
                    if (checkpass == true) {
                        return { id: loginuser._id, name: loginuser.name, email: loginuser.email, role: loginuser.role, token };
                    }
                }
            },

        },

        ),

    ],
    pages: {
        signIn: '/auth',
    },
    callbacks: {
        jwt({ token, user }) {

            if (user) {
                token.role = user.role
                token.token = user.token
                token.id = user._id
            }
            return token
        },
        session({ session, token }) {
            session.user.role = token.role
            session.user.token = token.token
            session.user.id = token.id
            return session
        }
    }
});

export { handler as GET, handler as POST }