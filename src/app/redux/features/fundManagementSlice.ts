import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FundManagementState {
  values: {
    initial_amount: number;
    cash: number;
    current_portfolio_value: number;
  };
}

const initialState: FundManagementState = {
  values: {
    initial_amount: 0,
    cash: 0,
    current_portfolio_value: 0,
  },
};

export const fundManagement = createSlice({
  name: 'fundManagement',
  initialState,
  reducers: {
    setInitialValues: (
      state,
      action: PayloadAction<{
        initial_amount: number;
        cash: number;
        current_portfolio_value: number;
      }>
    ) => {
      state.values = action.payload;
    },

    addFund: (state, action: PayloadAction<number>) => {
      state.values.initial_amount += action.payload;
      state.values.cash += action.payload;
      state.values.current_portfolio_value += action.payload;
    },

    withdrawFund: (state, action: PayloadAction<number>) => {
      state.values.initial_amount -= action.payload;
      state.values.cash -= action.payload;
      state.values.current_portfolio_value -= action.payload;
    },
  },
});

export const { setInitialValues, addFund, withdrawFund } =
  fundManagement.actions;
export default fundManagement.reducer;
