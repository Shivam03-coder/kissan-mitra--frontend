import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  messagemodel: false,
  communityMessage: [],
};

export const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    OpenMessageModel: (state) => {
      state.messagemodel = !state.messagemodel;
    },
    SetCommunityMessagedata: (state, action) => {
      state.communityMessage.push(action.payload);
    },
    ClearCommunityMessagedata: (state) => {
      state.communityMessage = [];
    },
    addMessageToCommunityData: (state, action) => {
      const messages = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.communityMessage.push(...messages);
    },
  },
});

export const {
  OpenMessageModel,
  SetCommunityMessagedata,
  ClearCommunityMessagedata,
  addMessageToCommunityData,
} = communitySlice.actions;
