import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';

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
		if (data != null) setState(data);
	});
};

export const bindEntryData = (setState) => {
	onValue(ref(db, 'entryData'), (snapshot) => {
		let data = snapshot.val();
		if (data != null) setState(data);
	});
};
