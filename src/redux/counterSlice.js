import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: {},
	reducers: {
		load: (state, action) => {
			state = action.payload;
		},
	},
});

export const { load } = counterSlice.actions;
export default counterSlice.reducer;
