/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'Not selected',
  deploy: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    changeMissionStatus: (state) => {
      if (state.deploy === false) {
        state.status = 'Not selected';
      } else {
        state.status = 'Selected';
      }
    },
    changeMissionDeploy: (state) => {
      state.deploy = !state.deploy;
    },
  },
});

export const { changeMissionStatus, changeMissionDeploy } = missionsSlice.actions;
export default missionsSlice.reducer;
