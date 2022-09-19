import { createSlice } from '@reduxjs/toolkit';

const entryReducer = createSlice({
	name: 'entries',
	initialState: {},
	reducers: {
		load: (state, action) => {
			state = action.payload;
		},
	},
});

export const { load } = entryReducer.actions;
export default entryReducer.reducer;
