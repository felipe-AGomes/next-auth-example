// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req });

	if (!session) {
		res.status(400).json({ name: 'error' });
		return;
	}

	console.log('============API===========', session);

	res.json({
		session,
	});
}
