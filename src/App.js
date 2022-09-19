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
