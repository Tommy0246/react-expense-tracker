import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState: {
        income: 1000,
        expenseList: [],
    },
    reducers: {
        addExpense: (currentSlice, actions) => {
            currentSlice.expenseList.push({
                name: actions.payload.name,
                price: Number.parseFloat(actions.payload.price),
            });
        },
        setIncome: (currentSlice, actions) => {
            currentSlice.income = Number.parseFloat(actions.payload);
        },
    },
});

const { addExpense, setIncome } = expenseSlice.actions;

export { addExpense, setIncome };
