/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChannels = createAsyncThunk(
  'channels/fetchChannels',
  async (token) => {
    const response = await axios.get('api/v1/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
);

const channelsSlice = createSlice({
  name: 'channels',
  initialState: { channels: [], currentChannelId: 1, loading: 'idle' },
  reducers: {},
  extraReducers: {
    [fetchChannels.fulfilled]: (state, { payload }) => {
      state.channels = payload.channels;
      state.loading = 'fin';
    },
    [fetchChannels.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchChannels.rejected]: (state, { error }) => {
      state.loading = 'fin';
      console.log(error);
    },
  },
});

const { reducer } = channelsSlice;
export default reducer;
