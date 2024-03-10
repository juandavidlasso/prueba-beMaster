import { store } from "../../../core/store";

export type IRootState = ReturnType<typeof store.getState>;

export type IADispatch = typeof store.dispatch;
