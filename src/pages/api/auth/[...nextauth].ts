import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import NextAuth, { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
	providers: [
		GoogleProvider({
			clientSecret: process.env.CLIENT_SECRET!,
			clientId: process.env.CLIENT_ID!,
		}),
		CredentialProvider({
			name: 'credentials',
			type: 'credentials',
			id: '1',
			credentials: {
				email: { label: 'email', placeholder: 'email', type: 'text' },
				password: { label: 'password', placeholder: 'password', type: 'text' },
			},
			authorize(
				credentials:
					| ({ email?: string; password?: string } & Record<never, string>)
					| undefined
			) {
				const user = {
					name: 'felipe',
					email: 'felipe',
					id: '11502777932',
				};
				if (!credentials) {
					console.error('Erro: Sem credenciais');
					return null;
				}
				if (!(credentials?.email === 'felipe')) {
					console.error('Erro: email invalido');
					return null;
				}
				if (!(credentials?.password === 'felipe')) {
					console.error('Erro: Password invalido');
					return null;
				}
				return user;
			},
		}),
	],
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		session({ session, token }) {
			return {
				...session,
				user: {
					...session.user,
					id: token.id,
				},
			};
		},
	},
	// pages: {
	// 	signIn: '/auth/signin',
	// },
	// secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
