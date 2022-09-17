import React from 'react';

import hide from '../icon/hide.svg';
import show from '../icon/show.svg';

const ShowHideButton = ({ showing }) => {
	return (
		<button className='showHideBtn'>
			<img src={showing ? hide : show} alt='btn' width={50} />
		</button>
	);
};

export default ShowHideButton;
