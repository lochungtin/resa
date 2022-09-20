import React from 'react';

export default function PWTile({ isSet }) {
	return (
		<div className='passwordTileRoot'>
			{isSet ? <p className='passwordStar'>*</p> : null}
			<div className='passwordTileBottom' />
		</div>
	);
}
