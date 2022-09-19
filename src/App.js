import './App.css';

import React, { useState } from 'react';
import ShowHideButton from './components/showhidebtn';
import Background from './svg/background';
import Interactable from './svg/interactable';

const counter = { 5437: 1, 4936: 1, 4788: 1, 5289: 1, 4937: 1, 4798: 1, 4948: 1, 5288: 1, 4990: 1, 399: 1, 4991: 1 };

const App = () => {
	const [selected, setSelected] = useState('');

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
};

export default App;
