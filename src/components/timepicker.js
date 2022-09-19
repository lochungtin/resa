import React, { useState } from 'react';

import down from '../icon/chevron-down.svg';
import up from '../icon/chevron-up.svg';

const HOUR_ROLLER = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const MIN_ROLLER = ['00', '15', '30', '45'];

export default function TimePicker({ setTime, selectedTime }) {
	const [hour, setHour] = useState(parseInt(selectedTime[0] + selectedTime[1]) - 1);
	const [min, setMin] = useState(parseInt(selectedTime[3] + selectedTime[4]) / 15);
	const [am, setAM] = useState(selectedTime[6] === 'A');

	const applyTime = (h, m, a) => setTime(`${HOUR_ROLLER[h]}:${MIN_ROLLER[m]} ${a ? 'AM' : 'PM'}`);

	return (
		<div className='timePickRoot'>
			<div className='timePickRoller'>
				<button
					onClick={() => {
						applyTime((hour + 1) % 12, min, am);
						setHour((hour + 1) % 12);
					}}>
					<img src={up} alt='up' width={25} />
				</button>
				<p>{HOUR_ROLLER[hour]}</p>
				<button
					onClick={() => {
						applyTime((hour + 11) % 12, min, am);
						setHour((hour + 11) % 12);
					}}>
					<img src={down} alt='down' width={25} />
				</button>
			</div>
			<p>:</p>
			<div className='timePickRoller'>
				<button
					onClick={() => {
						applyTime(hour, (min + 1) % 4, am);
						setMin((min + 1) % 4);
					}}>
					<img src={up} alt='up' width={25} />
				</button>
				<p>{MIN_ROLLER[min]}</p>
				<button
					onClick={() => {
						applyTime(hour, (min + 3) % 4, am);
						setMin((min + 3) % 4);
					}}>
					<img src={down} alt='down' width={25} />
				</button>
			</div>
			<p>:</p>
			<div className='timePickRoller'>
				<button
					onClick={() => {
						applyTime(hour, min, !am);
						setAM(!am);
					}}>
					<img src={up} alt='up' width={25} />
				</button>
				<p>{am ? 'AM' : 'PM'}</p>
				<button
					onClick={() => {
						applyTime(hour, min, !am);
						setAM(!am);
					}}>
					<img src={down} alt='down' width={25} />
				</button>
			</div>
		</div>
	);
}
