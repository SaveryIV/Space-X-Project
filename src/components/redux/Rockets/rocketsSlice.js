/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  pending: false,
  error: false,
};

export const fetchRockets = createAsyncThunk(
  'rocket/fetchRockets',
  async () => {
    const req = axios.get(URL);
    const { data } = await req;
    const result = data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    }));
    return result;
  },
);

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    handleRocket: (state, { payload }) => {
      const rockets = [];
      state.rockets.forEach((rocket) => {
        if (rocket.id === payload) {
          rockets.push({
            ...rocket,
            reserved: !rocket.reserved,
          });
        } else {
          rockets.push({ ...rocket });
        }
      });
      return {
        ...state,
        rockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, { payload }) => ({
      ...state,
      rockets: payload,
      pending: false,
      error: false,
    }));
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      pending: true,
      error: false,
    }));

    builder.addCase(fetchRockets.rejected, (state) => ({
      ...state,
      pending: false,
      error: true,
    }));
  },
});

export default rocketsSlice.reducer;
export const { handleRocket } = rocketsSlice.actions;
