import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/db";


export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone_number: { label: "Phone Number", type: "text" },
        accountType: { label: "Account Type", type: "text" },
      },
      async authorize(credentials) {
        const phone_number = credentials?.phone_number?.trim();
        const accountType = credentials?.accountType;

        if (!phone_number) return null;

        const client = await connectToDatabase();
        try {
          const db = client.db();
          const user = await db
            .collection('users')
            .findOne({ phone_number });
            console.log(`sign in as ${accountType}`)
          if (!user) return null;

          return {
            id: user._id.toString(),
            phone_number: user.phone_number,
            accountType,
          };
        } finally {
          client.close();
        }
      },
    }),
  ],
});
