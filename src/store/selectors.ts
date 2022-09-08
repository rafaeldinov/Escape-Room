import { State } from '../types/state';
import { Quest } from '../types/quest';

export const getQuests = (state: State): Quest[] => state.quest.quests;
export const getQuest = (state: State): Quest | undefined => state.quest.quest;
export const getCurrentTab = (state: State): string => state.quest.currentTab;
export const getIsBookingModalOpened = (state: State): boolean => state.quest.isBookingModalOpened;
export const getActiveURL = (state: State): string => state.quest.activeURL;
export const getIsQuestLoading = (state: State): boolean => state.quest.isQuestLoading;
