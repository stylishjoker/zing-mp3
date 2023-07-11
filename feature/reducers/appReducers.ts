import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import * as actions from '../actions';
import { bannerProps } from '@/types';

export interface CounterState {
	banner: [];
}

const initialState: CounterState = {
	banner: [],
};

export const appSlice = createSlice({
	name: 'appReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			actions.getHomeAtions.fulfilled,
			(state, action: PayloadAction<bannerProps[]>) => {
				state.banner = action.payload.find(
					(item) => item.sectionType === 'banner'
				)?.items!;
			}
		);
	},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
