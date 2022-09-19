import React, { useState } from 'react';

import add from '../icon/add.svg';

export default function InputBtn({ click }) {
	const [rotated, setRotated] = useState(false);

	const toggle = () => {
		setRotated(!rotated);
		click(!rotated);
	};

	return (
		<button className='sideBtn' onClick={toggle}>
			<img className={rotated ? 'closeMode' : 'rotatable'} src={add} alt='btn' width={40} />
		</button>
	);
}
