import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Iv1.351189d2e7dd986d',
            clientSecret: '26a3a0bf4d192fa016a9c21802150b380494a1e6'
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
            
      session.user.uid = token.sub;
            return session;
        },
    },
    secret: "default_secret_key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
