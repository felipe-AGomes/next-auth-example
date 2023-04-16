import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FormEventHandler, useState } from 'react';

export default function Signin() {
	const router = useRouter();

	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await signIn('credentials', {
			email: form.email,
			password: form.password,
		});
		router.push('/');
	}

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				className='form-container'
				style={{
					height: '500px',
					width: '400px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '10px',
				}}
			>
				<form
					onSubmit={handleSubmit}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '20px',
						flexDirection: 'column',
					}}
				>
					<input
						style={{ width: '100%' }}
						type='text'
						placeholder='email'
						onChange={(e) => setForm({ ...form, email: e.target.value })}
						value={form.email}
					/>
					<input
						style={{ width: '100%' }}
						type='password'
						placeholder='password'
						onChange={(e) => setForm({ ...form, password: e.target.value })}
						value={form.password}
					/>
					<button
						style={{ width: '100%' }}
						type='submit'
					>
						enviar
					</button>
				</form>
			</div>
		</div>
	);
}
