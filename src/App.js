import React, { useState } from 'react';

import './App.css';

import { bindCountData, bindEntryData } from './api/firebase';
import ShowHideButton from './components/showhidebtn';
import Background from './svg/background';
import Interactable from './svg/interactable';

export default function App() {
	const [unbound, setBinded] = useState(true);
	const [selected, setSelected] = useState('');

	const [counter, setCounter] = useState({});
	const [entries, setEntries] = useState({});

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

	return (
		<div className='root'>
			<div className='stack'>
				<Interactable click={click} selected={selected} counter={counter} />
				<Background />
			</div>
			<ShowHideButton click={toggleShow} showing={selected !== ''} />
		</div>
	);
}
