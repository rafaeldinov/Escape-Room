import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { redirectToRoute } from './action';
import { Quest } from '../types/quest';
import { Order } from '../types/order';
import { APIRoute, AppRoute } from '../const';

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  extra: AxiosInstance
}>(
  'fetchQuestsAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Quest[]>(APIRoute.Quests);
    return data;
  },
);

export const fetchQuestAction = createAsyncThunk<Quest | undefined, string, {
  extra: AxiosInstance
}>(
  'fetchQuestAction',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
      return data;
    }catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const sendOrderAction = createAsyncThunk<Order, Order, {
  extra: AxiosInstance
}>(
  'sendOrderAction',
  async ({name, peopleCount, phone, isLegal}, {extra: api}) => {
    const {data} = await api.post<Order>(APIRoute.Order, {name, peopleCount, phone, isLegal});
    console.log(data);
    return data;
  },
);
