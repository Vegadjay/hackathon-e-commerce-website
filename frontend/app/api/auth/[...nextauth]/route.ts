import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export const handler = NextAuth({

	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],

	callbacks: {

		async jwt({ token, account, profile }) {
			if (account) {
				token.accessToken = account.access_token;
				token.email = profile?.email;
			}
			return token;
		},

		async session({ session, token }: { session: any, token: any }) {
			try {
				await dbConnect();
				const user = await User.findOne({ email: token.email });

				if (!user) {
					console.log("User not found");
					session.user = {
						success: false,
						message: "User not found",
					};
					return session;
				}

				session.user = {
					success: true,
					message: "Login successful",
					id: user._id,
					username: user.username,
					token: user.token,
					email: user.email,
					role: user.role
				};

			} catch (err) {
				console.error(err);
			}

			return session;
		},
	},
});

export { handler as GET, handler as POST };
