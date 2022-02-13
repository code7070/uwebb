import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const setProcess = {
  env: {
    GOOGLE_CLIENT_ID:
      '719263281239-h845c9p76oa9hgp29nuu95f94babisnp.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '0NTAySJZAMABI_6OXy9qfP3D'
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: setProcess.env.GOOGLE_CLIENT_ID,
      clientSecret: setProcess.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ]
})
