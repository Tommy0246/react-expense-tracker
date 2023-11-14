import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState: {
        income: 1000,
        expenseList: [],
        countActionPerformed: 0,
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
        removeList: (currentSlice) => {
            currentSlice.expenseList = [];
        },
        incrementCountActionPerformed: (currentSlice, action) => {
            currentSlice.countActionPerformed++;
        },
    },
});

const { addExpense, setIncome, removeList, incrementCountActionPerformed } =
    expenseSlice.actions;

export { addExpense, setIncome, removeList, incrementCountActionPerformed };
