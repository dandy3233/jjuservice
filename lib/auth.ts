// lib/auth.ts
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';  // Corrected import

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers as needed
  ],
  secret: process.env.NEXTAUTH_SECRET, // Secure session handling
  callbacks: {
    async session({ session, token }) {
      // Optionally, you can add more session handling here
      session.user.id = token.sub;
      return session;
    },
  },
};
