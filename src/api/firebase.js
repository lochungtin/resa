import { initializeApp } from 'firebase/app';
import { get, getDatabase, onValue, ref, set } from 'firebase/database';

const db = getDatabase(
	initializeApp({
		apiKey: 'AIzaSyBL6gIHTc9NydjKGjJZkTjrmRTQL8Sl6n8',
		authDomain: 'resa-92437.firebaseapp.com',
		databaseURL: 'https://resa-92437-default-rtdb.europe-west1.firebasedatabase.app/',
		projectId: 'resa-92437',
		storageBucket: 'resa-92437.appspot.com',
		messagingSenderId: '522070992525',
		appId: '1:522070992525:web:c75f0f69de2c13b91264c4',
		measurementId: 'G-YF87CR3YTR',
	}),
);

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
