import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { authOptions } from './api/auth/[...nextauth]';
import { redirect } from 'next/dist/server/api-utils';

export default function Home({ serverSession }: { serverSession: any }) {
	const { data } = useSession();
	const router = useRouter();
	// console.log({ serverSession, getServerSideProps: false });

	useEffect(() => {
		// if (!data) {
		// 	router.push('/login');
		// }
		console.log({ data, useSession: true });
	}, [data, router]);

	return (
		<>
			<h1>{data?.user?.name}</h1>
			<button onClick={() => signOut()}>Sign Out</button>
		</>
	);
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
// 	const serverSession = await getServerSession(
// 		context.req,
// 		context.res,
// 		authOptions
// 	);

// 	console.log({ serverSession, getServerSideProps: true });

// 	return {
// 		props: { serverSession },
// 	};
// }
