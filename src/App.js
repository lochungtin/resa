import React, { useState } from 'react';

import './App.css';

import { bindCountData, bindEntryData } from './api/firebase';
import Entry from './components/entry';
import InputBtn from './components/inputbtn';
import InputOverlay from './components/inputoverlay';
import Login from './components/login';
import ShowHideButton from './components/showhidebtn';
import Background from './svg/background';
import Interactable from './svg/interactable';

export default function App() {
	const [loggedIn, setLoggedIn] = useState(false);

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

	const data = Object.entries(entries).filter(([key, entry]) => selected === 'all' || selected === entry.location);

	if (loggedIn)
		return (
			<div className='root'>
				{inputShow && <InputOverlay close={togglePopUp} />}
				<div className='stack'>
					<Interactable click={click} selected={selected} counter={counter} />
					<Background />
				</div>
				<div className={'entryContainer ' + (selected !== '' ? 'nWidth' : 'zWidth')}>
					{data.map(([key, entry], index) => (
						<Entry key={index} data={entry} />
					))}
				</div>
				<div className='btnStack'>
					<InputBtn click={togglePopUp} showing={inputShow} />
					<ShowHideButton click={toggleShow} showing={selected !== ''} />
				</div>
			</div>
		);

	return <Login onComplete={() => setLoggedIn(true)} />;
}
