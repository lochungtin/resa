import React, { useState } from 'react';

import ff from '../icon/fast_forward.svg';

import DatePicker from './datepicker';
import TimePicker from './timepicker';

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

export default function InputOverlay({ close }) {
	const [date, setDate] = useState(`${day}-${month.toString().padStart(2, '0')}-${year}`);
	const [startTime, setStartTime] = useState('03:00 PM');
	const [endTime, setEndTime] = useState('10:00 PM');

	const [page, setPage] = useState(0);

	const prev = () => {
		if (page > 0) setPage(page - 1);
	};

	const next = () => {
		if (page === 1) close();
		else setPage(page + 1);
	};

	console.log(date, startTime, endTime);

	return (
		<div className='inputOverlayBg'>
			<div className='inputBg'>
				<button onClick={prev}>
					<svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px'>
						<path
							fill={page === 0 ? '#444' : '#ddd'}
							d='M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z'
						/>
					</svg>
				</button>
				<div className='inputContent'>
					{page === 0 ? (
						<>
							<DatePicker selectedDate={date} setDate={setDate} day={day} month={month} year={year} />
							<div className='inputTimePicker'>
								<TimePicker selectedTime={startTime} setTime={setStartTime} />
								<img className='inputTimePickerSeparator' src={ff} alt='ff' width={40} />
								<TimePicker selectedTime={endTime} setTime={setEndTime} />
							</div>
						</>
					) : (
						<></>
					)}
				</div>
				<button onClick={next}>
					<svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px'>
						<path
							fill={page === 1 ? '#85c997' : '#ddd'}
							d='M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
