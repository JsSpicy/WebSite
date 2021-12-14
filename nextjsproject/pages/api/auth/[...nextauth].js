import NextAuth from 'next-auth';
import Providers from 'next-auth/providers/github';

export default NextAuth({
    providers: [
        Providers({
            clientId: '57c516815239e331d409',
            clientSecret: '3fc29bbac0648cb68f3041d9069e0c50f3dcbff6'
        }),
    ],
    database: process.env.DB_URL,
  session: {
    jwt: true
  },
  jwt: {
    secret: 'asdcvbtjhm'
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    }
  }
})