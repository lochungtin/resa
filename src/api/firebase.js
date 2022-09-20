import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { get, getDatabase, onValue, ref, set } from 'firebase/database';

const app = initializeApp({
	apiKey: 'AIzaSyBL6gIHTc9NydjKGjJZkTjrmRTQL8Sl6n8',
	authDomain: 'resa-92437.firebaseapp.com',
	databaseURL: 'https://resa-92437-default-rtdb.europe-west1.firebasedatabase.app/',
	projectId: 'resa-92437',
	storageBucket: 'resa-92437.appspot.com',
	messagingSenderId: '522070992525',
	appId: '1:522070992525:web:c75f0f69de2c13b91264c4',
	measurementId: 'G-YF87CR3YTR',
});

const auth = getAuth(app);
const db = getDatabase(app);

export const bindCountData = (setState) => {
	onValue(ref(db, 'countData'), (snapshot) => {
		let data = snapshot.val();
		setState(data !== null ? data : {});
	});
};

export const bindEntryData = (setState) => {
	onValue(ref(db, 'entryData'), (snapshot) => {
		let data = snapshot.val();
		setState(data !== null ? data : {});
	});
};

export const addEntry = (entry) => {
	const key = new Date().getTime();
	set(ref(db, `entryData/${key}`), { ...entry, key });

	get(ref(db, `countData/${entry.location}`)).then((snapshot) => {
		let val = 0;
		if (snapshot.val() !== null) val = parseInt(snapshot.val());
		val += 1;

		set(ref(db, `countData/${entry.location}`), val);
	});
};

export const deleteEntry = (entry) => {
	set(ref(db, `entryData/${entry.key}`), null);

	get(ref(db, `countData/${entry.location}`)).then((snapshot) => {
		let val = 0;
		if (snapshot.val() !== null) val = parseInt(snapshot.val());

		if (val === 1) set(ref(db, `countData/${entry.location}`), null);
		else set(ref(db, `countData/${entry.location}`), val - 1);
	});
};

export const loginWPswd = (pswd, onComplete) => {
	signInWithEmailAndPassword(auth, 'default@defau.lt', pswd)
		.then(
			(success) => onComplete(),
			(rej) => console.log(rej),
		)
		.catch((err) => console.log(err));
};
