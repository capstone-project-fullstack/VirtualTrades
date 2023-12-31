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

    addFunds: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        values: {
          ...state.values,
          initial_amount: state.values.initial_amount + action.payload,
          cash: state.values.cash + action.payload,
          current_portfolio_value:
            state.values.current_portfolio_value + action.payload,
        },
      };
    },

    withdrawFunds: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        values: {
          ...state.values,
          initial_amount: state.values.initial_amount - action.payload,
          cash: state.values.cash - action.payload,
          current_portfolio_value:
            state.values.current_portfolio_value - action.payload,
        },
      };
    },

    updateCurrentPortfolioValue: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        values: {
          ...state.values,
          current_portfolio_value: action.payload,
        },
      };
    },
  },
});

export const {
  setInitialValues,
  addFunds,
  withdrawFunds,
  updateCurrentPortfolioValue,
} = fundManagement.actions;
export default fundManagement.reducer;
