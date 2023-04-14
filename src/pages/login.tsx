import { signIn } from 'next-auth/react';

export default function login() {
	return (
		<button onClick={() => signIn('credentials', { callbackUrl: '/' })}>
			Sign In
		</button>
	);
}
