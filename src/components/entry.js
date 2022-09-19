import React from 'react';

export default function Entry({ data }) {
	return (
		<div className='entryBg'>
			<p>{data.location}</p>
			<div>
				<img src={undefined} alt='logo' width={20} />
				<p>{data.date}</p>
			</div>
			<div>
				<img src={undefined} alt='logo' width={20} />
				<p>{data.startTime}</p>
				<p>{data.endTime}</p>
			</div>
			{data.remarks ? (
				<div>
					<img src={undefined} alt='logo' width={20} />
					<p>{data.remarks}</p>
				</div>
			) : null}
		</div>
	);
}
