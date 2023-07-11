import * as apis from '../../apis';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { homeActionProps } from '@/types';

export const getHomeAtions = createAsyncThunk<[]>('home/banner', async () => {
	let newData = null;
	const res = await apis.getHome();
	const result: homeActionProps = res.data;
	if (result?.err === 0) {
		newData = result.data.items;
	}
	return newData as [];
});
