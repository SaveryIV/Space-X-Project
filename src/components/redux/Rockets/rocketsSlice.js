/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'Not selected',
  deploy: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    changeRocketsStatus: (state) => {
      if (state.deploy === false) {
        state.status = 'Not selected';
      } else {
        state.status = 'Selected';
      }
    },
    changeRocketsDeploy: (state) => {
      state.deploy = !state.deploy;
    },
  },
});

export const { changeRocketsDeploy, changeRocketsStatus } = rocketsSlice.actions;
export default rocketsSlice.reducer;
