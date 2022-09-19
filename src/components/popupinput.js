import React from 'react';

import add from '../icon/add.svg';

export default function PopUpInput({ click, showing }) {
	return (
		<button className='sideBtn' onClick={click}>
			<img src={add} alt='btn' width={40} />
		</button>
	);
}
