import React, { useState } from 'react';
import { addEntry } from '../api/firebase';

import desc from '../icon/desc.svg';
import ff from '../icon/fast_forward.svg';
import loc from '../icon/location.svg';
import text from '../icon/text.svg';

import DatePicker from './datepicker';
import TimePicker from './timepicker';

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

export default function InputOverlay({ close, selected }) {
	const [date, setDate] = useState(`${day}-${month.toString().padStart(2, '0')}-${year}`);
	const [startTime, setStartTime] = useState('03:00 PM');
	const [endTime, setEndTime] = useState('10:00 PM');
	const [location, setLocation] = useState(selected || '4936');
	const [alt, setAlt] = useState('');
	const [remarks, setRemarks] = useState('');

	const [page, setPage] = useState(0);

	const prev = () => {
		if (page > 0) setPage(page - 1);
	};

	const next = () => {
		if (page === 1) {
			addEntry({ date, startTime, endTime, remarks, location: alt ? alt : location });
			close();
		} else setPage(page + 1);
	};

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
						<>
							<div className='inputRow'>
								<img className='inputIcon' src={loc} alt='loc' width={30} />
								<select
									className='inputSelect'
									defaultValue={location}
									onChange={(event) => setLocation(event.target.value)}>
									<option className='inputOption' value='4936'>
										4936
									</option>
									<option className='inputOption' value='4937'>
										4937
									</option>
									<option className='inputOption' value='5437'>
										5437
									</option>
								</select>
							</div>
							<div className='inputRow'>
								<img className='inputIcon' src={text} alt='text' width={30} />
								<textarea
									className='inputAltTitle'
									onChange={(event) => setAlt(event.target.value)}
									placeholder='Alternate Name (Optional for no location)'
								/>
							</div>
							<div className='inputRow'>
								<img className='inputIcon' src={desc} alt='desc' width={30} />
								<textarea
									className='inputRemarks'
									onChange={(event) => setRemarks(event.target.value)}
									placeholder='Remarks (Optional)'
								/>
							</div>
						</>
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
