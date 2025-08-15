import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    // Simulate async API call
    return new Promise<number>((resolve) =>
      setTimeout(() => resolve(amount), 100)
    );
  }
);

interface CounterState {
  value: number;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
