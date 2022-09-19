import React, { useState } from 'react';

import DatePicker from './datepicker';

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

export default function InputOverlay({ showing }) {
	const [date, setDate] = useState(`${day}-${month.toString().padStart(2, '0')}-${year}`);

	return (
		<div className='inputOverlayBg'>
			<div className='inputBg'>
				<DatePicker selectedDate={date} setDate={setDate} day={day} month={month} year={year} />
			</div>
		</div>
	);
}
