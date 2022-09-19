import React, { useState } from 'react';

import './App.css';

import { bindCountData, bindEntryData } from './api/firebase';
import Entry from './components/entry';
import InputBtn from './components/inputbtn';
import InputOverlay from './components/inputoverlay';
import ShowHideButton from './components/showhidebtn';
import Background from './svg/background';
import Interactable from './svg/interactable';

export default function App() {
	const [unbound, setBinded] = useState(true);
	const [counter, setCounter] = useState({});
	const [entries, setEntries] = useState({});

	const [selected, setSelected] = useState('');
	const [inputShow, setInputShow] = useState(false);

	if (unbound) {
		bindCountData(setCounter);
		bindEntryData(setEntries);
		setBinded(false);
	}

	const click = (id) => {
		console.log(id);
		if (selected === id) setSelected('');
		else setSelected(id);
	};

	const toggleShow = () => {
		if (selected !== '') setSelected('');
		else setSelected('all');
	};

	const togglePopUp = (popUpShow) => setInputShow(popUpShow);

	return (
		<div className='root'>
			{inputShow && <InputOverlay />}
			<div className='stack'>
				<Interactable click={click} selected={selected} counter={counter} />
				<Background />
			</div>
			<div className={'entryContainer ' + (selected !== '' ? 'nWidth' : 'zWidth')}>
				<Entry
					data={{
						location: 'Hampstead Heath',
						date: '19 - 9 - 2022',
						startTime: '3:00PM',
						endTime: '10:00PM',
						remarks: 'First ever official date!',
					}}
				/>
				<Entry
					data={{
						location: 'Greenwich Park / Blackheath / Some more text',
						date: '19-9-2022',
						startTime: '3:00PM',
						endTime: '10:00PM',
						remarks:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Iaculis nunc sed augue lacus viverra vitae congue eu consequat.',
					}}
				/>
				<Entry data={{ location: 'Hampstead Heath' }} />
				<Entry data={{ location: 'Hampstead Heath' }} />
				<Entry data={{ location: 'Hampstead Heath' }} />
				<Entry data={{ location: 'Hampstead Heath' }} />
				<Entry data={{ location: 'Hampstead Heath' }} />
				<Entry data={{ location: 'Hampstead Heath' }} />
				<Entry data={{ location: 'Hampstead Heath' }} />
				<Entry data={{ location: 'Hampstead Heath' }} />
				<Entry data={{ location: 'Hampstead Heath' }} />
				<Entry data={{ location: 'Hampstead Heath' }} />
			</div>

			<div className='btnStack'>
				<InputBtn click={togglePopUp} />
				<ShowHideButton click={toggleShow} showing={selected !== ''} />
			</div>
		</div>
	);
}
