import './App.css';
import ShowHideButton from './components/showhidebtn';

import Background from './svg/background';
import Interactable from './svg/interactable';

const App = () => {
	return (
		<div className='root'>
			<div className='stack'>
				<Interactable />
				<Background />
			</div>
			<ShowHideButton showing={false} />
		</div>
	);
};

export default App;
