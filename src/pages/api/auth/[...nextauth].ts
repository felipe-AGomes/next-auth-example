import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import NextAuth, { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
	providers: [
		GoogleProvider({
			clientSecret: process.env.CLIENT_SECRET!,
			clientId: process.env.CLIENT_ID!,
		}),
		// CredentialProvider({
		// 	name: 'Credentials',
		// 	credentials: {
		// 		email: { label: 'email', type: 'text', placeholder: 'example@example.com' },
		// 		password: { label: 'Password', type: 'password' },
		// 	},
		// 	authorize(credentials) {
		// 		const User = {
		// 			name: 'felipe',
		// 			email: 'felipe',
		// 			id: 'felipe',
		// 		};
		// 		if (!credentials) {
		// 			return null;
		// 		}
		// 		if (!(credentials?.email === 'felipe')) {
		// 			return null;
		// 		}

		// 		if (!(credentials?.password === 'felipe')) {
		// 			return null;
		// 		}

		// 		return User;
		// 	},
		// }),
	],
	callbacks: {
		session({ session, user, newSession, token, trigger }) {
			console.log(
				'==========session==========',
				session,
				'==========session=========='
			);
			console.log('==========user==========', user, '==========user==========');
			console.log(
				'==========newSession==========',
				newSession,
				'==========newSession=========='
			);
			console.log('==========token==========', token, '==========token==========');
			console.log(
				'==========trigger==========',
				trigger,
				'==========trigger=========='
			);
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
