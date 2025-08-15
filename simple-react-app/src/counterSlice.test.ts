import counterReducer, {
  increment,
  decrement,
  incrementAsync,
} from "./counterSlice";

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    expect(counterReducer({ value: 0, status: "idle" }, increment(5))).toEqual({
      value: 5,
      status: "idle",
    });
  });

  it("should handle decrement", () => {
    expect(counterReducer({ value: 5, status: "idle" }, decrement(2))).toEqual({
      value: 3,
      status: "idle",
    });
  });
});

describe("counter async thunk", () => {
  it("should handle incrementAsync fulfilled", () => {
    const state = { value: 0, status: "idle" as "idle" };
    const action = { type: incrementAsync.fulfilled.type, payload: 7 };
    expect(counterReducer(state, action)).toEqual({
      value: 7,
      status: "succeeded" as "succeeded",
    });
  });

  it("should handle incrementAsync pending", () => {
    const state = { value: 0, status: "idle" as "idle" };
    const action = { type: incrementAsync.pending.type };
    expect(counterReducer(state, action)).toEqual({
      value: 0,
      status: "loading" as "loading",
    });
  });

  it("should handle incrementAsync rejected", () => {
    const state = { value: 0, status: "idle" as "idle" };
    const action = { type: incrementAsync.rejected.type };
    expect(counterReducer(state, action)).toEqual({
      value: 0,
      status: "failed" as "failed",
    });
  });
});
