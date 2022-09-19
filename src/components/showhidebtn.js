import React from 'react';

import hide from '../icon/hide.svg';
import show from '../icon/show.svg';

const ShowHideButton = ({ click, showing }) => {
	return (
		<button className='showHideBtn' onClick={click}>
			<img src={showing ? hide : show} alt='btn' width={50} />
		</button>
	);
};

export default ShowHideButton;
