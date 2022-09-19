import React from 'react';

const BASE_BORDER_COLOR = '#000';
const SELECTED_BORDER_COLOR = '#FFF';
const BASE_FILL_COLOR = '#93a397';
const ACCENTED_FILL_COLOR = '#85c997';

const Interactable = ({ click, selected, counter }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='1001.333' height='773.333' version='1' viewBox='0 0 751 580'>
			<path
				id='5102'
				fill={counter['5102'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5102' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5102')}
				d='M2244 3174c-16-13-37-23-46-24-12 0-18-8-18-25 0-22 4-25 35-25 25 0 35 4 35 16 0 11 6 14 20 9 20-6 25 2 21 33-1 7 4 12 11 11 27-3 40 1 36 13-8 22-64 17-94-8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5164'
				fill={counter['5164'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5164' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5164')}
				d='M4140 5482c0-6-9-8-20-5-12 3-20 0-20-7 0-6 9-14 20-17s20-9 20-14 15-9 34-9c26 0 35 5 39 22 7 27 10 25-35 33-24 5-38 3-38-3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='3056'
				fill={counter['3056'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '3056' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('3056')}
				d='M4450 4755c0-10-10-15-31-15-26 0-30-3-24-17 4-10 10-26 12-35 7-23 31-23 65 0 22 15 25 21 15 31-9 11-9 14 1 18s10 8 1 19c-15 19-39 18-39-1z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='41'
				fill={counter['41'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '41' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('41')}
				d='M1076 3518c-22-31-20-45 7-52 26-7 88-7 71 0-7 3-10 14-7 25 4 12-1 25-13 34-27 20-40 18-58-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='191'
				fill={counter['191'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '191' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('191')}
				d='M826 2688c4-18 6-45 6-60-1-15 4-31 12-35 7-4 17-18 20-30 6-19 4-23-16-23-27 0-48-17-48-38 0-9 7-13 19-9 12 3 22-1 25-9s1-14-4-14-7-7-4-15c4-8 10-12 16-9 5 3 19 7 31 9s33 7 46 11c22 7 23 5 19-24-2-18-1-32 4-32 4 0 7-3 6-7-4-21 24-62 51-74 45-20 46-37 3-49-20-5-43-10-49-10-7 0-13-4-13-10 0-5 15-10 34-10 30 0 33-2 28-26-2-14-10-23-16-21-7 3-20-1-30-9-16-11-17-16-6-29 10-12 10-18 0-30-11-13-8-24 15-67 27-49 27-52 9-65-15-11-19-11-22-1-10 37-27 58-49 58-13 0-26 7-29 15-13 33-60 0-58-40s4-45 19-45c8 0 15-4 15-8 0-5 11-22 25-38s25-34 25-41c0-23 35-33 68-21 26 10 41 9 92-9 73-25 82-17 54 52-19 44-47 60-57 33-3-10-7-10-20 1-11 8-14 18-8 25 4 6 9 25 9 41 0 17 8 44 16 60 21 40 20 54-6 82-21 22-21 24-5 40 11 11 17 13 17 5 0-7 13-12 30-12 20 0 30 5 30 15 0 8-4 15-10 15-5 0-10 16-10 35 0 31 3 35 28 35 20 1 35 12 59 45 42 56 36 77-18 69-35-6-40-4-56 25-19 33-32 38-51 19-8-8-15-8-28 3-14 11-18 11-29-4-7-9-15-17-18-17-7 0-21 52-18 69 1 7-7 19-17 27-13 9-18 21-15 34 6 24-12 27-34 5-19-20-36-9-30 21 2 14-3 31-15 44-19 20-25 37-27 68-1 6-6 12-12 12-7 0-8-11-3-32z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4885'
				fill={counter['4885'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4885' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4885')}
				d='M2390 1740c0-13-5-18-15-14-17 7-22-31-5-41 6-3 10-22 10-41 0-28 4-34 21-34 19 0 21 5 17 40-3 36-1 40 19 40 14 0 23 6 23 15 0 8-4 15-9 15s-11 9-14 20c-7 27-47 27-47 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5420'
				fill={counter['5420'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5420' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5420')}
				d='M3395 4760c-9-29 4-41 49-44 28-3 37 1 42 17 7 21-9 37-38 37-9 0-23 3-31 6-10 3-18-2-22-16z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4987'
				fill={counter['4987'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4987' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4987')}
				d='M1382 1948c-20-25-33-95-22-123 5-14 10-37 10-51 0-13 5-24 11-24 5 0 7-5 4-10-3-6 2-13 12-17s42-24 72-46 56-35 60-30c3 6 35 12 71 15 87 7 198 61 178 86-67 85-145 132-218 132-25 0-39 4-35 10 3 6-3 10-14 10s-22 9-26 19c-3 11-20 24-37 30-40 14-53 14-66-1z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5375'
				fill={counter['5375'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5375' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5375')}
				d='M3782 2218c-17-17-15-63 3-78 13-11 18-10 30 6 18 23 18 27 3 59-13 28-19 30-36 13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4835'
				fill={counter['4835'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4835' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4835')}
				d='M1327 3032c-10-10-17-23-17-29 0-16-30-37-54-38-16 0-20-5-18-24 3-16 0-21-8-16s-11 1-8-11c2-14 12-19 36-19 17-1 32 2 32 6 0 16 39 47 77 62 41 16 44 16 75-3 34-20 58-26 58-12 0 8-64 52-101 68-15 7-30 17-33 23-10 16-20 14-39-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4958'
				fill={counter['4958'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4958' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4958')}
				d='M3523 1915c-18-20-16-33 5-44 22-12 75-8 79 6 4 12-26 39-52 46-11 4-25 0-32-8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4937'
				fill={counter['4937'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4937' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4937')}
				d='M2967 4073c-4-3-7-15-7-26 0-15-3-17-13-9-7 6-23 8-36 5-18-5-21-10-16-31s4-23-7-14c-21 17-78-23-78-54 0-20 5-24 29-24 16 0 31-6 35-15 6-16 46-21 46-6 0 5 15 4 35-2 34-10 47-26 23-28-7 0-1-5 15-11 15-5 27-14 27-19 0-20 21-7 31 18l10 28 17-21c11-14 33-24 60-27 36-4 42-2 42 13 0 10-6 21-12 24-10 5-10 7 0 12 19 9 14 30-13 48-28 18-57 79-49 101 4 9 0 15-10 15-19 0-21 16-3 23 6 3-18 6-54 6-36 1-69-2-72-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4973'
				fill={counter['4973'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4973' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4973')}
				d='M3810 2317c0-8-6-17-12-19-8-3 0-17 21-39 22-21 36-29 39-21 2 6 17 12 33 12 37 0 38 23 2 47-14 9-31 18-37 19s-19 5-28 9c-13 5-18 2-18-8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5402'
				fill={counter['5402'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5402' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5402')}
				d='M4050 5288c1-44 61-90 72-56 5 15 48-26 48-47 0-20 16-19 24 1 11 28 6 54-9 54-8 0-15 9-15 19 0 14-6 19-19 16-13-2-21 4-25 18-5 17-8 19-15 8-6-9-11-10-15-2-4 6-16 11-27 11-13 0-19-7-19-22z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5342'
				fill={counter['5342'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5342' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5342')}
				d='M5460 3823c0-8 7-21 15-29 17-17 20-44 6-44-5 0-16-14-25-31-21-42-4-71 39-67l30 3 2 75 3 75-35 16c-30 14-35 14-35 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5162'
				fill={counter['5162'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5162' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5162')}
				d='M5663 3789c-42-12-46-21-26-58 20-33 70-52 83-31 4 7 13 9 19 6 16-10 53 3 45 16-4 6-1 14 6 18 8 5 0 14-24 29-20 12-40 20-46 16-5-3-10-1-10 4 0 13-3 13-47 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5215'
				fill={counter['5215'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5215' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5215')}
				d='M3677 5227c-13-15-17-32-13-54 2-18 0-35-5-38-5-4-9-21-9-40 0-50 26-54 68-10 33 34 34 36 16 50-15 11-17 16-6 26 17 18 15 46-3 53-8 3-15 12-15 21 0 21-12 19-33-8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5192'
				fill={counter['5192'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5192' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5192')}
				d='M1361 3579c-13-11-30-18-38-15-7 3-13 2-13-3 0-9 39-27 83-37 27-6 27-5 25 32-4 46-22 53-57 23z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4798'
				fill={counter['4798'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4798' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4798')}
				d='M3046 3619c-29-23-26-39 8-39 12 0 27-5 33-11 15-15 57-7 61 12 2 11-8 22-27 30-17 8-31 17-31 21 0 14-16 9-44-13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4952'
				fill={counter['4952'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4952' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4952')}
				d='M3580 1015c-5-14-14-25-20-25-5 0-10-7-10-15 0-9-6-18-13-21-11-4-12-17-5-62 5-31 11-58 13-61 10-9 55 19 55 34 0 8 6 15 13 15 10 0 13 12 12 37-2 20 2 45 8 54 8 13 7 24-3 43-17 33-38 33-50 1z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5388'
				fill={counter['5388'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5388' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5388')}
				d='M3865 4783c-16-3-21-12-22-43-2-38 0-40 26-40 25 0 29 5 34 37 6 36 2 54-11 52-4-1-16-4-27-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4913'
				fill={counter['4913'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4913' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4913')}
				d='M1372 3067c-16-19 4-44 69-88 37-25 69-38 102-42 26-2 47-1 47 2 0 13-24 31-42 31-10 0-18 5-18 10 0 6-6 10-14 10s-16 7-20 15c-3 8-1 15 4 15 19 0 9 21-14 30-13 5-27 14-31 19-9 15-70 14-83-2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4849'
				fill={counter['4849'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4849' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4849')}
				d='M4065 1643c-40-21-53-36-60-66-6-21 1-33 34-65 27-26 41-48 41-66 0-23-3-25-32-20-30 5-32 4-15-9 18-15 17-15-3-22-24-8-22-31 3-29 11 1 15-6 14-25-2-22 2-26 25-24 21 1 29-4 37-28 11-32 31-31 31 1 0 11 9 24 20 30 23 13 28 42 5 34-11-5-13-2-9 10 5 12 0 16-16 16-18 0-20 3-11 13 6 8 7 17 2 23-13 13-16 45-7 71 9 28-1 48-18 34-7-6-17-6-26-1-8 6-10 10-5 10 16 1 48 50 51 79 3 24-11 51-25 51-3-1-19-8-36-17zm75-297c0-8-4-18-10-21-5-3-10-4-10-1 0 2-3 11-6 20-4 11-1 16 10 16 9 0 16-6 16-14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5100'
				fill={counter['5100'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5100' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5100')}
				d='M3707 4452c-15-3-18-12-16-50 2-29-1-47-9-50-20-6-14-29 13-46 20-13 25-14 25-2 0 7 7 19 15 26 13 11 13 14-2 26-17 13-17 13 2 14 18 0 20 5 17 39-4 41-14 50-45 43z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='106'
				fill={counter['106'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '106' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('106')}
				d='M710 2270c-14-4-19-8-12-9 6-1 12-7 12-14 0-14-37-16-76-3-17 5-24 1-34-24-7-16-14-30-17-30-9 0-33 29-33 39 0 20-28 11-33-10-3-11-15-23-26-26-20-5-31-43-13-43 5 0 6-14 4-31-5-34-2-35 64-14 19 6 21 3 17-17-4-21 1-26 29-34 18-5 33-16 34-24s2-23 2-32c3-31 122-52 122-21 0 7 8 13 18 13 16 1 16 1 0 14-11 8-15 20-11 34 3 14 1 22-7 22-9 0-10 3-1 14 6 7 11 29 10 47-1 19 2 49 6 67 7 29 5 34-14 39-18 4-21 11-17 29 4 13 5 24 4 23-2-1-14-5-28-9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4848'
				fill={counter['4848'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4848' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4848')}
				d='M2485 1535c-15-19-35-37-46-40-20-7-25-31-9-55 7-12 12-12 22-2 17 17 28 15 28-7 0-23 43-53 65-44 12 4 15 14 12 31-3 16 2 31 15 44 15 15 17 22 8 28-6 4-11 11-10 15 3 10-39 65-50 65-5 0-21-16-35-35z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5275'
				fill={counter['5275'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5275' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5275')}
				d='M3271 4776c-13-15 14-59 32-53 7 2 24-2 38-9 23-11 29-11 39 1 9 11 7 16-12 26-13 7-37 20-55 30-25 14-34 15-42 5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5031'
				fill={counter['5031'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5031' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5031')}
				d='M3216 4602c-3-5-1-24 4-43 7-25 6-38-5-56-21-31-20-31 26-29 22 1 42-1 45-6 6-9 54 39 54 53 0 5-7 9-15 9-9 0-15 9-15 23 0 29-39 65-51 46-6-10-11-10-22 0-9 6-18 8-21 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='61'
				fill={counter['61'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '61' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('61')}
				d='M729 2479c-24-18-46-33-48-35s1-10 8-18c6-8 11-18 10-22-1-5 1-17 5-26 7-15 21-18 75-18 38 1 76 7 91 15 24 14 24 14 3 15-12 0-25 5-28 10-3 6 1 10 9 10 22 0 20 16-5 41-12 12-27 18-36 15-11-5-14-1-10 13 4 16-9 31-27 31-2 0-23-14-47-31z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5410'
				fill={counter['5410'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5410' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5410')}
				d='M1300 2124c-38-13-100-46-100-54 0-5 14-13 32-18 26-6 35-4 54 15 13 13 32 23 44 23 13 0 20 7 20 20 0 20-17 24-50 14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='391'
				fill={counter['391'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '391' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('391')}
				d='M4067 2551c-16-27-16-29 7-50 20-19 28-21 45-12 26 14 26 18 1 59-24 39-31 40-53 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5027'
				fill={counter['5027'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5027' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5027')}
				d='M1475 3482c-35-20-46-33-38-45 3-5-5-19-17-32l-22-24 33 4c96 11 122 18 126 36 3 11 12 19 19 19 8 0 14 4 14 9 0 11-29 23-40 16-5-3-14 4-20 15-13 23-15 24-55 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='396'
				fill={counter['396'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '396' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('396')}
				d='M2071 3343c-17-20-45-54-63-75-29-35-34-38-87-39-31-1-69-5-86-9-43-11-9-11 130 0 126 10 213 33 267 71 25 18 34 20 49 11 16-10 19-9 19 6 0 39-53 59-63 23-8-33-164-103-177-80-4 5-15 7-25 3-19-8-2 16 63 84 36 38 38 42 18 42-7 0-28-17-45-37zM1730 3210c-33-7-31-7 18-9 29 0 52 3 52 9 0 11-17 11-70 0zM1540 3180l-55-19 45 5c73 8 100 15 100 25 0 14-29 10-90-11zM1415 3150c-11-5-31-9-45-9-14-1-47-10-75-21l-50-20 40 4c53 6 165 39 165 48 0 10-9 9-35-2zM1080 3066c-19-7-61-16-92-20-32-4-58-12-58-17 0-12 12-12 100 5 78 15 130 31 130 41 0 9-44 4-80-9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5017'
				fill={counter['5017'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5017' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5017')}
				d='M3553 2401c3-14 1-31-6-40-9-11-9-15 1-18 6-3 12-20 12-39 0-37 14-43 53-22 64 33 59 107-7 108-11 0-28 8-39 18-20 16-20 16-14-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5233'
				fill={counter['5233'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5233' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5233')}
				d='M3948 5041c-10-12-18-37-18-56 0-29 4-35 21-35 31 0 51 25 43 55-6 24-4 25 19 20 14-4 28-2 32 5 10 16 2 21-42 27-30 4-42 0-55-16z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4680'
				fill={counter['4680'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4680' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4680')}
				d='M4570 4671c0-51 15-60 46-26 19 21 22 30 14 46-6 11-21 19-35 19-22 0-25-4-25-39z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='238'
				fill={counter['238'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '238' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('238')}
				d='M1909 3493c18-31 35-49 54-56 24-9 22-4-15 37-33 38-56 49-39 19zM1990 3366c0-20-11-53-27-80-23-36-36-47-68-55l-40-10 50 2 50 2 1-40c1-22 2-48 3-58 0-10 20-38 44-62 23-24 56-60 72-80 45-55 70-65 133-52 59 12 73 33 15 23-21-4-46-10-56-13-14-3-34 11-73 51-30 30-54 62-54 69 0 8-12 20-26 28-31 16-44 46-44 99 0 21-4 42-10 45-5 3 4 24 20 47 30 41 40 100 20 113-6 4-10-8-10-29z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5137'
				fill={counter['5137'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5137' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5137')}
				d='M2695 2153c-16-3-34-9-39-14-6-5-18-9-28-9-19 0-22-8-12-34 8-21 24-20 24 2 0 14 2 15 10 2 5-8 10-30 10-47 0-18 4-33 9-33 4 0 29 21 54 46 46 45 46 46 29 70-9 13-19 23-22 22-3 0-18-3-35-5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='166'
				fill={counter['166'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '166' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('166')}
				d='M960 3673c1-5 7-19 15-33 7-14 12-38 9-55-2-16-2-24 2-17 9 20 21 14 28-14 5-18 12-24 22-20 9 3 20 6 26 6s8 15 6 35c-2 19 0 35 4 35s8-4 8-10c0-5 14-10 30-10 51 0 36 28-32 60-59 28-118 39-118 23z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='185'
				fill={counter['185'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '185' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('185')}
				d='M3035 880c-3-5-2-18 4-28 13-24-1-46-38-62-17-6-37-23-45-35-15-23-14-25 29-62 25-21 49-51 55-66 7-20 15-27 25-23 8 3 15 2 15-3 0-4 13-6 29-3 26 4 28 2 24-21-6-31 12-67 34-67 10 0 14 6 10 19-7 26 24 56 41 39 7-7 12-17 12-23 0-17 41-47 56-41 8 3 20 17 26 32 11 23 9 28-12 44l-23 18 21 6c23 8 28 21 13 30-13 9-21 89-9 103 11 14-10 113-24 113-4 0-8 9-8 19 0 18-3 18-50 6-43-11-50-11-50 1 0 11-16 14-64 14-36 0-68-4-71-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='95'
				fill={counter['95'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '95' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('95')}
				d='M2597 747c-31-31-57-59-57-63 0-5 19-28 42-51 32-33 50-43 74-43 18 0 36 5 40 11 10 17 6 89-6 104-6 7-16 32-23 55l-12 43-58-56z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='387'
				fill={counter['387'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '387' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('387')}
				d='M1102 3738c4-12 96-51 228-99 71-25 98-24 40 2-25 11-58 27-73 35-16 8-35 14-44 14-8 0-27 6-41 14-54 29-114 47-110 34zM1495 3580c17-11 39-20 50-20 15 1 11 6-15 20-46 25-73 25-35 0zM1630 3532c0-11 45-32 68-32 10 0 22-4 28-9 20-19 230-75 245-66 21 14 6 25-32 25-40 0-116 20-176 46-17 8-37 14-45 14-7 0-22 7-32 15-21 16-56 20-56 7zM2020 3412c0-10 195-72 225-72 33 0 3 16-65 34-36 10-80 24-98 32-37 16-62 18-62 6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5288'
				fill={counter['5288'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5288' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5288')}
				d='M3217 3112c-15-16-24-31-20-35 11-11 103-8 103 3 0 18-31 60-44 60-7 0-24-13-39-28z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='3047'
				fill={counter['3047'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '3047' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('3047')}
				d='M3708 3969c-19-10-24-54-10-77 11-17 37-6 57 24 13 20 13 27 3 44-14 22-25 24-50 9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='130'
				fill={counter['130'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '130' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('130')}
				d='M490 2327c0-8-5-17-11-19-11-4-17-83-8-93 3-2 25 3 50 11 36 12 48 22 57 48 16 44 17 43-24 50-19 4-42 10-50 13s-14-1-14-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5181'
				fill={counter['5181'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5181' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5181')}
				d='M3070 4484c-31-71-28-84 20-84 44 0 48 5 24 31-13 15-14 24-5 50 11 31 8 49-9 49-5 0-18-21-30-46z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4894'
				fill={counter['4894'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4894' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4894')}
				d='M2853 2118c-10-38-9-47 18-102 16-33 29-65 29-73 0-7 6-13 14-13 25 0 36-60 18-100-6-14-13-41-17-60-8-50-21-68-37-52-22 22-31 13-25-27 6-50 27-91 51-105 11-6 29-19 39-28 11-9 32-20 48-23 16-4 27-10 26-13-4-13 90-92 109-91 17 0 17 1-2 9-31 12-39 29-46 98-1 7-8 12-17 10-27-3-61 12-61 29 0 11-6 14-24 9-14-3-28-2-31 4-3 5-1 10 4 10 19 0 12 43-11 67-12 13-16 23-10 23 7 0 11 22 10 65-1 67 7 90 21 66 6-9 10-1 13 23 5 41-23 120-43 124-14 3-65 98-63 117 1 6 4 25 8 43 11 47-8 39-21-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5207'
				fill={counter['5207'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5207' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5207')}
				d='M1748 2521c-33-11-48-22-48-33 0-10 5-18 11-18 7 0 17-8 24-17 12-16 15-16 40 9 15 15 36 30 47 34 18 6 19 7 2 25-9 10-20 18-23 18-3-1-27-9-53-18z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4888'
				fill={counter['4888'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4888' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4888')}
				d='M1755 2620c-4-6-17-15-30-20-18-7-24-18-27-52-3-24-3-46-1-50s26 0 53 8c36 11 55 12 69 4 30-15 38-12 45 15 5 21 11 24 30 19 19-4 26-1 31 15 8 27-1 41-29 41-12 0-26 4-31 9-16 15-102 23-110 11z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2331'
				fill={counter['2331'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2331' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2331')}
				d='M4204 3696c-7-7-19-27-28-44-28-54-55-73-94-66-29 6-33 4-30-11 1-10 19-26 39-37 36-18 36-18 76 4 22 13 57 38 77 56 32 28 37 37 31 59-11 44-49 65-71 39z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4996'
				fill={counter['4996'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4996' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4996')}
				d='M4009 3043c-6-44 29-103 61-103 20 0 53 34 43 43-3 4-17 7-30 7-22 0-25 4-27 40-1 15-45 28-47 13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4748'
				fill={counter['4748'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4748' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4748')}
				d='M5191 3429c-15-6-21-14-17-25 3-9 6-22 6-29 0-15 72-31 90-20 7 4 3 16-10 32-11 14-20 32-20 39 0 16-15 17-49 3zm49-29c0-5-9-10-20-10s-20 5-20 10c0 6 9 10 20 10s20-4 20-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5331'
				fill={counter['5331'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5331' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5331')}
				d='M1560 3594c0-7-2-18-5-26s7-19 27-27c21-10 27-16 18-19-39-13-27-42 18-42 18 0 22 5 22 31 0 23-5 32-21 36-11 3-16 9-11 12s12 16 16 28c7 20 4 22-28 21-22-1-36-6-36-14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='90'
				fill={counter['90'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '90' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('90')}
				d='M1079 1739c7-34 7-34 71-37 47-2 73 2 97 15 50 27 42 43-19 43-29 0-76 3-104 6l-52 7 7-34z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4802'
				fill={counter['4802'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4802' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4802')}
				d='M3316 4435c-3-9-4-21-1-25 3-5-8-16-24-26-37-22-50-58-18-48 19 6 20 5 8-10-7-9-10-16-5-17 5 0 18-2 29-4s22-1 25 4c3 4 25 17 49 29 34 16 48 19 58 10 23-19 33 4 19 44-7 21-14 39-17 42-2 2-29 7-60 10-47 6-57 4-63-9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4893'
				fill={counter['4893'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4893' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4893')}
				d='M1597 3729c-10-6-23-8-30-6s-20-2-30-11c-9-8-27-20-39-26-29-15-35-36-10-36 12 0 23-9 27-19 13-41 93-46 172-10 47 21 73 24 73 9 0-17 17-11 22 8 10 38-23 59-97 64-23 1-46 10-55 20-11 13-19 15-33 7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='14'
				fill={counter['14'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '14' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('14')}
				d='M1105 1808c9-49 17-58 63-58 25 0 32 4 32 20 0 11-6 20-13 20s-23 14-37 30c-37 44-53 40-45-12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4936'
				fill={counter['4936'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4936' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4936')}
				d='M2935 3200c-16-4-42-11-56-14l-26-6 16-62 17-63 47-1c30-1 47 2 47 10 0 18 24 66 33 66 10 0 9 38-3 61-11 20-27 22-75 9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5238'
				fill={counter['5238'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5238' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5238')}
				d='M2795 2368c4-18 8-61 9-95s5-65 9-69c9-9 29 45 21 57-3 6-1 15 5 22 15 18 11 77-6 77-7 0-13 9-13 20 0 12-7 20-16 20-13 0-15-6-9-32z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4867'
				fill={counter['4867'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4867' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4867')}
				d='M3121 1663c3-13-12-43-22-43-5 0-9 7-9 15s-9 15-20 15c-28 0-26-5 21-52 28-29 39-47 35-61-2-11 2-26 10-34s14-23 14-34c0-22 20-24 87-7 32 8 51 8 63 1 17-11 61 4 109 39 29 21 21 35-28 48-21 5-49 21-62 34-13 12-35 26-49 29-14 4-41 17-60 29-36 22-92 36-89 21z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5104'
				fill={counter['5104'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5104' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5104')}
				d='M2760 1590c-8-4-31-16-51-25-31-15-79-69-79-88 0-4 18-18 41-32 29-19 44-23 53-16 9 8 19 5 34-9 25-24 32-25 32-5 0 8-9 19-21 25-11 7-18 18-15 25 3 8 1 17-4 20-16 10-11 21 15 35 17 9 25 22 25 41 0 32-9 40-30 29z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2467'
				fill={counter['2467'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2467' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2467')}
				d='M4410 2951c0-30 6-42 25-55 14-9 25-15 26-14 0 2 2 10 4 18 1 8 6 27 10 41 7 29-7 45-42 47-20 1-23-4-23-37z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5234'
				fill={counter['5234'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5234' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5234')}
				d='M1721 2321c-8-5-10-14-5-22 4-8 9-22 9-31 2-27 9-29 46-14 46 19 48 23 35 51-8 18-19 25-41 25-16 0-36-4-44-9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4832'
				fill={counter['4832'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4832' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4832')}
				d='M1355 2972c-39-16-105-75-105-93 0-5-7-9-15-9s-15-9-15-20c0-15 7-20 26-20 22 0 24-3 15-14-7-8-11-30-9-48 3-30 7-33 43-39 35-6 69 3 85 22 3 3 27 10 55 15 40 7 50 13 55 33l5 23 14-26c17-31 41-34 48-7 3 12 11 17 19 14s18 6 26 24c20 44 36 57 53 43 8-7 15-23 15-36 0-31 23-31 43 0 13 20 14 29 4 50-7 14-17 26-23 26-13 0-64 24-64 30 0 3-32 6-70 8-47 2-82 9-106 22-40 23-46 23-99 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='1967'
				fill={counter['1967'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '1967' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('1967')}
				d='M3957 3863c-34-4-37-7-31-26 10-33 20-40 48-33 21 5 26 13 26 36 0 17-1 29-2 28-2-1-20-3-41-5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5437'
				fill={counter['5437'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5437' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5437')}
				d='M3025 3223c-36-9-46-23-30-40 16-15 20-43 8-43-11 0-33-50-33-72 0-14 6-17 23-14 12 3 54 8 92 12 114 10 128 29 75 100-16 21-30 45-30 52 0 12-63 15-105 5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4728'
				fill={counter['4728'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4728' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4728')}
				d='M5170 3575c0-8 5-15 11-15 7 0 9-10 5-25-5-19-2-25 9-25 9 0 29-10 46-22 18-13 45-22 67-23 32 0 37-3 34-21-1-12 4-27 13-34 8-7 15-27 15-45 0-24 7-37 25-49 14-9 25-26 25-37 0-20 4-21 53-17 28 3 79 18 112 33 69 34 126 36 177 9 18-9 50-26 70-36 21-11 56-22 78-25 39-6 40-5 40 26 0 29-3 31-33 31-23 0-56 15-103 45-63 41-74 45-133 45-47 0-72-5-97-21-19-11-34-24-34-27 0-4-14-13-30-21-40-17-97-7-105 19-3 11-11 19-17 17-7-1-13 11-14 27-2 16-8 34-14 40-5 5-10 20-10 33 0 23-12 28-53 25-33-3-100 50-112 89-7 23-25 25-25 4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4886'
				fill={counter['4886'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4886' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4886')}
				d='M3298 2213c-43-5-45-9-21-35 15-17 15-19-2-38-10-11-28-20-41-20s-28-9-34-20c-12-23-6-40 16-40 18 0 18-14-1-30-20-17-19-40 3-40 24 1 52 24 52 45 0 15 7 17 45 13 38-5 45-3 45 12 0 9-9 27-20 40-24 27-23 19-5 70 17 49 18 51 8 48-5-1-25-3-45-5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4905'
				fill={counter['4905'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4905' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4905')}
				d='M3593 4128c-15-7-23-21-24-37 0-14-2-45-4-68-2-32 1-43 11-43 14 0 54 34 54 46 0 4 8 12 17 19 16 12 16 15-1 54-21 45-21 45-53 29z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5426'
				fill={counter['5426'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5426' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5426')}
				d='M3690 4860c0-37 2-40 28-40 57 0 72 51 21 69-47 16-49 15-49-29z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4682'
				fill={counter['4682'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4682' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4682')}
				d='M4340 4810c0-18 7-20 55-20 40 0 55 4 55 14 0 16-30 26-77 26-26 0-33-4-33-20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5134'
				fill={counter['5134'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5134' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5134')}
				d='M2520 1676c0-12 11-36 25-52 65-75 65-75 95-11l20 41-24 23c-30 28-43 29-49 6-4-17-5-17-6 0-1 12-10 17-31 17-25 0-30-4-30-24z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='179'
				fill={counter['179'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '179' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('179')}
				d='M875 2980c-3-5-8-40-11-77s-12-82-20-100c-8-17-17-45-20-62-5-25-3-31 10-31 9 0 19 7 22 15 4 9 19 15 35 15 23 0 30-5 34-27 10-45 20-57 54-66 18-4 34-7 36-5 1 2 5 20 9 41 6 34 5 37-18 37-18 0-27 8-35 30-7 21-17 30-31 30-13 0-19 4-14 11 4 7 34 10 78 8 133-5 136-4 136 36 0 33-2 35-36 35-24 0-34 4-32 12 7 19-71 50-108 45-38-6-51 1-59 36-7 28-19 35-30 17z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5096'
				fill={counter['5096'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5096' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5096')}
				d='M3017 4213c-9-14-10-78-2-95 13-32 39-20 62 30 21 43 21 48 6 60-18 13-59 16-66 5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4811'
				fill={counter['4811'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4811' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4811')}
				d='M3160 4273c-35-13-39-56-11-90 23-27 51-30 51-6 0 15 1 15 13-2 11-14 21-16 51-11 45 9 105 60 81 70-8 3-15 15-15 26s-6 20-12 20c-18-1-49-26-42-33 3-3-12-6-35-5-37 0-46 7-42 31 1 8-17 8-39 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4884'
				fill={counter['4884'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4884' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4884')}
				d='M3433 1552c-24-29-29-44-25-70 5-37 28-43 55-12 9 11 23 17 31 14 24-9 29 17 7 37-12 11-21 31-21 44 0 34-12 31-47-13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4469'
				fill={counter['4469'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4469' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4469')}
				d='M5976 3484c-3-9-6-24-6-35 0-16-3-17-25-7-14 6-25 15-25 19 0 7-50 23-55 17-2-2-6-15-10-31-6-21-4-27 9-27 9 0 16 4 16 9s18 2 41-7c34-13 39-19 34-36-4-12-9-39-11-61-4-39-3-39 16 15 11 30 20 67 20 82s4 38 10 52c5 14 6 26 1 26s-12-7-15-16z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4990'
				fill={counter['4990'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4990' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4990')}
				d='M3322 3108c-63-48-54-77 18-58 45 12 64 50 38 76-12 12-20 10-56-18z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4962'
				fill={counter['4962'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4962' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4962')}
				d='M3850 1770c0-11 6-30 13-43 6-12 13-24 14-26 3-6 63 24 63 32 0 6-15 37-28 57-2 2-7-2-12-10-7-12-12-12-22-2-18 18-28 15-28-8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='79'
				fill={counter['79'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '79' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('79')}
				d='M1250 1734c-22-15-51-23-78-23-49-1-54-20-10-35 20-7 32-4 58 14 18 13 46 26 63 29 17 4 32 11 34 17 7 22-33 21-67-2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5065'
				fill={counter['5065'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5065' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5065')}
				d='M3750 4540c0-11 7-20 15-20 9 0 18-7 21-15 4-8 12-15 20-15s14-7 14-15 9-15 20-15c15 0 20 7 20 24 0 14-4 27-9 30s-7 15-4 26c5 18 0 20-46 20-44 0-51-3-51-20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5167'
				fill={counter['5167'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5167' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5167')}
				d='M4243 4005c-7-21 25-55 52-55 13 0 25-7 29-15 3-8 15-15 26-15 38 0 13 55-33 73-9 3-17 11-17 17 0 16-50 12-57-5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5157'
				fill={counter['5157'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5157' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5157')}
				d='M2400 1838c-22-21-26-48-9-65s41-4 34 18c-5 14-1 19 13 19 11 0 23 7 26 16 8 22 9 21-19 26-15 3-32-2-45-14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4842'
				fill={counter['4842'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4842' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4842')}
				d='M1527 3023c-4-3-7-19-7-35 0-23 4-28 26-28 18 0 28-6 31-21 4-12 11-18 20-15 8 3 16 6 18 6s1 10-3 23c-5 23-42 76-42 61 0-4-5-3-12 4-14 14-22 15-31 5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5428'
				fill={counter['5428'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5428' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5428')}
				d='M1773 2735c-13-9-24-11-28-6-7 13-34 3-63-23-18-16-22-28-18-50 4-17 12-33 19-38 9-6 9-10-1-20-14-14-16-98-2-98 5 0 13 18 16 41 6 36 14 45 61 76 65 41 91 87 66 116-20 21-23 21-50 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5444'
				fill={counter['5444'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5444' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5444')}
				d='M1887 3019c-14-8-17-18-11-42 15-71 62-113 78-70 5 12 10 13 18 5 15-15 38-3 49 26 11 30-8 82-31 82-8 0-31 3-50 5-19 3-43 0-53-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4800'
				fill={counter['4800'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4800' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4800')}
				d='M2329 2841c-23-23-29-38-29-70v-41l-25 16c-20 13-23 19-14 31 17 20-8 65-34 61s-67-59-49-65c19-7 15-19-19-52-17-17-28-35-24-41 3-5 3-10-1-10-12 0-33 34-34 54 0 27-39 81-71 100-15 9-43 16-62 16-39 0-110-36-104-53 5-17 27-20 27-4 0 7 15 22 34 32 28 15 38 16 62 6 52-22 104-80 104-116 0-23 41-75 72-91 83-43 148 9 148 118 1 53 23 98 49 98 6 0 11 9 11 20 0 27-6 25-41-9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='171'
				fill={counter['171'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '171' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('171')}
				d='M860 3585c-14-8-37-14-51-15-18 0-28-7-32-20-3-13 0-20 9-20 8 0 14-7 14-15s7-15 15-15 15-7 15-15c0-9 9-15 22-15 12 0 18 3 15 7-12 12 15 33 42 33 15 0 39 6 54 13 21 9 27 19 27 45v32h-52c-29-1-64-7-78-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4981'
				fill={counter['4981'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4981' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4981')}
				d='M3836 2196c8-28 14-33 47-41 19-5 27-3 27 5 0 9 7 7 20-5 19-17 20-17 30 10 18 46 8 54-65 53-61-1-65-3-59-22z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4853'
				fill={counter['4853'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4853' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4853')}
				d='M4050 2463c0-10-3-29-7-42-5-20-3-23 10-18 22 8 23-16 2-33-28-23-7-22 27 2 18 12 35 24 36 25 11 5-12 42-38 61-27 21-30 21-30 5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4887'
				fill={counter['4887'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4887' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4887')}
				d='M3410 1929c0-33 16-37 60-14 27 14 30 14 30 0 0-20 30-19 46 3 26 34 17 40-61 40h-75v-29z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='804'
				fill={counter['804'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '804' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('804')}
				d='M3252 1724c-19-21-31-43-27-52 4-11 8-12 19-3 10 9 15 8 20-4 8-21 36-19 36 3 0 9 3 26 6 37s-1 28-8 38c-13 17-16 15-46-19z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5381'
				fill={counter['5381'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5381' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5381')}
				d='M3573 4599c-6-6-9-17-7-24 3-7-4-15-15-18-15-3-21-13-21-31 0-23 4-26 36-26 28 0 35 3 30 15-6 17 9 21 19 5 13-21 20-1 17 44-4 40-7 46-26 46-12 0-27-5-33-11z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='214'
				fill={counter['214'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '214' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('214')}
				d='M1148 3593c10-4 10-9-3-23-21-23-5-35 48-36 29 0 37 4 37 18 0 19-48 48-77 47-11 0-13-2-5-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4723'
				fill={counter['4723'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4723' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4723')}
				d='M4145 3511c4-19 22-55 41-81 6-8 14-34 17-57 5-43 28-78 42-65 4 4 4-3 1-15-6-17-3-23 8-23 20 0 22 62 3 82-7 7-21 36-31 63-10 28-24 55-31 60-7 6-15 20-19 33-9 27-36 30-31 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='0'
				fill={counter['0'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '0' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('0')}
				d='M931 3162c-6-27-13-61-15-75-1-15-6-30-9-34-13-12-7-33 8-33 19 0 95 46 113 68 18 24 15 32-16 32-26 0-27 2-26 45 2 40-1 45-20 45-18 0-25-9-35-48z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='100'
				fill={counter['100'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '100' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('100')}
				d='M42 4835c-9-20-10-31-2-40 7-8 8-28 4-50-5-29-3-40 15-56 23-21 26-36 12-58-7-10-4-19 7-28 16-12 16-13-1-7-13 5-17 1-17-15 0-12 5-21 10-21 6 0 10-9 10-20s9-25 20-32 20-18 20-25c0-18 41-26 74-13 24 9 28 15 24 41-3 21-1 28 8 25 13-5 29 28 40 84 3 19 11 41 17 49 9 10 4 20-23 43-53 44-58 48-69 48-10 0-71 67-71 79 0 4-6 8-12 9-7 0-22 3-34 7-15 5-23 0-32-20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5152'
				fill={counter['5152'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5152' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5152')}
				d='M1403 3338c-1-28 2-56 6-62 11-14 7-57-8-85-13-23-11-24 39-34 14-3 33-2 43 2 17 6 17 8-2 28l-21 22 23 3c12 2 21 6 20 11-2 4-3 18-3 32 0 22-3 24-30 19-30-6-30-6-30 36 0 33 4 43 20 47 36 9 23 33-17 33h-38l-2-52z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5447'
				fill={counter['5447'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5447' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5447')}
				d='M1367 3253c-8-99-5-124 13-119 8 2 32 7 53 11 40 6 42 25 1 25-23 0-34 23-16 34 17 11 11 73-9 95-11 11-24 21-28 21-5 0-11-30-14-67z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4915'
				fill={counter['4915'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4915' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4915')}
				d='M2480 2848c0-7 7-22 15-32 9-12 15-42 15-74 0-65 24-122 51-122 19 0 19 1 0 38-11 20-25 69-31 107-8 51-16 74-31 83-15 10-19 10-19 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5023'
				fill={counter['5023'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5023' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5023')}
				d='M1311 1746c-14-17-11-19 30-16 18 1 38-10 63-34 20-20 39-36 43-36s17-10 29-21c15-14 29-19 41-15 15 6 10 14-32 52-74 66-152 97-174 70z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='3050'
				fill={counter['3050'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '3050' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('3050')}
				d='M1908 2823c-16-10-28-23-28-29s-13-29-29-51-31-48-35-59c-3-11-31-36-61-55-45-28-56-40-61-69-4-19-11-41-17-48-7-9-4-18 8-32 10-11 14-20 9-20-5-1 4-8 19-16 16-9 31-13 34-11 9 10-8 47-23 47-10 0-14 13-14 50 0 43 3 52 23 60 54 25 83 49 108 95 15 27 32 51 38 53s11 8 11 13c0 16 36 46 64 53 15 4 26 12 23 19-6 19-39 19-69 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4787'
				fill={counter['4787'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4787' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4787')}
				d='M1804 2399c-3-6-3-14 2-18 5-3 14-16 21-28 10-18 9-26-8-47-37-47-122-73-141-43-5 8-13 5-27-7-23-21-24-25-12-44 7-11 17-11 57 2 27 8 61 17 76 20 36 8 88 62 88 91 0 24-30 85-42 85-4 0-10-5-14-11z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5211'
				fill={counter['5211'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5211' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5211')}
				d='M3372 5088c-30-15-28-65 3-60 11 1 32 4 46 6 42 5 50 13 37 41-12 27-45 32-86 13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5111'
				fill={counter['5111'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5111' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5111')}
				d='M1182 2063c-9-3-4-12 15-27 15-11 28-30 28-41s6-19 13-17c6 1 12-5 12-13s10-20 22-26c18-10 24-8 35 7 16 21 17 34 3 34-6 0-15 11-20 25-7 19-17 25-40 25-27 0-35 8-31 33 1 8-17 8-37 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5311'
				fill={counter['5311'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5311' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5311')}
				d='M1587 3483c-13-12-7-33 15-55l21-21 18 22c18 22 18 22 29 1 12-23 40-27 40-5 0 11 7 13 29 9 20-4 30-2 34 10 10 24-37 39-105 33-32-3-58-1-58 4 0 11-14 12-23 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5383'
				fill={counter['5383'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5383' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5383')}
				d='M1747 3163c-11-11-8-51 4-55 8-3 7-8-2-19-8-8-15-19-16-24-1-6-5-19-9-29-6-16-4-18 10-13 10 4 22 7 27 7s9 6 9 14 7 16 14 19c11 4 13 16 10 44-4 28-3 34 5 23 13-19 22-9 14 18-4 16-13 22-32 22-15 0-31-3-34-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5371'
				fill={counter['5371'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5371' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5371')}
				d='M1430 3815c0-39 24-59 58-48 39 14 42 50 5 59-15 3-36 8-45 11-14 3-18-2-18-22z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4948'
				fill={counter['4948'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4948' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4948')}
				d='M3165 3548c4-18 14-48 21-67 8-18 14-44 14-57 0-15 6-24 15-24 19 0 20 55 2 125-11 40-18 51-36 53-21 3-22 1-16-30z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5334'
				fill={counter['5334'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5334' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5334')}
				d='M4073 5649c-13-16-29-129-18-129 13 0 36 30 30 40-3 5-1 10 4 10 6 0 11 7 11 15s5 15 10 15c6 0 10 9 10 20s-6 20-14 20-16 5-18 11c-3 8-7 7-15-2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4908'
				fill={counter['4908'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4908' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4908')}
				d='M2455 2680c-4-6-14-9-23-8-13 2-16-3-14-21 4-39 20-52 47-39 18 8 32 8 55-2 41-17 47-8 24 40-16 34-24 40-51 40-17 0-35-5-38-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4949'
				fill={counter['4949'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4949' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4949')}
				d='M2437 2757c-26-83-24-91 21-83 20 3 43 6 50 6 8 0 12 19 12 60 0 33-4 60-10 60-5 0-10-4-10-10 0-5-7-10-15-10s-15 7-15 15c0 32-17 12-33-38z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5066'
				fill={counter['5066'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5066' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5066')}
				d='M3465 4997c-10-7-25-18-33-25-7-6-22-17-33-22-28-16-23-33 17-52 40-21 54-22 54-7 0 6 12 20 26 31 17 14 24 27 21 40-3 11 0 21 9 25 8 3 14 9 14 14 0 13-51 10-75-4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4810'
				fill={counter['4810'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4810' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4810')}
				d='M2252 2490c-9-16-23-30-29-30-7 0-13-9-13-20s-7-20-15-20-15-4-15-8c0-7 52-42 63-42 3 0 8 22 12 50 4 27 16 61 27 75 17 22 17 25 3 25-9 0-24-13-33-30z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='199'
				fill={counter['199'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '199' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('199')}
				d='M1085 3730c-3-5-13-10-20-10-8 0-28-8-46-19l-31-19 57-27c31-14 58-25 59-23s7 15 13 30c11 24 10 27-10 31-18 4-17 5 6 6 30 1 37 25 11 35-22 8-32 8-39-4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5405'
				fill={counter['5405'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5405' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5405')}
				d='M2597 4074c-3-3-3-12 0-20 6-17-9-18-25-2-15 15-29-17-14-35 5-6 12-21 14-32 3-18 7-16 41 15 36 34 37 36 22 58-16 22-27 27-38 16z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5414'
				fill={counter['5414'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5414' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5414')}
				d='M1863 2182c-18-12-25-55-13-86 9-24 14-27 38-21 15 3 35 14 45 22 16 15 16 18 1 42-16 26-43 51-53 51-3 0-11-4-18-8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='72'
				fill={counter['72'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '72' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('72')}
				d='M490 2874v-40l71-13c65-12 71-12 84 6 8 10 15 26 15 35s6 18 13 21c26 9-2 16-91 23l-92 7v-39z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='102'
				fill={counter['102'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '102' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('102')}
				d='M4920 4524c0-8-10-24-22-36l-21-21 38-15c27-11 40-12 43-4 2 6 9 9 16 6 16-6 43 53 30 65-5 5-26 11-46 14-29 4-38 2-38-9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='175'
				fill={counter['175'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '175' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('175')}
				d='M706 2885c-3-8-15-15-27-15-15 0-19-4-15-16 3-9 6-24 6-35 0-19 54-49 89-49 9 0 29-7 45-15 36-19 33-20 41 15 4 16 11 32 16 35 5 4 9 19 9 35 0 31-6 35-75 45-22 3-50 8-61 11-13 2-24-2-28-11z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4882'
				fill={counter['4882'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4882' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4882')}
				d='M2175 2405c-5-2-49-6-96-10-81-6-88-9-127-44-23-20-42-43-42-51s-9-26-20-40c-23-31-17-72 17-108 13-14 21-32 18-40s-2-20 3-26 17-38 27-71c53-174 65-180 144-75 40 53 98 110 112 110 5 0 9 3 9 8 0 4 40 34 90 67 100 67 106 80 68 138-22 33-167 148-184 146-5 0-13-2-19-4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4890'
				fill={counter['4890'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4890' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4890')}
				d='M2402 2101c-51-26-97-53-102-61-13-20 0-121 17-138 7-7 13-34 13-59v-46l20 26c11 14 20 30 20 36 0 7 22 11 55 11 42 0 55 4 55 15s5 12 26 5c23-9 25-8 19 12-5 21-5 21 8 6 13-16 15-15 34 10 19 26 20 32 8 92-7 36-16 82-19 103-6 33-10 37-34 36-15-1-69-23-120-48z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4897'
				fill={counter['4897'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4897' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4897')}
				d='M4620 2694c-36-7-83-11-105-8-40 5-40 5-42-30-2-36-1-36 40-38 23 0 50-1 60 0 9 1 17-3 17-8 0-18 29-10 44 11 11 17 21 20 42 15 25-7 26-5 20 20-5 19-2 30 11 40 17 13 17 13-2 12-11 0-49-6-85-14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4899'
				fill={counter['4899'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4899' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4899')}
				d='M5683 2973c-13-2-23-8-23-13s-7-7-15-4c-21 8-27-15-17-61 6-30 13-41 30-43 13-2 22 2 22 9 0 10 3 10 12 1 7-7 25-12 41-12 24 0 28 3 24 19-3 12 0 18 7 15 17-6 32 8 44 43 10 31 10 31-26 36-21 3-46 7-57 10-11 2-30 3-42 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='49'
				fill={counter['49'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '49' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('49')}
				d='M4923 4774c-22-11-33-24-33-38 0-11-7-30-15-40-19-25-19-55-1-62 8-3 12-12 9-20-8-21 42-41 62-24 8 7 15 20 15 29s7 27 16 39c15 21 14 23-15 40-36 19-37 45-3 50 15 2 22 9 20 19-4 23-18 25-55 7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4902'
				fill={counter['4902'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4902' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4902')}
				d='M2416 3436c9-30 30-44 60-38 19 3 24 10 22 26-2 17-12 22-46 27-39 5-42 4-36-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5099'
				fill={counter['5099'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5099' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5099')}
				d='M2055 4212c-3-8-3-18 1-23 3-5-2-12-10-15-9-3-16-16-15-28 0-27 40-108 56-113 27-9 51 94 38 163-5 29-9 33-35 31-16-1-32-8-35-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='51'
				fill={counter['51'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '51' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('51')}
				d='M3325 447c-49-15-55-20-74-57-29-55-52-112-48-116 2-2 24-1 50 2 39 6 48 11 58 37 7 16 23 41 36 55 41 45 28 94-22 79z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5107'
				fill={counter['5107'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5107' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5107')}
				d='M4953 2793c-24-5-32-23-10-23 6 0 3-7-8-16-11-8-25-12-31-10-7 3-15-2-18-10-9-22-8-23 17-22 33 1 77 19 77 32 0 6 3 21 6 34 4 12 2 21-2 21-5-1-19-4-31-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5109'
				fill={counter['5109'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5109' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5109')}
				d='M5032 2655c-16-34-15-35 7-35 13 0 21-9 26-30 7-32 18-36 61-20 15 6 30 7 33 3 6-9 92-33 116-33 11 0 15 12 15 44 0 42-1 43-37 49-39 6-152 31-189 42-15 5-23 0-32-20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='58'
				fill={counter['58'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '58' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('58')}
				d='M5042 4610c-7-11-17-20-23-20-38 0-45-57-12-98 18-21 24-24 31-13 10 14 58 17 121 6 39-6 56 5 31 20-5 3-7 11-5 18 8 21-11 39-41 39-16 0-39 2-52 5l-23 4 23 18c26 22 24 27-12 36-19 4-28 1-38-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='62'
				fill={counter['62'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '62' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('62')}
				d='M669 2806c-2-3-3-23-1-45 3-32 8-41 23-41 10 0 19-4 19-10 0-5 9-10 20-10 13 0 20 7 20 20s7 20 20 20c22 0 28 29 8 34-17 4-69 22-89 30-8 4-17 4-20 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='625'
				fill={counter['625'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '625' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('625')}
				d='M2061 4281c-19-12-7-39 24-51 39-15 52-12 58 10 4 15 0 20-14 20-11 0-22 7-25 15-7 17-22 19-43 6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='63'
				fill={counter['63'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '63' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('63')}
				d='M642 3193c-9-3-7-12 8-30 11-14 20-33 20-42 0-17 56-45 71-35 15 9 10 44-5 44-9 0-12 7-9 19 8 31-46 60-85 44z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='659'
				fill={counter['659'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '659' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('659')}
				d='M1230 2680c0-6-11-20-25-32s-25-28-25-35c0-18 48-36 77-28 23 5 33 25 13 25-6 0-8 15-4 40 6 36 5 40-15 40-11 0-21-5-21-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='7'
				fill={counter['7'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '7' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('7')}
				d='M847 4403c-15-14-7-55 12-60 23-6 34-29 26-54-7-21 7-32 29-23 17 6 23 54 7 54-5 0-13 15-17 32-8 41-40 69-57 51z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='70'
				fill={counter['70'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '70' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('70')}
				d='M670 3513c-25-12-53-24-62-27-31-9-22-116 9-116 9 0 13 6 9 15-3 9 0 15 9 15 8 0 15-3 15-7 0-5 14-24 30-43 27-32 30-33 30-12 0 32 1 36 9 47 18 24 19 45 3 62-18 18-23 54-8 64 5 4 7 11 5 15-2 5-24-1-49-13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4938'
				fill={counter['4938'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4938' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4938')}
				d='M2275 2108c-2-7-4-20-3-28s0-36 0-62c-2-43-5-48-24-48-13 0-38-9-56-20l-32-20 17-27c10-16 25-36 35-47 16-18 17-18 46 3 17 11 33 21 36 21s13-17 23-37l18-38 3 44c2 27-2 49-11 60-21 23-27 101-10 128 12 19 12 26-2 52-16 32-33 40-40 19z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5136'
				fill={counter['5136'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5136' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5136')}
				d='M5697 3244c-10-20-27-38-37-41-11-3-20-13-21-22 0-10-2-11-6-3-9 23-23 12-23-18 0-36 3-36 55-9l41 22 44-28c25-16 69-39 99-52 63-28 79-21 63 26-7 19-7 31-1 31 5 0 9 7 9 15s-7 15-15 15-15 5-15 11c0 16-60 3-74-17-7-9-18-12-29-8-21 8-21 11-3 46 8 15 11 30 8 33-6 6-70 35-76 35-1 0-10-16-19-36z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5169'
				fill={counter['5169'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5169' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5169')}
				d='M3065 4609c-22-10-39-23-37-29 1-7-10-9-33-4-35 6-35 6-35-29 0-19-6-37-12-40-7-2-10-8-6-12 9-9 83 22 99 42 6 7 22 13 34 13 27 0 42 16 47 49 4 31-8 34-57 10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5246'
				fill={counter['5246'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5246' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5246')}
				d='M1824 2078c-4-7-2-14 6-16 7-3 30-20 50-38 26-23 47-34 68-34 28 0 31 2 23 23-4 12-21 28-37 36s-41 20-56 28c-32 16-45 16-54 1z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5353'
				fill={counter['5353'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5353' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5353')}
				d='M2451 3878c-8-20-10-21-16-5-7 17-39 22-69 11-9-4-16-18-16-35 0-30-2-29 103-43 32-4 37-2 37 15 0 10-5 19-11 19-8 0-8 4 0 14 12 14 5 46-10 46-5 0-14-10-18-22z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5372'
				fill={counter['5372'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5372' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5372')}
				d='M2013 2433c8-48 19-57 61-49 28 5 36 12 36 28 0 14-5 18-16 14-9-3-26 5-42 19-37 34-46 31-39-12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5422'
				fill={counter['5422'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5422' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5422')}
				d='M4913 2159c-26-9-30-42-11-84 16-36 44-32 52 7 3 17 2 34-3 37s-11 16-12 27c-3 18-8 20-26 13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='64'
				fill={counter['64'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '64' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('64')}
				d='M3713 773c-8-3-13-23-13-49 0-36 5-50 28-69 31-27 44-32 36-11-3 8 3 16 15 19 33 8 29 69-5 96-27 21-38 24-61 14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='74'
				fill={counter['74'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '74' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('74')}
				d='M505 3287c-4-9-4-36-1-59 20-151 16-142 59-152 29-7 39 9 10 17-15 4-15 5-2 6 12 1 15 8 12 29-4 21-2 24 6 12 6-8 11-23 11-32 0-25 17-22 23 3 4 16 11 20 26 16 17-4 21 0 21 16 0 27-95 124-104 108-11-17-36-13-36 7 0 9-4 24-10 32-8 12-10 12-15-3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='77'
				fill={counter['77'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '77' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('77')}
				d='M389 2881c-26-9-55-23-64-31-17-14-16-15 6-21 13-4 43-7 66-8 45-1 63 16 63 58 0 25-9 25-71 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='78'
				fill={counter['78'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '78' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('78')}
				d='M139 4199c-33-29-33-31-15-44 12-10 19-26 18-47 0-20 6-38 19-49 10-9 19-25 19-36s3-22 6-26c3-3 8-27 10-54 6-75 8-83 15-83 19 0 15 123-8 240-14 69-26 126-27 127-1 2-18-11-37-28z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='86'
				fill={counter['86'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '86' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('86')}
				d='M222 4424c-19-13-22-24-22-83v-68l54-53c51-50 54-56 58-112 2-33 9-63 15-66 6-4 14-25 18-47 11-66 26-105 40-105 7 0 25 26 40 58 14 31 43 74 62 94 35 35 35 38 29 95-12 109-18 133-30 133-7 0-34 19-60 41-28 25-58 42-76 44-36 3-54 17-70 55-14 34-26 37-58 14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='87'
				fill={counter['87'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '87' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('87')}
				d='M435 2835c-5-2-40-6-77-10l-68-7v-39c0-28 4-39 15-39 8 0 15-7 15-15 0-21 37-19 49 3 9 15 10 15 11 1 0-9 7-20 16-23 23-9 24-8 24 14 0 15 7 20 24 20 27 0 38 21 31 58-7 38-15 46-40 37z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='9'
				fill={counter['9'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '9' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('9')}
				d='M270 3495c0-8-9-15-19-15-22 0-32-20-24-49 6-24 33-29 33-6 0 29 17 14 29-26 12-39 13-40 54-37 40 3 42 4 39 33-2 17-8 34-13 40-5 5-9 17-9 27 0 12-5 15-16 11-10-4-17 1-21 16-6 25-53 30-53 6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='91'
				fill={counter['91'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '91' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('91')}
				d='M1175 4483c-28-31-40-50-32-55 6-3 12-19 14-35 2-15 6-34 8-40 6-18 42-16 52 1 5 9 27 16 55 17 43 2 47 5 51 33 2 17 0 34-6 38s-8 10-4 14c11 11-54 74-75 74-10 0-38-21-63-47z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='92'
				fill={counter['92'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '92' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('92')}
				d='M468 3353c-32-5-33-11-13-59l15-35 31 18c17 10 34 24 36 31 5 12-24 53-36 51-3-1-18-4-33-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='96'
				fill={counter['96'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '96' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('96')}
				d='M5510 4635c-7-8-18-15-25-15-10 0-151-57-164-67-9-6-17-93-9-93 19 0 68 31 63 40-3 5-1 11 4 14 5 4 12 2 16-4 6-10 105 35 157 72 27 18 27 20 12 44-19 28-36 31-54 9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='98'
				fill={counter['98'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '98' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('98')}
				d='M4909 4574c-13-14-23-27-21-30 7-12 0-34-10-34-7 0-26-28-42-61-29-59-29-62-17-124 7-35 10-69 6-75-12-19 15-78 38-84 44-12 52 43 18 128-7 16-9 41-6 55s1 32-4 40c-12 18-2 51 15 51 8 0 14 9 14 20 0 10 6 23 13 27 8 4 17 22 20 38 4 17 9 40 13 53 8 29-7 28-37-4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='1151'
				fill={counter['1151'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '1151' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('1151')}
				d='M6786 4115c-4-14-4-30-1-35 10-16 35-12 35 5 0 11 7 14 24 9 31-7 45 14 21 33-11 7-31 13-46 13-20 0-28-6-33-25z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='116'
				fill={counter['116'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '116' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('116')}
				d='M326 3795c-12-33-7-85 9-85 8 0 15-4 15-8 0-5 9-19 19-31l19-22 31 30c16 16 39 32 50 36 35 11 24 30-32 58-76 37-103 42-111 22z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='104'
				fill={counter['104'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '104' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('104')}
				d='M470 3038c0-7-3-30-7-51-6-36-4-39 17-35 42 6 49 98 9 98-11 0-19-6-19-12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='105'
				fill={counter['105'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '105' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('105')}
				d='M210 2893c-24-3-51-10-58-16-13-10-72-123-72-137 0-3 28-7 62-8 55-2 65 0 80 20 12 16 16 17 12 6-5-15 0-18 30-18 20 0 36 5 36 11 0 15-23 36-46 42-16 4-16 5-1 6 9 0 17 6 17 11 0 6 8 10 19 10 26 0 71 38 71 61 0 17-7 19-52 17-29-1-73-3-98-5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='107'
				fill={counter['107'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '107' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('107')}
				d='M343 3623c-17-6-16-38 1-56 18-17 16-48-4-64-26-20 13-27 49-8 32 16 43 55 16 55-8 0-14 3-13 8 1 4-2 22-6 40-7 31-17 36-43 25z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='11'
				fill={counter['11'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '11' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('11')}
				d='M517 4693c-2-4-7-19-10-33-7-28-66-70-97-70-24 0-89-61-93-87-4-27-30-63-44-63-17 0-16-4 7-50 17-33 26-40 49-40 20 0 47-15 84-45 31-25 60-45 66-45 10 0 19-36 23-100 5-55 32-51 59 9 13 27 31 52 40 54 28 8 12 72-33 129-18 23-32 58-39 94-10 55-10 58 14 78 50 42 61 95 25 121-13 8-23 23-23 32 0 17-20 29-28 16z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='111'
				fill={counter['111'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '111' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('111')}
				d='M415 3220c3-11 2-20-3-20s-7-11-5-24c5-24 34-36 91-36 23 0 24 2 18 42-8 50-18 58-69 58-34 0-38-2-32-20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='118'
				fill={counter['118'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '118' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('118')}
				d='M6050 2415c-19-7-50-18-68-25-21-8-32-18-30-28 4-20 140-91 145-76 2 6 14 9 26 7s31 2 41 10c19 14 19 15-7 39-15 14-27 30-27 35s-10 19-22 30c-21 19-26 20-58 8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='1191'
				fill={counter['1191'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '1191' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('1191')}
				d='M6170 4435c-11-20-10-27 9-53 11-17 21-40 21-52 0-18 3-20 14-11 8 7 12 22 9 34s-5 31-4 41c0 11-8 29-18 42l-18 23-13-24z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='121'
				fill={counter['121'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '121' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('121')}
				d='M6300 2485c-5-14-14-25-20-25-5 0-10-9-10-19 0-44 109 12 110 57 0 7-14 12-35 12-29 0-37-5-45-25z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='122'
				fill={counter['122'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '122' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('122')}
				d='M6729 4588c-8-8-35-29-61-47-37-26-48-42-57-77-6-25-18-47-25-50-12-5-12-11-1-37 9-22 10-35 2-48-12-19 5-42 40-53 26-8 24-33-7-58-21-17-22-21-9-45 8-14 22-28 32-31 22-6 22-6-9-37-30-30-28-59 4-63 13-2 22-10 22-21 0-28 59-23 66 6 4 13 11 20 20 16 14-5 19 11 16 50-2 14 3 17 18 12s20-2 20 14c0 12-8 21-22 24l-23 4 23 2c15 1 22 7 22 22 0 21 3 22 72 15 48-4 75-12 81-21 4-9 17-23 28-33 19-18 19-19-1-40-11-11-22-39-26-62-4-22-11-43-15-46-5-3-7-10-3-15 4-7-16-8-55-3l-61 7v-65c0-64 0-64-35-81-24-11-33-21-29-32 4-8 11-15 17-15 7 0 7-4-1-12-10-10-15-10-21 1-7 11-15 11-41 2-18-6-35-11-36-11-2 0-4 18-4 40 0 41-6 46-52 42-10-1-18 5-18 13 0 20-8 19-54-5-23-11-49-17-65-14-24 5-28 1-47-48-18-43-26-52-43-50-16 3-24-4-32-26-6-18-17-29-27-28-9 0-18-8-20-19s-21-36-42-55c-42-39-61-80-36-80 13 0 13-5 1-47-8-27-15-49-15-49 0-1 29-1 65 0 64 1 65 2 71 31 3 17 16 42 28 57 20 22 28 25 57 19s34-11 37-39c2-18-1-32-7-32s-11-7-11-15c0-9-7-18-15-21s-31-21-52-40c-20-19-43-34-50-34-16 0-17-22-2-37 8-8 7-17-2-31-12-19-10-24 24-53l37-32-36-64c-34-62-35-65-18-84 9-10 23-19 31-19s13-12 13-30c0-23 5-30 19-30s22 11 30 43c8 33 18 46 46 59 19 10 41 15 48 12 8-3 24 3 36 13 22 18 22 20 7 63-9 25-16 48-16 53 0 4 25 7 56 7 57 0 84 14 84 44 0 8-4 18-10 21-5 3-9 16-8 28 0 12-4 35-11 50-6 16-11 29-11 31 0 1 14 1 30-2 36-5 42 19 10 41-22 15-17 27 12 27 13 0 18 7 18 25 0 14 6 32 12 39 11 11 15 6 25-28 7-22 13-56 13-74 0-38 15-47 65-38 24 5 35 12 35 24 0 10 6 27 14 38 11 15 12 35 7 82l-7 62 35 10c20 5 84 17 144 27 77 12 107 21 107 32 0 21 31 40 67 41 17 0 60 7 94 16 35 9 82 14 105 11 23-2 47-2 52 2 14 8-12 82-32 93-9 5-16 20-16 33 0 28-21 53-63 74-15 8-27 18-27 23 0 4-9 17-20 28s-20 31-20 45c0 13-5 35-11 48l-11 24-81-13c-102-17-117-17-121-1-31 111-51 152-126 262-50 74-55 85-60 150l-5 70-50 6c-27 4-64 9-81 13-21 5-36 3-45-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='125'
				fill={counter['125'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '125' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('125')}
				d='M5460 1994c-20-51-13-69 38-96 56-29 61-29 91-1l24 23-29 22c-15 13-35 31-43 40-9 10-21 18-28 18s-13 5-13 10c0 21-31 9-40-16z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='126'
				fill={counter['126'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '126' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('126')}
				d='M470 3896c0-8-17-28-37-45-31-26-43-30-70-25-19 4-33 2-33-3 0-10 42-30 123-60 44-16 63-10 23 8-25 12-44 45-32 57 4 3 19-1 34-10 24-14 28-14 41-1 11 12 12 19 3 32-7 9-16 26-22 39-11 25-30 30-30 8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='128'
				fill={counter['128'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '128' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('128')}
				d='M342 3472c2-4 11-28 21-53 15-37 23-46 38-42 25 7 27 70 2 89-19 14-67 19-61 6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='129'
				fill={counter['129'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '129' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('129')}
				d='M68 4445c3-19 0-25-12-25-15 0-16-8-10-72 4-41 15-86 25-103 11-16 19-40 19-52 0-34 17-36 55-7 40 30 41 40 19 110-20 62-20 63-44 99-11 17-25 40-31 53-16 29-27 28-21-3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='136'
				fill={counter['136'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '136' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('136')}
				d='M648 3902c-28-17-36-36-19-46 4-3 6-17 3-31-5-29-39-31-34-2 2 11-4 17-18 17-13 0-20-7-20-18s-9-27-20-37c-25-22-25-28-2-40 112-60 113-61 123-42 6 9 17 17 24 17 17 0 19 14 6 39-15 28 3 45 48 43 46-2 47 1 25 58-13 33-21 40-43 40-15 0-31 4-36 9-6 6-20 4-37-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='137'
				fill={counter['137'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '137' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('137')}
				d='M832 3470c-30-13-40-40-18-52 9-5 14-14 10-19-7-11 21-46 48-60 12-6 25-6 39 2 18 9 24 8 31-5 11-20 28-21 28-1 0 8-17 31-39 50-21 19-44 49-51 65-14 33-14 33-48 20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='140'
				fill={counter['140'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '140' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('140')}
				d='M57 2703c-8-21-18-56-22-78-3-21-13-52-21-67s-14-36-14-48c0-18 4-20 40-14s44 3 80-30c23-20 52-41 66-46 33-13 84-13 84 0 0 6-17 10-37 10-39 1-73 18-73 38 0 6-8 13-17 15-15 4-15 6 5 12 29 10 28 40-4 82-25 33-25 33-10 94 9 33 16 63 16 65s-18 4-39 4c-36 0-40-3-54-37z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='141'
				fill={counter['141'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '141' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('141')}
				d='M2453 4577c-21-7-33-18-33-28s-4-21-10-24c-21-13-10-50 18-62 72-31 100-39 134-41 30-2 40 3 57 27 12 16 21 41 21 56 0 24-3 27-27 22-33-6-53 1-53 18 0 15-44 46-62 44-7-1-28-7-45-12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='147'
				fill={counter['147'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '147' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('147')}
				d='M1653 5013c-7-3-13-10-13-18 0-7-14-15-32-19-21-4-50-25-82-59-27-28-53-51-58-49-5 1-21-6-36-16-39-27-97-52-120-52-11 0-40-19-64-42-24-24-62-51-85-62-36-16-41-21-32-37 12-24 81-26 99-4s24 19 54-26c25-39 26-43 10-60-16-18-16-19 14-20 18-1 38-2 45-3 6-1 11 7 9 17-2 11 4 17 18 17 13 0 20 7 20 19 0 10 7 21 15 25 11 4 15-1 15-19 0-16 6-25 16-25 9 0 12 5 8 13-5 8-2 7 9-2 22-18 72 1 63 24-3 8 0 12 7 9 8-3 13 5 14 17 3 33 16 41 46 30 20-8 27-7 28 2 2 18 2 18-5 69-6 39-5 47 7 42 8-3 20-16 27-28 10-20 20-24 64-24 28 0 56 3 61 8 20 15 93 21 98 7 2-6 8-9 12-5 7 6-70 123-103 157-8 8-11 24-7 42 6 25 3 30-32 44-66 29-78 32-90 28z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='149'
				fill={counter['149'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '149' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('149')}
				d='M5810 4511c0-10 6-21 14-24 22-9 33-163 13-185-18-20-24-91-13-149 7-36 12-43 32-43s24-5 24-28c0-20 9-35 30-51 38-27 66-24 62 7-3 19 1 22 32 22 20 0 36 5 36 10 0 6 7 10 15 10 14 0 18 9 13 28-3 7-100 4-130-4-14-4-18 1-18 20 0 18-6 26-22 29-20 3-18 5 10 12 19 4 36 14 39 21 2 6 16 15 30 19 19 4 23 9 14 18-6 6-11 24-11 39 0 22-5 28-22 28-67 1-83 25-54 82 14 27 11 68-5 68-5 0-9 17-9 39 0 32-4 40-22 45-41 11-58 7-58-13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='15'
				fill={counter['15'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '15' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('15')}
				d='M320 3031c0-5-10-13-22-17-13-3-30-13-39-20-13-12-18-12-34 0-29 21-55-8-55-61v-43h49c47 0 50 2 56 30 5 21 14 32 31 36 20 5 24 12 24 45 0 21-2 39-5 39s-5-4-5-9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='142'
				fill={counter['142'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '142' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('142')}
				d='M182 4231c-11-6-11-17-3-47 19-74 34-169 37-244 2-41 4-82 4-91 2-24 110-43 110-19 0 6-5 10-11 10-15 0-1 40 24 67 16 18 19 31 14 70-3 26-13 62-21 78-9 17-16 49-16 72 0 53-41 107-77 100-12-2-23 0-23 4 0 11-21 11-38 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='150'
				fill={counter['150'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '150' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('150')}
				d='M5585 4624c-33-25-109-71-170-101-60-30-111-56-112-57-7-6-19-193-14-214 10-35 25-38 39-7 8 16 17 23 27 19 9-4 21 1 29 11 11 15 19 17 52 8 21-5 58-7 81-5 34 3 42 8 45 25 2 17 14 25 52 34 56 14 74 27 55 39-9 5 5 23 46 59l59 52-33 67c-18 36-38 66-43 66s-19 11-31 25l-22 25-60-46z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='152'
				fill={counter['152'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '152' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('152')}
				d='M5688 4883c-10-2-18-9-18-14s-5-9-11-9c-15 0-109-99-109-114 0-6 12-19 28-30 15-10 43-38 62-62 19-23 40-43 47-43 6-1 23-25 37-55 31-65 41-73 65-52 10 9 23 16 30 16 19 0 12 127-11 195-20 57-87 176-98 174-3-1-13-3-22-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='153'
				fill={counter['153'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '153' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('153')}
				d='M4697 4687c-9-23-17-46-17-51s-7-14-14-20c-8-6-18-23-22-38-5-23-3-28 13-28 14 0 24 17 42 68 13 37 28 72 33 78 5 7 3 16-5 22-9 8-16 1-30-31z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='156'
				fill={counter['156'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '156' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('156')}
				d='M796 2679c-5-25 0-38 24-67 17-20 30-42 30-49s7-13 15-13c20 0 19 12-6 44-11 14-18 30-14 36 3 5 3 25-1 45-8 46-39 49-48 4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='157'
				fill={counter['157'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '157' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('157')}
				d='M4680 4105c0-7-5-15-11-17-7-2-7-12 0-32 10-24 9-28-9-33-17-4-20-14-20-54 0-36 4-49 15-49 8 0 19-8 24-19 6-10 22-22 36-25 14-4 25-10 25-15 0-4 28-4 63 1 34 5 77 7 95 4 25-4 32-1 32 12 0 9-4 22-8 29-15 24-115 83-141 83-15 0-32 5-38 11-8 8-15 4-27-12-12-18-16-20-16-7 0 26 11 48 25 48 20 0-5 78-27 83-11 3-18 0-18-8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='161'
				fill={counter['161'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '161' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('161')}
				d='M6151 4037c-14-36-3-117 15-117 8 0 14-6 14-14s7-17 16-20c16-6 16-8 0-24-9-10-16-24-16-30s-13-25-30-42c-19-19-30-41-30-58 0-19-9-35-29-50-16-11-32-33-36-49-3-15-17-42-30-59-26-34-43-84-28-84 6 0 15 11 21 24 9 21 15 23 55 19 42-5 46-3 61 25 14 27 14 32 1 46-25 24-18 29 35 24 48-5 52-3 66 23 8 16 11 29 6 29-4 0-16 6-26 13-16 12-16 14 5 41 22 27 22 29 4 42-10 7-23 15-29 17-7 2-4 13 7 30 29 45 16 137-21 137-17 0-26 61-11 71 11 6 11 11 2 20-10 10-14 6-22-14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='164'
				fill={counter['164'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '164' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('164')}
				d='M4662 4905c-7-14-12-37-12-50 0-14-4-25-10-25-5 0-12-10-15-23-5-19-11-23-36-19-38 6-38-14 1-23 20-4 40-21 61-51 16-24 32-44 34-44 15 0 2 52-17 70l-22 20h22c15 0 22 6 22 20 0 11 4 20 9 20s7 9 4 20-12 20-19 20c-8 0-14 5-14 11 0 7 10 9 25 5 22-6 25-3 25 23 0 20-7 34-19 41-26 14-26 14-39-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='169'
				fill={counter['169'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '169' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('169')}
				d='M4366 5143c-3-16-8-48-11-73-4-25-27-87-51-138s-44-98-44-104c0-5-15-29-32-51-57-71-70-111-47-134 8-8 2-17-25-35-20-12-39-34-43-48-3-14-16-38-28-55-40-53-57-97-61-152-4-52-20-89-57-126-20-20-18-41 8-104 10-23 19-31 29-27 9 3 16 12 16 19 0 20 62 75 85 75 43 0 61 55 30 96-22 29-20 163 3 204 17 32 17 32 82 26 36-4 78-3 94 2l28 8-38 32c-77 65-83 70-89 64-3-3-5 4-5 16 0 11-2 27-5 34-3 8 3 25 15 38 11 13 20 29 20 37 0 7 4 13 10 13 5 0 15 19 21 43s31 70 55 103c40 52 45 63 39 97-4 28-2 39 10 43 11 5 15 22 15 65 0 61-14 80-24 32z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='170'
				fill={counter['170'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '170' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('170')}
				d='M3480 5790c-14-4-38-15-55-24-19-10-55-16-100-16-54-1-82-6-120-25-57-28-102-32-131-10-10 8-29 15-41 15-20 0-23-5-23-43 0-24-4-47-9-52-14-16-71-123-71-134 0-6 19-11 43-11 47 0 64-10 90-52 20-32 23-60 5-36-22 26-57 29-84 5-13-11-24-26-24-31 0-6-12-19-27-28l-26-16 31-16c17-9 41-16 53-16s31-8 41-17c26-23 51-7 58 38l6 34 7-34c4-18 7-51 7-72 0-35 3-39 24-39 14 0 27-4 30-9 3-4 28-11 55-15 27-3 54-13 61-21 17-20 25-19 52 8 13 13 29 22 35 20s14 0 17 5 27 7 52 4l47-5-6 37c-6 35-5 36 21 34 15-2 27 2 27 9 0 6 3 15 8 19 4 4 7 15 7 25s7 19 16 21c14 2 11 9-12 33-16 17-40 38-54 48l-25 18 30-5c19-3 33 1 41 12 10 14 14 14 29 2 9-8 20-22 24-32 6-17 10-17 56 7 28 14 56 25 63 25 6 0 12 7 12 15s9 19 20 25c14 7 20 7 20 0 0-21 61-49 96-43 25 4 35 2 40-11 10-26 31-19 43 14 5 17 17 30 25 30 11 0 13-6 6-30-7-23-5-30 6-30 8 0 14 10 14 23 1 20 2 21 14 5 20-26 33-22 40 13 10 51 8 59-19 59-14 0-25 5-25 11s-7 9-15 5c-16-6-20 4-6 19 4 6 14 31 21 57 11 44 15 47 48 50 19 2 37 8 39 14 6 18-62 26-109 14-31-9-52-9-85 0-23 7-43 15-43 19 0 7-68 42-117 61-17 6-45 9-61 6-16-4-39-3-53 2-39 15-112 21-139 12zM4226 5648c-9-36-7-48 9-48 8 0 15 5 15 10 0 6 12 10 26 10 27 0 27 0 20-61-4-45-12-67-27-80l-21-18 22-36c19-31 22-47 18-116-2-46-8-83-15-87-6-4-14-19-18-33-4-17-19-31-46-43-39-18-56-56-24-56 9 0 15-9 15-25 0-20-5-25-24-25-28 0-32-8-41-83-7-55-6-57 19-67 25-9 26-13 20-47-4-21-13-55-20-77-18-51-18-101 1-116 22-18 18-35-10-50-14-7-25-17-25-22 0-11 56 21 72 40 8 9 8 19-1 35-14 27-5 49 47 114 17 22 32 46 32 51 0 6 20 53 45 104 39 81 47 106 55 193 6 55 15 135 20 179 6 47 6 85 0 95-5 9-8 67-8 128 0 155 1 153-82 153-62 0-68-2-74-22zm124-132c0-39-11-56-35-56-18 0-21 4-17 25 2 14 11 25 18 25 8 0 14 7 14 15s5 15 10 15c6 0 10-11 10-24zM2874 5478c-17-18-34-45-38-60-5-24-3-28 14-28 12 0 24 9 30 24 5 13 13 27 18 30 7 4 15 66 9 66-2 0-16-15-33-32z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='1763'
				fill={counter['1763'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '1763' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('1763')}
				d='M5080 2893c-14-3-70-74-70-87 0-6 22 0 66 20 24 11 31 20 32 44 0 16-2 29-6 29-4-1-14-3-22-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='177'
				fill={counter['177'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '177' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('177')}
				d='M4083 4570c-3-11-12-20-19-20-9 0-14-11-14-31 0-22-9-40-31-60-27-25-30-33-23-61 5-18 8-45 8-60-1-15 5-29 13-32 15-6 28 17 18 33-10 18 14 87 49 140 19 28 37 64 41 81 6 26 4 30-15 30-13 0-24-8-27-20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='178'
				fill={counter['178'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '178' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('178')}
				d='M5740 4480c-30-31-63-62-74-67-13-7-16-16-11-32 8-27 40-27 62-1 21 24 48 27 39 4-3-9-6-18-6-20 0-3-4-2-10 1-5 3-10-3-10-15 0-11 7-23 15-26 11-5 15-21 15-61 0-45 3-54 15-49 9 3 15 0 15-9 0-20 26-19 34 1 3 9 6 27 6 42 0 14 7 33 16 43 14 16 15 33 9 114-5 75-10 95-22 95-9 0-13 6-10 14s-1 17-9 20c-19 7-9 15-74-54zM5800 4120c0-13 7-20 18-20 24 0 32 8 25 26-8 22-43 17-43-6zM5850 4050c0-23 5-30 19-30 13 0 24-13 34-39 9-22 21-42 27-46 5-3 10-15 10-25 0-18 1-18 28-3 16 9 36 14 45 10 24-9 21-37-4-37-14 0-19-5-16-14 4-9-3-16-16-20-20-5-20-6 8-28 20-15 39-21 66-19 20 1 40-2 44-8 3-6-1-11-10-11-23 0-89-29-82-36 4-4 30-6 59-6s47-2 41-5c-7-2-13-13-13-24 0-14-7-19-30-19-32 0-37-9-19-27 15-15 3-33-21-33-13 0-17 5-13 20 6 22-15 28-33 10-8-8-19-8-38 0-38 14-46 13-46-7 0-10 22-42 50-71 30-32 47-58 43-67-3-8 0-15 6-15 7 0 15 8 18 18 4 9 17 31 29 47 12 17 26 43 29 58 4 16 20 38 36 49 20 15 29 31 29 50 0 18 11 38 30 56 17 16 30 36 30 44 0 9 7 21 15 28s15 19 15 27c0 7-7 16-15 19-8 4-15 11-15 16 0 6-7 16-16 23-12 8-16 27-16 65 0 49-2 52-15 35-9-14-12-32-8-57 4-23 3-38-3-38s-17-3-25-6c-10-3-17 3-21 20-3 14-13 26-22 26-18 0-44 24-44 40 0 12-15 10-50-4-9-4-30 7-53 29-48 44-67 45-67 5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='18'
				fill={counter['18'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '18' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('18')}
				d='M1833 1273c-7-2-13-13-13-24 0-13-9-21-28-25-40-8-52-34-58-127s-25-148-66-191c-21-23-28-40-28-71 0-23 4-45 9-51 6-5 6-41 1-89-4-44-7-100-7-125 2-39 5-45 26-48 43-6 71 8 137 71 44 43 65 71 65 87 1 38 21 110 30 110 5 0 9 6 9 14s16 32 35 53 37 51 41 68c3 16 11 36 17 43 11 14 10 17-19 26-14 4-26 0-38-13-10-11-24-17-31-15-7 3-16 1-20-5-3-6-20-11-36-11-25 0-30-5-35-30-8-40-28-39-22 1 4 25 2 30-12 26-15-4-17 6-18 89-1 99 2 106 51 118 33 8 45 31 28 58-11 17-9 22 8 35 32 22 12 42-26 26z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='181'
				fill={counter['181'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '181' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('181')}
				d='M530 3712c0-5 14-15 30-21 17-5 30-15 30-22 0-6 6-9 14-6 17 7 31-8 38-40 8-29-17-50-69-59-36-5-42-10-45-35-3-20 0-29 9-29 7 0 13-7 13-15 0-18 14-19 32-2 7 7 28 21 47 30 27 13 37 14 48 5s19-9 34 0c24 16 47 4 74-37 11-17 25-31 31-31 15 0 51 29 37 30-7 0-13 7-13 15s-6 15-12 15c-7 0-18 11-25 25-10 23-9 25 15 25 15 1 38 7 52 15s44 14 68 15c45 0 47 3 36 57l-6 30-156 7c-145 7-202 14-259 31-14 4-23 3-23-3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='19'
				fill={counter['19'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '19' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('19')}
				d='M510 4109c0-13-15-39-35-59l-34-35 15-53c9-28 19-52 22-52 4 0 5 22 4 50-4 53 13 70 24 25 5-20 11-24 30-19 15 4 24 2 24-5 0-6 7-11 15-11 23 0 18 16-12 40l-28 22 27-16c36-21 54-20 78 4 30 30 26 50-10 50-27 0-30 3-30 31 0 16-4 28-9 25-5-4-11-2-13 4-1 5-18 12-35 16-30 6-33 4-33-17z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='192'
				fill={counter['192'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '192' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('192')}
				d='M1080 4665c-7-8-22-15-33-15s-51-10-88-22c-67-21-68-22-62-52 11-57 22-75 49-82 36-9 76 14 84 46 6 26 15 28 90 19 27-3 35 0 38 14 2 12-3 17-17 17-18 0-19 3-9 30 5 17 7 37 4 45-7 19-40 19-56 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='182'
				fill={counter['182'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '182' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('182')}
				d='M6465 5010c-7-12-103-60-120-60-7 0-18-7-25-14-11-14-78-19-202-16-16 0-28-4-28-10 0-5-6-10-13-10s-29-9-49-20c-31-16-42-18-65-9-25 11-241 15-250 5-2-2 11-28 30-58 19-29 43-76 52-103 17-47 20-62 23-127 2-23 7-28 26-28 27 0 35 15 41 81 3 23 7 44 10 47s27 0 53-7c27-6 56-9 67-5 13 5 16 4 11-5-5-8-3-12 5-10 34 4 48-3 57-30 6-16 20-32 32-36 18-6 21-12 15-33-3-15-8-36-11-47-7-32 9-49 35-36 17 10 21 9 21-4 0-11 6-14 24-9 21 5 26 1 41-45 12-36 22-51 35-51 10 0 20 6 23 13 3 8 26 24 51 36 50 23 62 51 21 51-16 0-25 6-25 15 0 8-8 15-17 15-10 0-23 4-30 8-20 12 9 82 41 99 30 16 29 13 15 49-12 34 5 74 31 74 21 0 54 35 46 48-8 14 14 20 52 15 30-5 56-23 33-23-15 0 21-69 36-70 6 0 15 5 19 11 5 8 10 6 16-6 7-11 17-15 32-11 17 4 24-1 33-24 6-17 18-30 26-30s18-7 21-16c3-8 11-12 16-9 6 4 17 2 24-4 19-16 43-4 50 25 4 14 18 29 31 34 32 12 31 22-5 62-16 18-30 36-30 41 0 15-63 68-115 98-28 16-82 56-121 89-72 62-79 66-89 50zm-45-224c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='189'
				fill={counter['189'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '189' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('189')}
				d='M5930 2342c-20-22-18-74 4-107 19-28 30-25 66 18 23 28 51 13 43-24-4-22-2-29 10-29 8 0 17 10 20 23 3 12 8 32 12 44 6 18 0 25-36 42-23 12-48 21-55 21-6 0-17 7-24 15-15 18-21 18-40-3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='194'
				fill={counter['194'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '194' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('194')}
				d='M590 4565c-10-12-9-15 7-15 26 0 54-87 32-101-22-13-55-11-69 6-38 46-54-14-21-75 11-19 30-54 42-77 13-24 28-43 35-43 6 0 9-10 7-24-4-19 1-26 26-37 17-8 31-18 31-23 0-9 24-5 103 16 59 16 68 38 36 99-31 61-32 85-3 116l26 28-22 17c-25 20-50 24-50 7 0-5-4-8-9-5-5 4-12 0-15-6-4-7-4 2-1 21 4 29 3 33-14 28-14-3-30 8-58 39-40 46-62 54-83 29z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='198'
				fill={counter['198'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '198' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('198')}
				d='M5896 2218c-11-13-44-51-74-86-45-52-55-71-60-110-5-42-34-101-54-110-16-7-7-22 13-22 11 0 50-18 86-40 76-46 143-56 143-21 0 10-8 21-18 23-15 4-17 13-14 42 3 22 10 36 18 36s14 9 14 20-5 20-11 20-8 9-3 23c4 12 8 33 9 47s6 37 9 51c7 25 9 26 44 13 32-10 38-10 46 3 6 11 3 19-8 25-13 7-14 13-6 29 6 11 8 29 5 40-5 15-14 19-43 17-21-1-37 3-40 10-6 19-36 14-56-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='1981'
				fill={counter['1981'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '1981' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('1981')}
				d='M1687 3889c-21-24-16-49 13-67 18-11 22-10 30 10 5 13 9 17 9 11 1-19 41-16 48 3 6 16-15 37-28 28-4-2-9 5-12 16-7 26-38 26-60-1z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='20'
				fill={counter['20'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '20' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('20')}
				d='M3573 533c-19-7-16-30 8-54 21-21 22-60 2-67-8-2-13 6-13 23 0 15-8 41-17 58-10 18-19 34-20 36s-9-4-18-13-23-16-32-16c-18 0-14-30 12-100 10-25 17-57 17-73s6-31 18-37c27-15 33-12 27 10-3 11-1 23 4 26s9-13 9-35c0-23 5-41 10-41 6 0 10 14 10 30 0 17 3 30 8 29 4-1 29-25 56-55 34-37 44-54 33-54-10 0-17 4-17 9 0 13-73 7-78-6-2-7 3-13 12-13 8 0 17-4 20-8 8-13-33-7-46 6-16 16-35 15-42-3-3-8-17-15-33-15-27 1-27 1-7 13 18 10 19 17 12 53-8 39-13 44-70 72-5 2-9-16-9-40l-2-43-7 45c-5 25-12 64-15 88-8 47-25 67-25 29 0-14-7-30-15-37s-15-23-15-35c0-13-7-25-15-29-8-3-15-16-15-30 0-20-5-24-22-23-13 1-36 11-51 21-36 24-56 10-41-31 9-27 23-33 85-37 19-2 41-6 48-10 6-4 18-2 26 4 12 10 15 9 15-4 0-9 5-16 11-16 17 0 48-43 49-67 0-13 5-23 10-23 6 0 16-12 23-28 15-35 25-42 65-42 24 0 32 4 32 18 1 22 23 52 40 52 7 0 29 13 50 30 21 16 41 30 44 30 13 0 76 55 76 66 0 7 7 14 14 17 8 3 18 23 22 44 3 21 17 49 30 63 23 26 23 26 4 40-11 8-20 20-20 26 0 19-26 64-50 86-21 19-22 19-36 2-31-40-34-53-25-94 5-23 5-42 0-46-5-3-9-1-9 5 0 9-33 24-55 26-5 0-16 20-23 45s-19 56-25 70-14 32-17 41-11 14-17 12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='201'
				fill={counter['201'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '201' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('201')}
				d='M2660 5450c0-5-7-10-15-10s-15-4-15-9-8-8-17-7c-13 1-17-5-15-19 8-49 7-60-7-57-18 4-68-16-104-42-22-16-30-18-36-8-11 18-69 7-127-24-25-13-52-24-60-24-7 0-14-6-14-12 0-7-5-42-10-77-7-49-15-70-34-88l-25-23-19 20c-16 17-24 19-46 11-14-6-26-15-26-21 0-5-9-10-19-10-11 0-22-9-26-19-6-19-40-38-59-33-4 2-18-3-30-11-27-18-77-29-141-30-43-2-50-5-53-24-4-29 74-134 94-126 13 5 16 0 18-37 1-20 35-25 42-6 4 11 11 13 31 5 48-18 56-13 50 34-6 41-5 43 31 59 20 10 46 23 57 30s21 14 23 15c2 0-4 15-13 32-15 31-12 38 12 23 15-9 43-74 43-99 0-10 5-25 10-33 9-13 12-13 21 3 6 10 15 14 22 10 16-10 68-4 87 10 12 9 13 9 3-3-7-8-13-20-13-27 0-17 42-17 60 0 11 9 11 8 0-7-12-15-12-20-2-24 8-2 5-13-13-34-29-34-32-53-9-62 27-10 34-7 44 19 11 28 25 32 34 10 3-8 1-15-4-15-6 0-10-7-10-15s-8-15-18-15c-21 0-55-70-41-84 15-17 49-17 49-1 0 11 10 15 33 14 17-1 47 2 65 6 28 7 32 5 32-13 0-15 5-20 16-15 11 4 14 13 9 30-3 15-2 22 4 19 6-4 27 3 48 14s50 20 65 20c31 0 34-13 18-70-9-30-7-37 13-56 25-23 57-17 57 12 0 8 11 25 25 38 28 26 33 41 9 32-12-4-14-1-9 14s2 20-10 20c-14 0-16 7-11 38 3 20 7 44 8 52s7 21 14 28c15 15 10 31-28 91-15 25-28 53-28 62 0 10-4 19-9 21-11 4 5 48 19 48 5 0 10-11 10-25 0-37 79-74 100-47 3 4 15 7 28 8 17 0 22-5 22-23 0-13 5-23 10-23 6 0 10 11 10 24s7 26 15 30c8 3 15 11 15 17 0 18-69 79-89 79-12 0-21 11-27 33-11 38-54 53-54 19 0-18-8-21-66-24-36-1-70 1-75 7-6 6-13 5-18-3-11-19-59-5-57 16 1 11-6 16-18 15-10-1-28 7-39 18-23 21-49 20-78-4-22-19-39-22-39-7 0 6 5 10 11 10 5 0 27 13 47 29s49 32 65 35c22 5 26 11 22 29-6 20 2 27 67 59 95 47 108 51 108 33 0-8 6-15 13-15 6 0 20-18 30-40 14-31 23-39 40-36 14 2 23 11 25 24 2 12 10 22 18 22 16 0 18 12 4 26-6 6 12 7 53 2 34-5 89-11 122-14 33-4 68-12 79-20 18-12 46-9 46 6 0 4-12 11-27 15-16 3-35 12-43 19-8 8-28 16-45 20-16 4-61 16-98 28-54 17-67 24-62 37 4 9 9 28 12 44 5 22 2 27-14 27-21 0-53-29-53-48 0-14-2-15-34-2-17 6-24 14-20 25 4 10 0 15-10 15-9 0-16 5-16 10 0 6-9 10-20 10s-20-4-20-10zm47-62c-3-8-6-5-6 6-1 11 2 17 5 13 3-3 4-12 1-19zm-349-330c-6-18-28-21-28-4 0 9 7 16 16 16s14-5 12-12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='204'
				fill={counter['204'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '204' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('204')}
				d='M4923 3993c-48-24-45-62 6-102 21-17 44-31 51-31 17 0 70 33 70 43 0 5-18 26-40 48s-40 44-40 49c0 13-9 12-47-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='206'
				fill={counter['206'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '206' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('206')}
				d='M5224 2108c-4-6 1-17 10-24 26-19 10-38-16-20-16 12-25 12-39 3-26-16-24-34 5-41 26-6 41-44 31-77-7-22 13-26 21-4 8 19 24 9 24-14 0-10 7-24 15-31s15-23 15-35c0-13 4-25 9-27 4-1 12-14 16-28 8-25 8-25-14-6-25 23-37 16-21-14 12-22 5-60-11-60-5 0-9 11-9 25s-4 25-10 25c-5 0-10 14-10 30 0 17 5 30 10 30 22 0 9 38-14 44-14 3-28 15-31 26-9 28-29 25-22-2 5-21 5-21-7-5-18 23-25 21-64-14-32-29-33-31-18-55 9-13 23-24 30-24 10 0 12-7 9-21-5-19-3-21 20-17 15 3 24 1 21-3-3-5-12-9-20-9s-14-5-14-11-6-9-14-6c-21 8-36-12-26-38 5-13 6-26 2-29-3-4 4-13 16-22 31-22 27-36-5-18-16 7-31 14-35 14-5 0-8-26-8-57 0-82-8-103-36-103-15 0-24-6-24-16 0-9-10-24-22-34l-23-18-5 36c-4 30-10 38-30 41-14 1-27 6-30 10-3 3-23 21-45 38-30 23-47 30-67 26-40-8-46-20-48-98-3-103-2-115 15-115 11 0 14-13 13-55-1-50-3-55-25-55-14 0-23 6-23 15 0 19-29 19-68-1-19-9-32-23-32-34 0-28 28-51 55-44 25 6 69-12 61-25-3-5-17-6-31-3-18 3-25 0-25-12 0-15-11-20-37-17-7 1-13-5-13-14 0-17-35-21-46-4-3 6-1 22 6 35 11 20 11 27-5 44-10 12-24 19-31 16s-15-2-18 2c-4 3-27 7-51 8-33 2-45-1-45-12 0-7-13-20-30-29l-29-15 33-58c19-31 47-64 62-72 45-26 64-60 89-170 14-58 31-127 39-155 14-49 32-131 42-190 11-65 15-75 30-75 14 0 15-7 10-42-4-26-1-58 8-87 19-60 38-138 44-178 4-28 8-33 33-33s29 4 34 38c6 33 20 71 47 125 6 12 5 23-3 33-17 20-22 18-43-17-10-17-20-28-23-25-3 2-1 11 3 18 5 7 10 24 12 37 2 14 12 37 23 52 23 33 24 39 2 39-16 1-15 3 4 19s20 23 13 57c-5 21-7 41-4 44 10 10 95 3 106-8 9-9 8-12-5-12-28 0-19-20 13-31 23-9 30-17 30-37 0-15 11-48 24-75l23-47-26-19c-25-19-25-20-10-53 11-23 13-45 8-73-8-46-5-53 19-39 27 15 68 5 99-24 30-28 43-29 111-6 23 8 59 14 78 14 45 0 83 20 111 58l22 30-23 21c-32 30-42 74-39 165 3 85 17 120 55 131 26 8 78 63 78 83 0 6 7 12 15 12s15 5 15 11c0 7 10 9 25 7 14-3 25-1 25 3 0 5 11 9 25 9 16 0 25 6 25 15 0 8 4 15 9 15 17 0 56 63 43 68-7 2-15 21-18 43-4 24-15 46-28 54-28 20-34 19-39-8-3-16-6-10-12 22l-8 43-44-5c-36-4-43-2-39 10 3 8 6 18 6 21 0 4 4 1 9-7 8-12 16-13 45-4 33 10 36 9 36-8 0-16 8-19 55-19 34 0 55 4 55 11 0 10 28 8 95-7 16-4 24 5 40 38 11 24 23 45 26 48 10 8 37 120 30 125-14 8-11 63 4 75 8 7 15 25 15 41 0 21 4 27 15 23 13-5 15 1 11 33-3 22-1 55 4 74 9 28 7 37-7 49s-19 34-21 98l-3 82h60c61 0 73 8 47 29-7 6-23 42-35 80-25 79-59 119-136 158-27 14-66 34-85 44-50 27-69 24-76-10-5-22-10-27-25-24-10 3-19 11-19 17 0 8-12 11-35 8-34-4-35-5-35-48 0-44 22-84 46-84 7 0 11-11 10-24-2-19 3-25 23-29 18-4 27-13 28-27 1-11 8-33 16-48 12-24 11-30-2-43-9-7-19-13-23-11-5 1-8-11-8-28 0-34-5-37-27-15-8 8-19 13-24 10-14-9-11-41 6-55 8-7 15-20 15-30 0-11 10-20 30-23 22-5 30-12 30-28 0-15-5-19-15-15-19 7-19-2 0-46 10-26 11-38 3-46-9-9-8-18 0-37 20-43 16-55-13-42-14 7-25 17-25 23 0 20-30 24-50 7-24-20-26-58-5-67 24-9 17-43-15-76l-31-31 46-51c33-37 43-54 35-63-8-10-20-9-55 3-50 16-59 40-28 74 15 17 15 18-5 18-13 0-22-6-22-15 0-8-7-15-16-15-10 0-14-6-10-15 9-25-4-45-30-45-15 0-24 6-24 16 0 11-8 15-27 12-25-3-28 1-31 30-4 34-18 43-25 15-3-10-5-4-6 14-1 37-16 44-100 48-35 2-71 11-94 24-25 14-55 21-89 21-51 0-117-17-129-33-7-9-29 45-29 69 0 8 7 14 15 14 12 0 15 13 15 59 0 50 4 62 21 75 13 9 19 21 16 30-4 10-1 16 7 16s16-6 18-12c3-7 13-13 23-13s20-6 22-12c3-7-2-13-11-13s-16-7-16-15-7-15-15-15c-21 0-19-24 4-44 19-17 20-17 32 3 10 16 16 17 27 8 17-14 36 11 41 56 1 7 5 5 12-5 8-14 13-15 28-6 11 7 17 18 13 27-4 11-1 13 12 8 10-4 20-7 22-7s4-7 4-15c0-28 30-16 37 15 3 17 10 33 14 36 5 3 9 21 9 40 0 31-2 34-30 34-16 0-30-4-30-10s-10-5-26 2c-20 10-30 9-54-5-39-23-40-22-40 23 0 31 3 38 15 34 11-4 15 0 15 16 0 20 4 22 30 17 25-6 30-3 30 14 0 11 6 19 13 18 37-5 48 1 37 20-19 36-13 53 18 47 15-3 48-8 73-12l47-6 5 39c20 141 16 133 63 154 24 12 51 18 61 15s25-1 33 4c12 8 12 11-3 28-21 23-22 42-2 42 24 0 18 14-14 33-47 28-138 115-162 155-12 20-29 43-37 50-20 15-68 16-78 0zm-44-248c-6-11-16-17-22-14-7 5-5 12 7 21 25 18 28 17 15-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='207'
				fill={counter['207'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '207' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('207')}
				d='M5835 2246c-27-12-63-28-79-35-23-9-26-14-16-26 16-20 3-55-21-55-11 0-24-11-31-24-9-22-13-23-25-10-24 23-41 16-68-29-43-74-34-96 47-116 59-14 58-14 58 4 0 8 4 15 8 15 5 0 16 16 25 35s21 35 26 35 20 17 32 38c13 20 39 53 59 72 64 63 90 120 53 120-10-1-40-11-68-24z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='209'
				fill={counter['209'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '209' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('209')}
				d='M6354 2839c-10-11-26-18-36-16-25 7-23-23 3-57 11-14 16-26 10-26s-11-6-11-13c0-8-11-20-25-27-17-9-25-22-25-41 0-32 39-98 58-99 6 0 12-6 12-14 0-29 19-25 53 9 27 27 37 46 41 83 4 26 2 54-3 61-6 10-6 22 0 34 8 14 7 22-6 31-15 11-16 16-5 35 10 19 9 26-6 42-22 24-36 24-60-2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='21'
				fill={counter['21'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '21' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('21')}
				d='M3870 680c0-5-6-7-14-4s-16-3-19-15-13-21-22-21c-27 0-60-21-45-30 6-4 10-15 8-25-3-15-7-14-31 9-15 14-32 26-37 26-15 0-60-23-60-30s88-53 109-56c14-3 58-40 97-83 20-22 24-23 38-8 9 8 16 21 16 27s13 13 29 16c25 5 30 11 34 48 5 50-10 69-52 68-36-1-40 12-11 30 27 17 25 37-6 48-31 12-34 12-34 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='210'
				fill={counter['210'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '210' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('210')}
				d='M1138 3412c-19-2-28-9-28-21 0-9-5-22-12-29-9-9-8-12 5-12 11 0 14-5 10-17-4-11-3-14 5-9 7 4 12 2 12-4 0-7-8-9-19-5-10 3-24-1-31-10-17-20-37-19-49 3-9 15-11 16-26 1-14-14-14-18 5-41 14-19 32-27 61-30 36-3 44 0 64 27 55 74 57 153 3 147z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='211'
				fill={counter['211'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '211' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('211')}
				d='M1013 3754c-4-10-9-11-17-5-15 12-41-3-32-18 4-6 2-11-3-11-6 0-11-9-11-20 0-16 7-20 35-20 32 0 109 32 120 50 3 4-16 14-41 23-39 13-46 13-51 1z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='218'
				fill={counter['218'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '218' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('218')}
				d='M4017 1263c-4-18-20-37-43-52-34-21-39-22-49-7-16 21-25 20-25-4 0-12-5-17-14-14-8 3-19-8-30-29-21-45-21-47 9-47 25 0 30-13 28-67-1-7 7-13 17-13s23-7 30-15c9-11 27-15 54-13 37 3 43 0 57-27 20-38 14-48-23-40-28 7-29 5-23-16 4-13 14-35 22-48 14-22 17-23 28-8 8 11 26 17 50 17h39l-28 29c-33 35-28 55 11 40 18-7 30-6 37 1 5 5 18 10 28 10s21 7 24 15c5 11 10 12 25 2 10-6 19-18 19-26 0-12 3-12 12-3 7 7 15 12 19 12 13 0 17-38 5-50-6-6-12-23-13-38s-5-48-8-74c-7-45-6-47 19-54 14-3 40-1 56 6 39 16 51 10 75-36 11-22 27-47 35-56 14-16 17-15 35 12 11 17 23 30 26 30 4 0 23-18 43-40 38-43 61-44 68-5 6 28-8 46-28 38-8-3-14 0-14 6 0 7-20 11-50 11-47 0-51 2-88 49-30 37-38 57-37 82 1 19-4 43-11 54-8 11-14 27-14 36s-9 24-19 34c-20 17-20 17 1 46 12 15 25 26 30 23 4-3 11 2 14 10 8 20 24 21 24 1 0-8 13-21 29-29 35-19 41-32 34-84-5-38-3-42 21-48 14-3 26-12 26-20s7-14 15-14c16 0 16 4-6 91-11 44-44 87-75 99-24 10-94 120-94 150 0 25-10 50-21 50-5 0-9-21-9-46 0-44-1-46-22-39-13 4-40 9-60 12-25 3-38 10-38 20 0 12-7 14-30 10-16-4-32-2-35 3-9 14-25 12-25-2 0-7-4-20-10-28-14-23-50 15-50 55 0 25-6 35-27 46-16 7-31 15-34 17-4 1-9-10-12-25z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2193'
				fill={counter['2193'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2193' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2193')}
				d='M1883 4494c7-67 12-74 35-48 25 26 24 54-1 82-32 35-40 27-34-34z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='223'
				fill={counter['223'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '223' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('223')}
				d='M60 4513c1-31 27-92 53-126 14-18 31-52 38-75 15-51 31-55 24-7-3 30-1 35 15 35 24 0 26 16 5 36-8 9-15 25-15 36s-8 27-17 34c-15 11-15 13-3 14 8 0-4 9-26 20-23 11-44 26-48 35-8 21-26 19-26-2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2307'
				fill={counter['2307'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2307' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2307')}
				d='M5070 1984c0-10-6-14-15-10-8 3-15 1-15-4 0-6 5-10 10-10 6 0 10-7 10-16 0-10 6-14 14-11 10 4 13 1 10-7s-1-17 5-21c16-10 51 4 51 21 0 8 4 14 10 14 5 0 7 7 3 16-3 9-13 14-23 11-9-2-22 4-29 14-14 23-31 25-31 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2317'
				fill={counter['2317'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2317' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2317')}
				d='M1459 2508c-6-10-9-36-7-56 3-35 5-37 41-40 26-2 39 1 43 12 3 9 15 16 25 16 14 0 19 7 19 29 0 37-15 48-68 54-35 3-45 0-53-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='220'
				fill={counter['220'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '220' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('220')}
				d='M4834 4178c-3-5-3-25 0-44l7-34-38 6c-31 5-43 2-64-18-20-19-24-29-17-48 7-23 13-25 85-28 53-2 83-8 95-19 9-8 25-13 34-9 11 4 30-8 60-39 48-48 51-50 74-35 12 8 10 15-16 42-31 33-94 131-94 146 0 12-44 52-57 52-6 0-13 6-16 14-7 17-45 27-53 14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2468'
				fill={counter['2468'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2468' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2468')}
				d='M833 2338c-25-32-23-49 7-67 17-10 50-37 75-60 26-25 45-36 45-28s-11 22-25 31c-15 10-27 30-31 53-12 64-48 100-71 71z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2491'
				fill={counter['2491'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2491' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2491')}
				d='M4645 3670c-3-5-3-14 0-20 3-5 1-10-4-10-6 0-11-6-11-14 0-9 15-15 45-18 36-2 46 0 51 14 11 35-5 58-41 58-19 0-37-4-40-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='25'
				fill={counter['25'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '25' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('25')}
				d='M163 3380c-3-11-8-20-12-20-10 0-10-169 0-176 5-3 9-15 9-27s10-28 22-36c18-11 22-11 30 3 5 9 20 16 33 16 21 0 23 3 18 43-3 23-17 57-30 75-16 21-26 52-30 87-4 39-10 55-20 55-8 0-17-9-20-20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2518'
				fill={counter['2518'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2518' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2518')}
				d='M4680 3178c0-20 4-21 83-18 60 2 68-4 40-27-17-14-17-14 0-9 10 3 23 6 28 6s9 6 9 14 17 16 46 20c62 8 249 8 241-1-4-4-32-5-62-4-34 1-55-2-55-8s-8-12-17-12c-23-2 91-17 141-18 34-1 38 1 33 20-4 15-2 19 9 15 17-7 50 21 39 32-4 4-126 7-271 7-245 0-264-1-264-17z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2536'
				fill={counter['2536'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2536' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2536')}
				d='M5235 1220c-2-4-17-6-32-5-28 1-41-13-42-47-1-14 7-18 38-18 22 0 44-6 51-15 19-23 37-18 54 16 13 26 13 31 0 36-7 3-14 11-14 18 0 14-48 27-55 15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='26'
				fill={counter['26'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '26' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('26')}
				d='M4155 784c-37-50-41-59-25-69 6-3 10-17 10-31 0-19-5-24-25-24-18 0-25 5-25 20 0 11 5 20 10 20 6 0 10 9 10 20s-4 20-10 20c-5 0-10 6-10 13 0 8-9 22-19 31-15 14-20 14-25 4s-7-10-12 0c-8 18-21 15-60-14-22-17-34-35-34-51 0-28 28-75 41-67 5 3 9-8 9-25s13-50 30-74c17-25 30-50 30-57s8-9 21-5c12 4 27 8 33 10 27 6 46 18 46 31 0 8 7 17 15 20 20 8 19 53-2 77-17 18-17 19 2 33 10 8 29 14 42 14 14 0 26 7 29 18 3 9 12 29 19 43 11 20 11 29 3 37-9 9-9 12 0 12 18 0 15 27-4 34-40 15-63 6-99-40z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='27'
				fill={counter['27'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '27' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('27')}
				d='M4616 4318c4-24 10-45 14-48s10-22 14-42c8-45 17-47 34-11 19 43 16 63-13 63-20 0-26 7-35 40-14 53-22 51-14-2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='2794'
				fill={counter['2794'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '2794' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('2794')}
				d='M1625 4278c-25-25-10-52 32-56 38-4 59 18 44 46-15 27-52 32-76 10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='291'
				fill={counter['291'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '291' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('291')}
				d='M3840 2875c-18-21-100-65-122-65-16 0-19-5-14-22 3-13 6-26 6-30 0-3 17 2 38 12 20 10 61 21 90 25l54 7-7 36c-10 56-21 65-45 37z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='3'
				fill={counter['3'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '3' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('3')}
				d='M455 3650c-25-10-55-46-55-64 0-10 10-14 29-14 15 1 33-2 40-6 13-8 31 32 31 70 0 25-11 29-45 14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='31'
				fill={counter['31'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '31' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('31')}
				d='M504 2984c-5-30-3-39 12-48 31-17 81-33 130-41 41-6 45-4 42 11-2 11-16 21-34 25-37 7-70 36-76 64-2 14-12 21-35 23-30 3-32 1-39-34z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='3153'
				fill={counter['3153'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '3153' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('3153')}
				d='M1877 3730c-3-11-2-20 2-20 5 0 19-10 32-21 66-59 139-87 139-55 0 8 6 17 13 19 9 4 9 6-1 6-7 1-23 12-36 26-14 15-38 26-60 29-21 3-46 12-55 20-23 21-28 20-34-4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='3252'
				fill={counter['3252'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '3252' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('3252')}
				d='M4830 3846c0-33 14-40 55-26 31 10 33 13 22 31-8 12-23 19-44 19-28 0-33-4-33-24z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='36'
				fill={counter['36'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '36' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('36')}
				d='M496 2798c8-51 26-68 72-68 29 0 34 3 29 20-4 16 0 20 19 20 18 0 24 5 24 23 0 20-8 25-51 35-28 7-61 12-75 12-23 0-24-2-18-42z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='3628'
				fill={counter['3628'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '3628' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('3628')}
				d='M5093 4145c-3-9-1-27 5-40 7-15 7-25 1-27-13-4 1-68 15-68 21 0 81 65 81 87 0 39-89 81-102 48z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='3712'
				fill={counter['3712'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '3712' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('3712')}
				d='M6348 4043c-10-3-19-19-23-44-5-30-11-39-27-39-11 0-35-7-54-16-29-14-34-21-34-50 0-24 5-34 15-34 8 0 15 4 15 9 0 11 75 51 95 51 8 0 15 5 15 11 0 7 8 19 18 28 26 23 34 70 13 80-9 4-24 6-33 4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='379'
				fill={counter['379'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '379' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('379')}
				d='M990 3681c0-5 17-15 38-22 39-13 80-35 97-53 14-15 72-37 125-46 25-5 72-18 105-30 95-34 172-51 280-59 139-11 271-38 328-67 29-14 66-24 91-24 23 0 47-5 54-12 6-6 15-9 19-5 13 14-15 28-73 37-32 5-77 18-99 29-21 12-51 21-65 22-22 0-22 1-6 8 11 4 15 10 10 14-6 3-16 2-24-4-20-12-80-12-80 1 0 6-17 10-37 10-21 0-55 3-75 6-37 7-38 7-38 53 0 25-5 53-10 61-7 10-8-6-3-49l6-64-26 7c-15 3-50 9-79 11-69 7-90 14-82 27 5 7-1 9-16 5-13-3-48 3-79 13-30 11-68 20-83 20-16 0-31 7-34 15-4 8-17 15-29 15-13 0-27 4-30 10-7 11-55 34-107 50-21 6-40 16-43 21-8 12-35 12-35 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='380'
				fill={counter['380'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '380' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('380')}
				d='M3335 1448c17-6 45-19 63-29 17-10 32-14 32-8 0 13-78 49-105 48-14 0-12-4 10-11zM3111 1410c-8-14-7-97 0-112 5-9 18-20 29-23 11-4 17-11 14-17-4-6 0-14 7-19 11-7 5-17-26-44-22-19-45-34-52-35-6 0-24-18-40-40-27-38-50-52-105-64-40-9-34-26 9-26 20 0 44-6 52-14 16-14 112-46 138-46 7 0 13 7 13 15s6 15 13 15c18 0 70 37 60 43-4 3-33-3-63-14-65-23-103-24-124-4-8 8-34 16-58 16l-43 2 41 6c42 7 70 28 89 64 5 11 30 32 55 45 25 14 50 32 57 41 10 14 12 14 18-1 8-19 35-25 35-8 0 6-4 10-10 10-5 0-10 21-11 48 0 40-2 44-11 26-10-22-10-22-30-2-12 12-17 26-13 39 5 15 2 22-14 26-14 4-21 15-24 42-2 20-5 34-6 31zM2425 1380c-13-15-15-24-8-31 8-8 13-5 18 10 3 12 11 21 16 21s9 5 9 10c0 16-15 12-35-10zM2785 1380c3-5 2-10-3-10-6 0-8-9-5-20 6-23 19-26 26-7 5 12 8-4 13-86 2-41-1-42-48-22-11 4-18 3-18-3s9-14 21-17c17-6 20-12 15-37s-3-29 10-24c9 3 18 6 20 6s4 11 4 24c0 14 5 28 10 31 6 3 8 16 5 28-2 12-7 44-10 71-5 48-18 76-37 76-5 0-6-4-3-10zM3200 1343c0-22 2-25 10-13 13 20 13 40 0 40-5 0-10-12-10-27zM2648 1292c9-9 27-31 39-47 13-17 23-24 23-16 0 24-44 81-62 81-17 0-17-1 0-18zM3350 1235c0-8 5-15 10-15 6 0 10 7 10 15s-4 15-10 15c-5 0-10-7-10-15zM3390 1211c0-12 55-33 76-29 9 1 19 8 21 15 3 8-6 10-30 6-20-3-37-1-41 6-8 13-26 15-26 2zM2747 1103c-3-17 0-34 9-44 24-26 16-49-21-65-19-7-44-14-56-14-22 0-79-30-79-41 0-4 15-3 33 3 17 5 52 14 77 20s50 14 56 19 28 12 49 17c21 4 41 14 43 21 4 13-9 11-55-6-7-3-13 2-13 10 0 9-7 23-16 32-11 11-14 25-10 45 3 17 2 30-3 30s-11-12-14-27zM3425 1115c-11-7-36-16-55-20-26-4-31-3-20 4 13 9 13 11-2 11-10 0-18-6-18-14 0-7-21-21-46-31-25-9-43-20-40-22 6-6 107 22 143 39 12 6 39 12 60 13 53 3 53 3 53 20 0 19-47 19-75 0zM2869 1015c-3-6-10-28-16-50-7-22-21-73-32-114-23-81-17-110 11-55 10 19 13 34 8 34s-6 11-1 28c32 103 42 143 39 154-3 7-7 8-9 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='383'
				fill={counter['383'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '383' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('383')}
				d='M1956 3526c-26-25-55-46-63-46-10 0-12-6-7-22 4-13 11-26 16-29s12-69 15-145 9-146 14-154c8-15 6 166-3 278l-5 63 44 39c25 22 43 44 41 50s-25-9-52-34z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='399'
				fill={counter['399'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '399' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('399')}
				d='M3600 3186c0-9 16-16 48-19 78-9 154-28 204-52 44-21 46-23 30-40s-16-17 3-10c11 4 52 6 92 6 77-2 85 1 150 68 28 29 37 32 67 27 40-8 49-32 45-113-3-57 7-94 24-87 15 5 21 158 7 183-15 28-77 54-113 47-17-3-54-28-83-56-33-31-62-50-76-50-21 0-87 27-150 61-10 5-46 13-80 18-35 5-76 14-91 20-40 15-77 14-77-3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4105'
				fill={counter['4105'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4105' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4105')}
				d='M5910 2955c0-3 7-16 16-30 15-23 16-23 60-8 49 17 55 28 22 37-29 7-98 8-98 1z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4168'
				fill={counter['4168'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4168' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4168')}
				d='M5460 3155c0-8 6-20 13-27 8-6 11-22 9-35-4-19 0-23 19-23 28 1 101 40 107 58 5 16-40 16-56 0-9-9-12-9-12 0 0 7-3 11-7 11-21-3-33 2-33 16 0 8-9 15-20 15s-20-7-20-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='395'
				fill={counter['395'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '395' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('395')}
				d='M1675 4170c-3-5-2-10 3-10 6 0 12-6 15-12 3-10-7-12-39-9-28 2-44-1-44-8 0-6 17-11 39-11 52 0 75-22 102-100 12-36 26-69 31-75 4-5 8-17 8-27s5-18 10-18c10 0 6 32-11 76-4 13-3 26 4 33 8 8 7 11-5 11-13 0-48 54-48 74 0 7 69-24 90-40 20-16 60-27 60-17 0 4-35 25-78 45-49 24-84 48-97 68-21 32-30 36-40 20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4342'
				fill={counter['4342'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4342' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4342')}
				d='M5550 3995c0-16-6-25-15-25s-15-9-15-25c0-22 4-25 35-25 34 0 49 20 25 35-7 4-7 13 0 26 12 22 6 39-16 39-8 0-14-10-14-25z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4427'
				fill={counter['4427'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4427' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4427')}
				d='M6493 4694c-18-8-16-44 2-44 8 0 15-7 15-16 0-11 5-14 18-9 9 4 25 10 35 12 13 4 17 13 15 32-3 22-8 26-38 28-19 1-41 0-47-3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='43'
				fill={counter['43'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '43' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('43')}
				d='M378 2913c-22-3-28-10-28-30 0-19 4-24 16-19 9 3 28 9 42 12 30 8 52 22 52 35 0 9-31 10-82 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4394'
				fill={counter['4394'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4394' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4394')}
				d='M5391 1741c-8-5-16-19-18-31-3-20 0-22 29-17 21 3 39-1 50-11 14-12 20-12 33-2 8 7 15 21 15 31 0 15-7 19-35 19-19 0-35 5-35 10 0 12-20 13-39 1z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4854'
				fill={counter['4854'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4854' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4854')}
				d='M1796 1663c6-71 4-80-15-97-11-11-21-23-21-27 0-15-46-58-73-68-23-9-29-7-44 15-10 14-33 43-50 64-18 20-33 42-33 47 0 14-39 47-47 40-3-4 3-17 15-30s22-28 22-33c0-6 14-23 30-39 17-16 30-34 30-40 0-22 36-45 69-45 36 0 74 33 117 102 20 31 24 51 24 113 0 60-3 75-15 75-13 0-14-12-9-77z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4651'
				fill={counter['4651'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4651' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4651')}
				d='M2124 3783c-4-16-16-44-26-64s-16-43-12-52c5-15 8-15 29 1 12 9 20 23 17 30-2 7 3 28 13 46 18 33 15 66-4 66-6 0-14-12-17-27z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4678'
				fill={counter['4678'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4678' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4678')}
				d='M2067 3633c-14-14-6-40 16-51 60-29 140-62 143-59 11 11-13 36-70 75-63 42-77 48-89 35z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='470'
				fill={counter['470'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '470' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('470')}
				d='M5420 4193c-24-9-50-35-50-50 0-20 70-17 86 5 30 38 11 62-36 45z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4788'
				fill={counter['4788'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4788' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4788')}
				d='M2833 3173c-9-3-10-10-4-22 5-9 9-23 9-31-2-37 4-49 33-59 27-9 30-9 24 8-3 10-11 38-18 61-13 44-22 53-44 43z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4794'
				fill={counter['4794'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4794' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4794')}
				d='M2483 2344c-47-17-61-42-41-74 12-19 9-25-29-61-38-35-41-42-31-64 14-30-1-51-43-60-28-6-42-35-16-35 6 0 53 21 102 45 50 25 100 45 111 45 18 0 23 9 33 57 6 31 11 80 11 110 0 51-1 53-27 52-16 0-47-7-70-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4795'
				fill={counter['4795'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4795' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4795')}
				d='M1848 2312c-36-42-29-72 18-72 20 0 24 5 24 28 0 15-7 35-14 44-12 17-14 17-28 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='48'
				fill={counter['48'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '48' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('48')}
				d='M318 3363c-10-2-18-10-19-16-1-7-2-26-4-43-1-17-8-41-15-54-10-18-10-25-1-28 6-2 9-8 5-13-9-16 5-10 26 11 11 11 20 31 20 45 0 16 6 25 15 25 11 0 15 11 15 40 0 40-4 43-42 33z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4804'
				fill={counter['4804'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4804' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4804')}
				d='M3010 2464c0-8 5-12 10-9 6 3 10 10 10 16 0 5-4 9-10 9-5 0-10-7-10-16zM2933 2408c2-40 15-57 39-50 13 3 18-1 18-17 0-14 6-21 19-21 28 0 36-18 17-39-13-15-14-23-4-51l11-33 24 27c12 15 23 22 23 17 0-6 9-11 20-11 24 0 27 28 4 37-8 3-13 12-10 20 8 21-51 143-70 143-10 0-13-6-10-17 3-10 2-24-3-32-7-11-10-9-16 8-3 11-11 21-16 21s-9 7-9 15-9 15-20 15c-15 0-19-6-17-32z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4818'
				fill={counter['4818'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4818' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4818')}
				d='M4342 3831c-35-43-40-61-18-61 8 0 17-14 21-32 9-41 22-58 45-58 24 0 32 38 14 66-19 28-9 48 20 40 34-8 47 6 28 29-15 18-66 55-75 55-2 0-18-18-35-39z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4819'
				fill={counter['4819'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4819' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4819')}
				d='M1607 2192c-19-44-22-78-7-87 6-3 10-19 10-36 0-16 3-29 8-29 4 0 20-12 36-26 23-22 30-24 37-13 6 10 1 20-16 32-14 10-25 26-25 36 0 9-7 26-15 37-20 27-19 61 4 81 11 9 17 22 14 29-9 25-29 15-46-24z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='482'
				fill={counter['482'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '482' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('482')}
				d='M5395 1470c-8-26 13-45 45-43 14 0 33 1 43 2 26 2 21 36-8 49-40 18-73 15-80-8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4822'
				fill={counter['4822'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4822' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4822')}
				d='M5410 2733c0-30 24-83 37-83 8 0 25 12 38 26s32 24 41 22c11-2 20 4 22 15 2 10-3 17-12 17s-16 5-16 10c0 6-25 10-55 10-45 0-55-3-55-17z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4824'
				fill={counter['4824'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4824' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4824')}
				d='M4392 1957c-12-13-19-26-16-30 4-4 1-13-5-21-16-20-9-30 31-47 18-7 36-17 39-22 4-5 20-6 37-2 29 6 31 9 25 38-11 59-44 107-73 107-9 0-26-10-38-23z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4830'
				fill={counter['4830'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4830' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4830')}
				d='M2326 2133c-4-5-13-8-18-8-18 0-20-19-5-39 18-24 67-15 67 12 0 29-28 51-44 35z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4836'
				fill={counter['4836'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4836' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4836')}
				d='M1677 2213c-4-3-7-21-7-40 0-36 13-41 44-18 10 8 23 12 27 9 16-9 10 24-7 40-16 16-46 21-57 9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4841'
				fill={counter['4841'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4841' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4841')}
				d='M1937 2813c-21-5-57-38-57-52 0-5-6-11-12-14-7-3-22-22-32-43-11-22-29-49-39-61-20-22-20-23 4-32 13-5 28-7 32-4s13 0 20-5 26-12 43-15c31-6 32-5 44 41 6 26 18 62 26 80 18 42 18 72-1 72-8 0-15 5-15 10 0 6 5 10 10 10 6 0 10 5 10 10 0 10-3 11-33 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4845'
				fill={counter['4845'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4845' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4845')}
				d='M4810 2230c0-11-7-20-15-20-9 0-15-10-15-26 0-21 3-24 21-19 14 5 20 3 18-7-3-20 12-48 26-48s85 66 85 79c0 5-11 12-25 15-14 4-34 15-45 26-26 26-50 26-50 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4851'
				fill={counter['4851'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4851' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4851')}
				d='M3203 1466c-28-6-55-14-59-18-4-5-17-8-28-8-21-1-21-1-2-15 11-8 28-15 38-15 13 0 18-8 18-25 0-18 5-25 19-25 17 0 19-5 14-35-4-24 0-43 11-60 12-18 15-36 11-56-5-20-3-29 7-30 108-6 138-3 132 13-3 11 2 18 18 21l23 4-25 9-25 8 25 6c51 12 32 108-25 130-15 6-24 17-23 27 3 39-3 52-34 67-17 9-34 15-37 15-3-1-29-6-58-13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4852'
				fill={counter['4852'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4852' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4852')}
				d='M1040 4081c0-11 4-22 9-25 4-3 11-20 15-38l6-32 35 34c51 50 40 78-32 79-26 1-33-3-33-18z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4856'
				fill={counter['4856'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4856' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4856')}
				d='M2993 2192c-25-13-33-24-33-44 0-16 5-28 10-28 6 0 20-9 32-20 36-33 52-22 23 16-19 25-19 50 0 58 15 5 22 37 8 35-5 0-23-8-40-17z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4859'
				fill={counter['4859'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4859' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4859')}
				d='M2399 2872c-63-29-99-83-99-150 0-32-6-62-16-77-15-23-15-25 0-25 21 0 47 64 45 109-3 43 9 67 50 104 35 31 62 34 85 11 15-14 17-14 22 1 4 9 4 18 1 21-9 9-72 14-88 6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4861'
				fill={counter['4861'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4861' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4861')}
				d='M3113 2483c-22-8-14-23 12-23 14 0 25-6 25-13 0-22 54-86 73-87 21 0 23 46 5 97-11 31-15 33-58 32-25 0-51-3-57-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4868'
				fill={counter['4868'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4868' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4868')}
				d='M5202 2768c-16-16-15-28 3-28 8 0 15-7 15-15s-4-15-9-15-16-13-24-29c-14-27-13-29 13-45 40-23 88-20 115 7 12 12 37 35 55 50 24 20 30 31 22 39s-15 8-24 1c-7-6-26-13-41-17-24-6-30-3-34 14-3 11-12 20-19 20-8 0-17 7-20 15-7 18-35 20-52 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4870'
				fill={counter['4870'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4870' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4870')}
				d='M4826 2274c-10-25-7-33 15-44 20-11 79-5 79 8 0 9-66 52-79 52-5 0-12-7-15-16z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4879'
				fill={counter['4879'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4879' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4879')}
				d='M4430 1987c0-3 13-21 30-42 16-20 33-53 36-73 7-35 7-36 17-12 6 14 11 44 11 68 1 37-2 43-21 47-13 3-34 7-48 10s-25 4-25 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4910'
				fill={counter['4910'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4910' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4910')}
				d='M2328 2508c-10-12-18-26-18-30 0-5-10-3-22 3-18 10-24 8-35-7-17-24-17-30 7-52 13-12 18-25 14-35-8-22 21-21 61 2 23 14 31 27 37 62 13 74-9 102-44 57z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4917'
				fill={counter['4917'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4917' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4917')}
				d='M2910 2024c0-51 15-74 50-74 17 0 30 5 30 10 0 6-3 10-7 10-5 0-17 20-28 45-24 55-45 59-45 9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4920'
				fill={counter['4920'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4920' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4920')}
				d='M4901 2007c-8-15-22-24-44-25-75-5-84-11-91-53-8-51 0-66 24-44 10 9 24 14 29 10 18-10 12-33-9-40-27-9-10-40 27-50 21-5 30-2 43 14 9 13 33 24 59 29 52 9 59 20 31 52l-21 25 24 8c28 9 56 57 33 57-8 0-16 7-20 15-3 8-12 12-21 9-8-3-15-1-15 5 0 20-36 11-49-12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4925'
				fill={counter['4925'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4925' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4925')}
				d='M1655 2213c-16-9-33-21-37-27-12-18-9-62 6-93 8-15 17-36 20-46 6-18 114-72 124-62 4 3-6 16-20 28-15 13-30 35-33 49-4 15-13 29-21 32-13 5-14 24-5 109 1 4 8 7 16 7s15 5 15 10c0 15-31 11-65-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4929'
				fill={counter['4929'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4929' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4929')}
				d='M5360 2702c0-5-11-14-25-20-25-12-54-57-43-68 3-3 24-1 46 5 37 11 39 13 39 51 0 22-4 40-8 40-5 0-9-4-9-8z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4942'
				fill={counter['4942'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4942' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4942')}
				d='M3425 1050c-6-9 0-18 33-55 19-21 14-41-13-59-14-9-24-21-22-27 1-7-4-14-11-16-7-3-13 1-11 8 4 35-2 49-22 49-19 0-21-4-15-32 8-38 20-48 64-48 17 0 32-4 32-10 0-5 20-10 45-10h45l-7 48c-3 26-10 49-15 50-4 2-8 17-8 33 0 22-5 29-20 29s-20 7-20 25c0 20-5 25-24 25-14 0-28-4-31-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4944'
				fill={counter['4944'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4944' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4944')}
				d='M1724 1708c-46-24-75-32-131-36-68-4-73-6-73-27 0-12 7-28 15-35s15-17 15-23c0-5 15-27 33-48 17-21 41-50 53-65 19-25 23-26 54-16 31 11 80 54 80 71 0 4 9 16 20 26 15 13 20 31 20 64 0 59-10 121-20 121-4 0-34-14-66-32z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4946'
				fill={counter['4946'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4946' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4946')}
				d='M2483 3439c4-13 7-28 7-33s15-5 33-1c17 4 44 7 60 6 15-1 27 3 27 8 0 16-35 31-86 38-46 6-47 6-41-18z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4947'
				fill={counter['4947'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4947' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4947')}
				d='M1676 2005c-4-11 2-15 22-15 18 0 43-15 75-44 43-39 59-66 40-66-5 0-9-34-11-75-2-43 1-75 6-75 10 0 28 128 23 170-4 41-96 120-141 120-4 0-10-7-14-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4957'
				fill={counter['4957'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4957' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4957')}
				d='M3917 1813c-13-13-6-58 13-83 22-29 29-25 37 25 5 30 2 41-12 51-21 16-29 17-38 7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4961'
				fill={counter['4961'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4961' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4961')}
				d='M3961 4158c-1-14-7-28-13-31-10-3-10-7-1-19 7-8 10-17 7-21-3-3-1-15 6-26 7-15 20-21 43-21s41-8 60-28l26-28-30-28c-28-27-34-50-13-52 5 0 22-6 37-12 38-16 50-15 43 3-3 10 1 15 14 15 10 0 21-8 24-18 4-10 20-28 36-40 32-24 39-49 15-58-17-7-20-40-4-49 17-11 71 15 112 54 40 38 47 68 20 78-22 8-43 28-43 41s-41 31-70 31c-14-1-43 1-65 4s-46 6-52 6c-7 1-13 9-13 20 0 10-22 41-49 68-28 27-59 69-70 93-17 39-20 42-20 18z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4963'
				fill={counter['4963'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4963' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4963')}
				d='M4356 3669c-9-47-8-53 9-39 12 10 15 10 15-4 0-9 6-16 13-16 6 0 22-3 35-6 12-4 22-2 22 3 0 12-69 93-80 93-4 0-10-14-14-31z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4979'
				fill={counter['4979'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4979' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4979')}
				d='M2267 1803c-2-5-3-21-3-38 1-16-3-33-9-37-6-5-5-8 3-8 16 0 42-24 42-39 0-10 17-15 48-14 7 1 12-11 12-28 0-19 5-29 15-29 22 0 18 68-6 105-10 17-26 45-34 63-11 23-22 32-40 32-13 0-26-3-28-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4982'
				fill={counter['4982'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4982' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4982')}
				d='M4620 2210c-13-8-13-14 4-44 17-31 22-34 50-29 17 3 33 7 35 9 6 5-53 72-64 73-5 0-17-4-25-9z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4983'
				fill={counter['4983'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4983' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4983')}
				d='M1858 4676c-25-30-26-36-15-65 6-17 17-31 24-31s13-7 13-15c0-9 10-15 26-15 22 0 24 3 18 23-3 12-13 29-20 38-18 20-18 29 1 29 18 0 20 41 3 58-16 16-19 15-50-22z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4988'
				fill={counter['4988'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4988' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4988')}
				d='M5178 2492c-77-25-60-75 30-86 57-7 65 2 38 40-8 10-12 29-9 42 6 25 4 26-59 4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4989'
				fill={counter['4989'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4989' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4989')}
				d='M4353 1604c-34-14-41-28-22-40 6-3 8-17 5-30-5-19-2-24 13-24 14 0 21-11 30-44 15-62 56-90 114-81 61 10 69 20 48 58-13 22-24 31-39 29-17-2-21 4-27 38-4 26-12 40-22 40-9 0-13-6-9-15 6-16-10-20-38-9-18 7-22 59-6 69 14 9 12 25-2 24-7 0-28-7-45-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4991'
				fill={counter['4991'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4991' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4991')}
				d='M2843 4151c-18-9-33-21-33-27s16-29 36-52c34-40 66-53 79-32 3 6 2 10-4 10-15 0-34 39-40 81l-6 36-32-16z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4997'
				fill={counter['4997'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4997' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4997')}
				d='M815 3921c-3-5 1-15 8-23 8-7 12-18 10-24-4-11 38-34 62-34 8 0 15 6 15 14s3 22 7 32c5 14 2 16-21 10s-29-3-33 14c-5 20-37 28-48 11z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4998'
				fill={counter['4998'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4998' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4998')}
				d='M2885 4143c-3-8-5-24-5-35 0-17 4-19 25-14 18 5 25 2 25-9 0-8 7-15 16-15 12 0 15 5 9 23-4 12-7 32-7 44 0 17-6 21-29 21-15-1-30-7-34-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='50'
				fill={counter['50'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '50' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('50')}
				d='M5910 2431c0-12 6-21 14-21s18-9 21-21c4-13 12-18 22-15 8 3 21 6 29 6s14 8 14 18 5 23 12 30c9 9 3 12-27 12-22 0-50 3-62 6-19 5-23 2-23-15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5000'
				fill={counter['5000'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5000' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5000')}
				d='M5597 2916c-3-8-22-20-41-27-20-7-36-16-36-20 0-15 30-29 74-35l47-7-3 49c-2 35-7 50-19 52-9 2-19-4-22-12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5019'
				fill={counter['5019'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5019' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5019')}
				d='M2930 4794c0-20 4-33 10-29 5 3 18-3 30-15 21-21 55-27 65-10 3 5-4 28-17 50-19 34-28 40-55 40-31 0-33-2-33-36z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5028'
				fill={counter['5028'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5028' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5028')}
				d='M2560 2650c0-16 76-90 93-90 21 0 23 57 4 84-11 15-17 16-35 7-14-7-23-8-27-1-8 13-35 13-35 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5029'
				fill={counter['5029'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5029' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5029')}
				d='M5242 3468c-14-14-16-48-3-48 5 0 19 8 31 18 23 18 23 18 57-18 18-21 33-45 33-54s5-16 10-16c16 0 12 46-5 60-8 7-15 23-15 36s-7 24-17 27c-36 9-79 7-91-5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5034'
				fill={counter['5034'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5034' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5034')}
				d='M2839 4368c0-7-3-25-5-40-3-16 0-28 5-28s16-3 25-6c12-5 16 0 16 19 0 14 5 29 10 32 16 10-8 35-31 35-11 0-19-6-20-12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5043'
				fill={counter['5043'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5043' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5043')}
				d='M3531 5238c-33-34-40-58-16-58 8 0 15-4 15-10 0-5-7-10-15-10-10 0-15-10-15-30 0-23 4-30 20-30 11 0 20 7 20 15s9 19 21 25c17 9 23 8 35-7 7-10 14-26 14-35 0-17 19-26 21-10 0 4 3 27 5 51 3 24 1 47-5 50-5 3-23 23-39 44l-30 37-31-32z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5085'
				fill={counter['5085'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5085' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5085')}
				d='M2726 2598c-3-7-7-25-10-40-6-27-5-28 34-28 45 0 51 14 24 55-17 27-42 33-48 13z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='4972'
				fill={counter['4972'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '4972' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('4972')}
				d='M4130 4160c-41-35-56-37-65-10-9 29-31 24-47-10-7-16-16-30-20-30-20 0-3-29 42-73 28-27 50-55 50-63 0-16 29-33 56-33 88-1 144-15 144-37 0-8 5-14 10-14 46 0-63 102-132 124-10 3-18 15-18 26s-7 23-15 26c-23 9-18 20 14 34 29 11 45 48 34 77-7 19-15 17-53-17z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5201'
				fill={counter['5201'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5201' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5201')}
				d='M5150 2389c0-12-7-27-16-33-20-15-9-85 15-94 9-3 20-11 24-19 11-18 27-17 27 2 0 18 27 20 32 3 7-19 37-1 48 27 15 40 12 101-6 116-8 7-40 14-70 16-50 3-54 1-54-18z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5202'
				fill={counter['5202'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5202' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5202')}
				d='M2107 1890c-9-24-22-40-32-40-12 0-15-7-13-27 2-22 8-28 28-28 18 0 25 5 25 20 0 25 13 35 48 35s34 9-6 48l-34 33-16-41z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5208'
				fill={counter['5208'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5208' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5208')}
				d='M4997 2892c-10-10-17-26-17-34 0-9-5-18-11-20-9-3-9-9-1-25 15-27 52-21 45 8-4 13 0 19 10 19s13 6 10 19c-3 10 0 22 6 25 17 11 13 26-7 26-11 0-26-8-35-18z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5213'
				fill={counter['5213'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5213' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5213')}
				d='M2270 4175c0-8-7-15-15-15-20 0-20-49 0-77 15-21 17-21 60-6 46 15 56 32 31 52-8 7-12 21-9 31 3 13 0 20-8 21-8 0-24 2-36 5-16 3-23-1-23-11z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5216'
				fill={counter['5216'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5216' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5216')}
				d='M1460 2313c0-5-14-16-32-26-23-13-28-21-19-26 21-14-40-75-75-76-19 0-30-6-32-17-5-27 35-22 77 9 20 15 38 31 39 36 2 4 10 3 17-3 10-8 18-6 32 8 25 26 57 42 85 42 13 0 29 9 36 20 10 16 10 20-1 20-7 0-18-5-25-12-9-9-12-9-12 0 0 19-28 14-51-9-26-26-33-20-20 15 9 21 8 26-4 26-8 0-15-3-15-7zm-4-50c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5219'
				fill={counter['5219'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5219' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5219')}
				d='M5330 3800c0-5-12-13-27-16-16-4-43-18-61-32l-33-25 37-13c42-14 63-7 88 28 18 25 21 68 6 68-5 0-10-4-10-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5113'
				fill={counter['5113'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5113' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5113')}
				d='M2928 1386l-28-35 22-15c31-22 33-21 47 24 20 67 1 78-41 26z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5127'
				fill={counter['5127'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5127' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5127')}
				d='M6176 2575c5-22 3-25-20-25-19 0-29-7-36-26-6-14-10-27-10-30 0-9 140-1 146 7 3 5-2 9-10 9-18 0-22 26-4 32 14 5-41 58-60 58-8 0-10-8-6-25z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5146'
				fill={counter['5146'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5146' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5146')}
				d='M1950 1671c0-11 10-27 23-37 15-11 16-15 5-11-12 4-18 1-18-8 0-8 4-15 9-15s7-9 4-20c-4-14 0-20 10-20 8 0 17-5 19-11 3-8 14-7 35 5 18 9 36 16 40 16 15 0 13-48-2-54-11-4-15-20-14-53v-48l14 30c7 17 16 38 19 49 5 16 10 13 31-18 13-19 27-52 31-73s14-43 23-50c9-6 14-13 11-15-54-40-100-82-100-92 0-8-7-19-16-27-27-22-56-90-51-118 5-24-22-61-45-61-4 0-8-11-8-25s3-25 8-25c4 0 30 29 57 65s52 65 55 65c13 0 160 146 160 158 0 7 5 10 10 7 23-14 8 27-20 55-17 17-28 35-25 40 3 6-3 20-15 32-11 13-16 24-10 26 20 7 10 41-25 82-19 23-35 51-35 62 0 14-5 18-15 14-17-6-21 19-4 30 18 11-44 44-89 47-23 1-44 6-48 10-13 13-24 7-24-12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5158'
				fill={counter['5158'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5158' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5158')}
				d='M2005 1412c-16-10-32-18-33-19-7-3 33-52 43-52 6 0 18 6 28 13 15 12 16 18 8 35-9 16-8 22 6 30 32 19-18 11-52-7z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5187'
				fill={counter['5187'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5187' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5187')}
				d='M1633 4583c-47-5-48-6-32-52 10-28 15-31 54-31s44 3 54 30c12 36 5 61-18 58-9-1-35-3-58-5z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5224'
				fill={counter['5224'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5224' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5224')}
				d='M5336 3213c-3-10-11-26-18-36-11-15-10-20 5-28 9-6 17-17 17-24 0-17 16-20 25-5 4 6 10 8 15 5 11-7 23 13 27 46 2 20-4 31-22 43-31 20-41 20-49-1z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5239'
				fill={counter['5239'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5239' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5239')}
				d='M3735 4125c-5-2-31-6-56-10-40-5-46-9-42-25 3-11 10-20 15-20 6 0 8 6 5 14-4 10 6 16 35 20 22 4 43 5 45 3 2-3-10-18-27-35-20-21-30-40-30-61 0-17 4-31 8-31 12 0 42 34 42 47 0 5 11 15 25 21 28 13 30 20 13 57-11 25-14 27-33 20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5248'
				fill={counter['5248'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5248' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5248')}
				d='M3100 4793c-16-6-30-23-30-35 0-4 11-10 25-14 20-5 24-11 19-26-4-15-2-19 7-14 8 3 22 9 32 12 22 8 22 19-3 44-11 11-20 25-20 30 0 11-7 12-30 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5255'
				fill={counter['5255'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5255' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5255')}
				d='M5640 3140c-19-16-30-29-24-30 6 0 14-13 18-30 4-24 11-30 31-30 17 0 25 6 26 18 0 16 1 16 7-1 10-25 58-47 101-47 33 0 39 4 55 36 9 20 16 37 14 39-28 21-149 75-168 75-14 0-41-13-60-30z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5260'
				fill={counter['5260'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5260' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5260')}
				d='M758 3303c-10-2-18-13-18-23 0-9-6-23-14-29-13-11-12-15 5-32 10-10 26-19 34-19 14 0 37 32 34 47-1 4 1 16 6 27 7 16-8 38-25 35-3-1-13-3-22-6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5270'
				fill={counter['5270'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5270' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5270')}
				d='M4813 2472c-18-3-23-10-23-33 0-27 2-29 41-29 33 0 39 3 31 13-6 7-15 22-19 33-5 12-16 18-30 16z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5276'
				fill={counter['5276'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5276' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5276')}
				d='M1220 2291c-32-9-37-36-10-51 26-14 50-7 50 15 0 8 7 15 15 15s15 7 15 15c0 16-26 18-70 6z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5283'
				fill={counter['5283'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5283' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5283')}
				d='M1564 4118c-12-5-27-27-33-48s-18-41-26-44c-19-7-20-66-2-66 7 0 19 6 27 13 11 9 11 8 0-8-8-11-19-23-25-27-11-8 22-37 41-38 17 0 47 37 39 49-3 6-2 11 3 11s21 9 35 20c24 19 25 22 11 48-7 15-14 35-14 45 0 22-18 57-28 56-4 0-17-5-28-11z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5289'
				fill={counter['5289'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5289' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5289')}
				d='M2701 3106c-30-32-20-63 26-82 19-9 37-13 40-11 2 3-6 30-20 61l-23 56-23-24z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5290'
				fill={counter['5290'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5290' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5290')}
				d='M5568 2543c-10-2-18-11-18-19s-11-19-25-24c-31-12-31-22 0-51 13-13 25-30 25-36 0-7 12-15 28-19 15-3 32-7 38-9s17 1 25 5c18 12 20 153 2 146-7-3-15-1-18 4-6 10-27 11-57 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5294'
				fill={counter['5294'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5294' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5294')}
				d='M4368 2420c-9-17-24-30-33-30-8 0-15-7-15-15 0-9-7-18-15-21-17-7-21-34-5-34 6 0 10-7 10-15s5-15 10-15c9 0 11 6 14 43 1 6 10 14 21 17 23 7 63 100 42 100-6 0-20-14-29-30z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5296'
				fill={counter['5296'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5296' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5296')}
				d='M5028 2813c-9-2-19-16-23-31s-13-35-22-44c-25-28-13-53 30-56 34-3 37-1 37 23 0 15 7 39 16 55 27 44 11 66-38 53z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5300'
				fill={counter['5300'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5300' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5300')}
				d='M5151 2534c-25-42-15-59 26-43 14 5 38 9 54 9s29 3 29 8c-1 16-39 51-62 57-21 5-29 1-47-31z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5304'
				fill={counter['5304'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5304' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5304')}
				d='M5035 2189c-15-23-14-57 0-63 9-3 15 0 15 9 0 20 37 19 48-1 8-14 10-14 22 2 13 14 11 19-13 38-29 23-63 31-72 15z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5319'
				fill={counter['5319'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5319' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5319')}
				d='M4893 2828c-47-15-41-35 12-42 45-7 85-1 85 12-1 31-49 46-97 30z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5321'
				fill={counter['5321'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5321' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5321')}
				d='M4260 1933c1-45 2-47 16-28s15 19 12-5c-4-35 37-42 46-8 15 59-2 88-53 88-18 0-21-6-21-47z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5323'
				fill={counter['5323'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5323' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5323')}
				d='M1982 4128c-45-35-54-58-22-58 11 0 20-7 20-15 0-9 12-18 30-21 17-4 30-10 30-15 0-12 21-11 39 0 11 7 12 13 4 23-5 7-18 37-28 66-11 28-22 52-25 52-4 0-25-14-48-32z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5325'
				fill={counter['5325'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5325' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5325')}
				d='M2180 4049c0-21 28-79 43-90 5-3 9-10 10-15 3-14 39-6 67 14 14 10 33 21 42 25 10 4 15 12 12 21-6 16 24 36 55 36 12 0 18 5 16 13-5 10-64 16-87 7-5-1-14-3-20-4-7-1-12-11-10-24 4-29-11-28-33 2-14 18-26 23-47 21-15-2-28 0-28 5 0 6-4 10-10 10-5 0-10-9-10-21z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5330'
				fill={counter['5330'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5330' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5330')}
				d='M4900 3310c0-12 11-31 25-44s25-28 25-35c0-6 18-11 45-11 36 0 43 3 38 16-3 8-12 13-19 10s-16-1-19 3c-2 5 9 11 26 15 16 3 37 13 45 21 14 13 13 15-3 15-10 0-27-7-37-15-11-8-30-15-41-15-23 0-55 28-55 48 0 7-7 12-15 12s-15-9-15-20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5343'
				fill={counter['5343'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5343' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5343')}
				d='M5962 2528c-16-16-15-38 1-39 33-2 53-9 64-25 8-10 13-13 13-6 0 8 11 12 28 10 21-2 28 2 30 20 2 15-2 22-12 22-9 0-16 5-16 12 0 9-3 9-12 0-17-17-48-15-48 3s-31 20-48 3z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5348'
				fill={counter['5348'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5348' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5348')}
				d='M4952 2343c-6-10-13-32-16-50-7-30-6-32 33-44 23-7 43-10 46-7s6 22 7 42c2 57-49 100-70 59z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5352'
				fill={counter['5352'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5352' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5352')}
				d='M5426 2861c-3-5-22-12-41-15-46-9-44-18 5-34 55-17 74-16 66 4-3 9-6 24-6 35 0 20-15 26-24 10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5360'
				fill={counter['5360'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5360' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5360')}
				d='M5058 2353c-17-4-23-30-19-75 1-10-4-18-13-18s-16-6-16-13c0-9 21-17 54-23l55-10 9 37c8 33 6 40-22 71-19 22-38 34-48 31z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5366'
				fill={counter['5366'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5366' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5366')}
				d='M3150 2799c-14-6-41-14-61-17l-37-7 16-47c14-46 17-48 51-48 40 0 101 32 101 54 0 7-3 28-6 45-7 33-20 37-64 20z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5367'
				fill={counter['5367'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5367' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5367')}
				d='M5467 2860c-17-20-16-22 10-45 16-13 32-25 37-25 4 0 6-9 3-19-3-11 2-29 10-40 15-22 33-28 33-11 0 6 11 27 24 48 27 44 23 54-35 90-45 27-60 28-82 2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5376'
				fill={counter['5376'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5376' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5376')}
				d='M5533 2293c-7-2-13-9-13-14 0-12-38-49-51-49-6 0-9-12-7-27 3-25 7-28 46-31s47 1 78 34c34 38 45 71 21 61-8-3-20 3-28 14-13 19-23 22-46 12z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5377'
				fill={counter['5377'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5377' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5377')}
				d='M2432 4448c-16-16-15-46 3-64 8-9 15-27 15-41 0-19 4-24 16-19 9 3 18 6 20 6 9 0 3 37-8 49-10 11-10 14 0 18 19 7 14 41-7 53-24 13-24 13-39-2z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5378'
				fill={counter['5378'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5378' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5378')}
				d='M2333 3355c-39-18-51-28-47-39 3-9 14-16 23-16s26-7 37-15c18-12 32-12 83-3 70 13 79 32 35 73-33 31-64 31-131 0z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5380'
				fill={counter['5380'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5380' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5380')}
				d='M4253 1483c-9-31-9-171 0-180 3-3 22-2 41 1 32 6 36 11 51 64 16 53 16 59 0 89-10 17-25 33-34 36s-24 8-33 12c-13 5-19 0-25-22z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5386'
				fill={counter['5386'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5386' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5386')}
				d='M1670 4116c0-8 5-18 10-21 25-15 8-27-30-21-46 7-51-4-25-53 14-28 15-29 52-16 21 8 48 11 61 8 27-6 29 9 7 60-20 47-75 78-75 43z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5399'
				fill={counter['5399'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5399' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5399')}
				d='M3885 1980c-25-49-19-73 24-92 45-22 71-23 96-4 20 14 31 56 15 56-6 0-10 6-10 13 0 14-72 57-96 57-7 0-20-13-29-30z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5427'
				fill={counter['5427'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5427' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5427')}
				d='M6033 2568c2-26 8-36 30-45 17-8 27-20 27-33 0-14 7-20 21-20 15 0 19 4 15 16-4 9 3 32 14 51s20 36 20 37c0 8-58 24-92 25-35 1-36 0-35-31z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5431'
				fill={counter['5431'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5431' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5431')}
				d='M1301 4365c-24-29-20-50 11-66 29-14 33-14 49 2 17 17 18 53 3 68-10 10-54 8-63-4z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5433'
				fill={counter['5433'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5433' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5433')}
				d='M1490 2410c0-5-18-13-40-16-22-4-40-8-40-10s5-15 12-29c16-35 68-36 68-1 0 13 7 29 15 36s15 16 15 21-7 9-15 9-15-4-15-10z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5438'
				fill={counter['5438'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5438' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5438')}
				d='M4245 1940c-11-4-26-5-32-3-14 5-37-43-27-58 3-5 20-9 39-9 31 0 35 3 41 35 8 42 6 45-21 35z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5443'
				fill={counter['5443'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5443' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5443')}
				d='M3870 5309c-17-34-29-63-28-64 14-10 68-22 68-14 0 5 9 9 20 9 17 0 20 7 20 43-1 37-25 87-44 87-3 0-19-28-36-61z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5462'
				fill={counter['5462'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5462' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5462')}
				d='M3011 1497c-14-18 60-93 83-84 24 9 19 26-18 63s-48 41-65 21z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5463'
				fill={counter['5463'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5463' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5463')}
				d='M2842 1352c-20-16-22-23-16-60 10-61 36-54 47 12 9 58 1 71-31 48z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='5464'
				fill={counter['5464'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '5464' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('5464')}
				d='M2567 1082c-14-15-13-21 5-59 13-29 27-43 39-43 29 0 34 27 13 66-27 50-38 57-57 36z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
			<path
				id='56'
				fill={counter['56'] > 0 ? ACCENTED_FILL_COLOR : BASE_FILL_COLOR}
				stroke={selected === '56' ? SELECTED_BORDER_COLOR : BASE_BORDER_COLOR}
				strokeWidth={10}
				onClick={() => click('56')}
				d='M267 4673c-3-5-8-28-12-53-4-24-12-52-18-61-13-21-4-44 26-64 32-20 47-13 87 41 19 24 42 44 52 44 31 0 20 17-24 38-24 11-52 29-62 41-19 21-41 27-49 14z'
				transform='matrix(.1 0 0 -.1 0 580)'></path>
		</svg>
	);
};

export default Interactable;
