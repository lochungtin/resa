import Calendar from '@enigmaoffline/calendarjs';
import React, { useState } from 'react';

import left from '../icon/chevron-left.svg';
import right from '../icon/chevron-right.svg';

const MONTH_NAMES = [
	'January',
	'Febuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
let calendar = new Calendar(year, month);

export default function DatePicker({ setDate, selectedDate }) {
	const [m, setM] = useState(month);
	const [y, setY] = useState(year);
	const [grid, setGrid] = useState(() => {
		calendar = new Calendar(year, month);
		return calendar.getGrid();
	});

	const prev = () => {
		calendar.prevMonth();
		setM(calendar.month);
		setY(calendar.year);
		setGrid(calendar.getGrid());
	};

	const next = () => {
		calendar.nextMonth();
		setM(calendar.month);
		setY(calendar.year);
		setGrid(calendar.getGrid());
	};

	return (
		<div className='datePickRoot'>
			<div className='datePickRow'>
				<button onClick={prev}>
					<img src={left} alt='left' width={25} />
				</button>
				<p className='datePickMonth'>
					{MONTH_NAMES[m - 1]} {y}
				</p>
				<button onClick={next}>
					<img src={right} alt='right' width={25} />
				</button>
			</div>
			<div className='datePickRow'>
				{['s', 'm', 't', 'w', 't', 'f', 's'].map((day, index) => {
					return (
						<div key={index} className='datePickCell'>
							<p className='datePickCellAccented'>{day.toUpperCase()}</p>
						</div>
					);
				})}
			</div>
			{grid.map((row, rIndex) => {
				return (
					<div key={rIndex} className='datePickRow'>
						{row.map((cell, cIndex) => {
							let val = parseInt(cell.substring(0, 2));

							let textClass = '';
							if ((rIndex === 0 && val > 10) || (rIndex === grid.length - 1 && val < 10))
								textClass = 'datePickCellDisabled';
							else if (cell === `${day}-${month.toString().padStart(2, '0')}-${year}`)
								textClass = 'datePickCellAccented';

							return (
								<button
									key={cIndex}
									className={'datePickCell ' + (selectedDate === cell ? 'dataPickCellSelected' : '')}>
									<p className={textClass}>{val}</p>
								</button>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
