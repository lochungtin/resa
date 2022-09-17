import './App.css';

import Background from './svg/background';
import Interactable from './svg/interactable';

function App() {
	return (
		<div className='root'>
			<div className='stack'>
				<Interactable />
				<Background />
			</div>
		</div>
	);
}

export default App;
