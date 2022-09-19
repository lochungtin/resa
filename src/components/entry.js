import React from 'react';

import date from '../icon/date.svg';
import desc from '../icon/desc.svg';
import time from '../icon/time.svg';

export default function Entry({ data }) {
	console.log(data[1]);
	return (
		<div className='entryBg'>
			<p className='entryLocation'>{data.location}</p>
			<div className='entryRow'>
				<img className='entryIcon' src={date} alt='logo' width={20} />
				<p className='entrySingleLine'>{data.date}</p>
			</div>
			<div className='entryRow'>
				<img className='entryIcon' src={time} alt='logo' width={20} />
				<p className='entrySingleLine'>
					{data.startTime} - {data.endTime}
				</p>
			</div>
			{data.remarks ? (
				<div className='entryRow'>
					<img className='entryIcon' src={desc} alt='logo' width={20} />
					<p>{data.remarks}</p>
				</div>
			) : null}
		</div>
	);
}
