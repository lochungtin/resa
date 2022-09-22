import React from 'react';

import desc from '../icon/desc.svg';

import options from '../options';

export default function NoEntry({ selected }) {
	return (
		<div className='entryBg'>
			<div>
				<p className='entryLocation'>{options[selected] || 'All'}</p>
				<div className='entryRow'>
					<img className='entryIcon' src={desc} alt='logo' width={20} />
					<p className='entrySingleLine'>No entries yet</p>
				</div>
			</div>
		</div>
	);
}
