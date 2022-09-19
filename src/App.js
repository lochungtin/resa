import './App.css';

import React, { useState } from 'react';
import ShowHideButton from './components/showhidebtn';
import Background from './svg/background';
import Interactable from './svg/interactable';

const App = () => {
	const [selected, setSelected] = useState('');

	const click = (id) => {
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
				<Interactable click={click} selected={selected} />
				<Background />
			</div>
			<ShowHideButton click={toggleShow} showing={selected !== ''} />
		</div>
	);
};

export default App;
