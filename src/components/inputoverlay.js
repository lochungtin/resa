import React from 'react';
import DatePicker from './datepicker';

export default function InputOverlay({ showing }) {
	return (
		<div className='inputOverlayBg'>
			<div className='inputBg'>
				<DatePicker selectedDate={'19-09-2022'} />
			</div>
		</div>
	);
}
