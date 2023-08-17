import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import google from 'next-auth/providers/google';

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, account }: { token: any; account: any }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }: { token: any; session: any }) {
			// Send properties to the client, like an access_token from a provider.
			session.accessToken = token.accessToken;
			return session;
		},
		redirect() {
			return '/authenticated';
		},
	},
};

export default NextAuth(authOptions);
