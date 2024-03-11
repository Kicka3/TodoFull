import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, AppRootStateType } from "app/store";

export const createAppSyncThunksFn = createAsyncThunk.withTypes<{
  state: AppRootStateType;
  rejectValue: null;
  dispatch: AppDispatch;
}>();
