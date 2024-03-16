import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiStateSlice";
import doctorReducer from "./doctorSlice";

export const store = configureStore({
	reducer: {
		ui: uiReducer,
		doctor: doctorReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
