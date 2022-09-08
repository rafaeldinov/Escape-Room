import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestsAction, fetchQuestAction } from './api-action';
import { Quest } from '../types/quest';
import { DEFAULT_GENRE, DEFAULT_MAIN_NAV_LINK } from '../const';

type InitialState = {
  quest?: Quest | undefined;
  isQuestLoading: boolean;
  quests: Quest[];
  currentTab: string;
  isBookingModalOpened: boolean;
  activeURL: string;
}

const initialState: InitialState = {
  quest: undefined,
  isQuestLoading: false,
  quests: [],
  currentTab: DEFAULT_GENRE,
  isBookingModalOpened: false,
  activeURL: DEFAULT_MAIN_NAV_LINK
};

export const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    setIsBookingModalOpened: (state, action) => {
      state.isBookingModalOpened = action.payload;
    },
    setActiveURL: (state, action) => {
      state.activeURL = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.isQuestLoading = true;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.isQuestLoading = false;
        state.quest = action.payload;
      });
  }
});

export const { setCurrentTab, setIsBookingModalOpened, setActiveURL } = questSlice.actions;
