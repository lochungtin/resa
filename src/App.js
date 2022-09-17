import './App.css';

import Background from './svg/background';
import Interactable from './svg/interactable';

function App() {
	return (
		<div className='App'>
			<div className='stack'>
				<Background />
				<Interactable />
			</div>
		</div>
	);
}

export default App;
