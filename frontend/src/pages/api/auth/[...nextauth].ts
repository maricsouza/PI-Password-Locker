import axios from "axios"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const res = await axios.post("http://localhost:8080/usuarios/login", {}, {
            headers: {
              "usuario": credentials?.username,
              "senha": credentials?.password
            }
          })
          const user = res.data

          // If no error and we have user data, return it
          if (user) {
            return user
          }
          // Return null if user data could not be retrieved
          return null
        }
      })
    ],
    pages: {
      signIn: '/login'
    },
    callbacks: {
      async jwt({token, user}) {
        return {...token, ...user}
      },
      async session({session, token}) {
        session.user = token as any;
        return session
      }
    }
})