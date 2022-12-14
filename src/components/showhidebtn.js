import React from 'react';

import hide from '../icon/hide.svg';
import show from '../icon/show.svg';

export default function ShowHideButton({ click, showing }) {
	return (
		<button className='sideBtn' onClick={click}>
			<img src={showing ? hide : show} alt='btn' width={40} />
		</button>
	);
}
