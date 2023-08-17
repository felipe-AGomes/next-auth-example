import { useSession } from 'next-auth/react';

export default function Authenticated() {
	const { data: session } = useSession();
	console.log(session);
	return <div>{session && JSON.stringify(session?.user)}</div>;
}
