import {
	GetServerSideProps,
	GetServerSidePropsContext,
	NextApiRequest,
} from 'next';
import { getServerSession } from 'next-auth';
import { getSession, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { authOptions } from './api/auth/[...nextauth]';
import { redirect } from 'next/dist/server/api-utils';

export default function Home({ serverSession }: { serverSession: any }) {
	const router = useRouter();

	return (
		<>
			<h1>{serverSession?.user?.name}</h1>
			<button
				onClick={async () => {
					await signOut();
					router.push('/login');
				}}
			>
				Sign Out
			</button>
		</>
	);
}

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
	const serverSession = await getSession({ req });

	if (!serverSession) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		};
	}
	console.log({ serverSession, getServerSideProps: true });

	return {
		props: { serverSession },
	};
}
