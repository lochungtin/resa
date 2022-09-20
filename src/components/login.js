import React, { useEffect, useState } from 'react';
import { loginWPswd } from '../api/firebase';
import PWTile from './passwordTile';

const empty = {
	0: '-',
	1: '-',
	2: '-',
	3: '-',
	4: '-',
	5: '-',
	6: '-',
	7: '-',
};

export default function Login({ onComplete }) {
	const [pointer, setPointer] = useState(0);
	const [password, setPassword] = useState(empty);

	useEffect(() => {
		const handleKeyboard = (event) => {
			const parsed = parseInt(event.key);
			if (!isNaN(parsed)) {
				const updated = { ...password };
				updated[pointer] = parsed.toString();

				if (pointer === 7) {
					loginWPswd(
						Object.entries(updated)
							.map(([key, val]) => val)
							.join(''),
						onComplete,
					);

					setPassword(empty);
					setPointer(0);
				} else {
					setPassword(updated);
					setPointer(pointer + 1);
				}
			}
		};

		window.addEventListener('keydown', handleKeyboard);

		return () => window.removeEventListener('keydown', handleKeyboard);
	});

	return (
		<div className='root'>
			<div className='passwordRoot'>
				{Object.entries(password).map(([index, cell]) => (
					<PWTile key={index} isSet={cell !== '-'} />
				))}
			</div>
		</div>
	);
}
