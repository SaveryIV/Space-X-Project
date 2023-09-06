/* eslint-disable no-useless-catch */
/* eslint-disable max-len */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

// Create an async thunk for fetching missions
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

// Create a mission slice using createSlice
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionIdToJoin = action.payload;
      const missionToJoin = state.missions.find((mission) => mission.mission_id === missionIdToJoin);
      if (missionToJoin) {
        missionToJoin.reserved = true;
      }
    },
    leaveMission: (state, action) => {
      const missionIdToLeave = action.payload;
      const missionToLeave = state.missions.find((mission) => mission.mission_id === missionIdToLeave);
      if (missionToLeave) {
        missionToLeave.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;