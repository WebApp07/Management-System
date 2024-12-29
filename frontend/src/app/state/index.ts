import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStatetypes {
  isSidebarCollapsed: boolean;
  isDarkeMode: boolean;
}

const initialState: InitialStatetypes = {
  isSidebarCollapsed: false,
  isDarkeMode: false,
};

const globalSllice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed(state, action: PayloadAction<boolean>) {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkeMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSllice.actions;

export default globalSllice.reducer;
