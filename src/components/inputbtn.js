import React from 'react';

import add from '../icon/add.svg';

export default function InputBtn({ click, showing }) {
	const toggle = () => {
		click(!showing);
	};

	return (
		<button className='sideBtn' onClick={toggle}>
			<img className={showing ? 'closeMode' : 'rotatable'} src={add} alt='btn' width={40} />
		</button>
	);
}
