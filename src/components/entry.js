import React from 'react';

import date from '../icon/date.svg';
import del from '../icon/delete.svg';
import desc from '../icon/desc.svg';
import time from '../icon/time.svg';

import { deleteEntry } from '../api/firebase';

export default function Entry({ data }) {
	return (
		<div className='entryBg'>
			<div>
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
			<button className='entryDeleteBtn' onClick={() => deleteEntry(data)}>
				<img src={del} alt='del' width={15} />
			</button>
		</div>
	);
}
