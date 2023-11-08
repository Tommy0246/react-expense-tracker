import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
    const expenseList = useSelector((store) => store.EXPENSE.expenseList);
    const income = useSelector((store) => store.EXPENSE.income);
    const totalExpensive = expenseList.reduce((acc, currentItem) => {
        return acc + currentItem.price;
    }, 0);
    const totalRemaining = income - totalExpensive;

    return (
        <div>
            <div className="row">
                <div className={`col ${s.label}`}>Total expenses</div>
                <div className={`col ${s.amount}`}>{totalExpensive} €</div>
            </div>
            <div className="row">
                <div className={`col ${s.label}`}>Remaining money</div>
                <div className={`col ${s.amount}`}>{totalRemaining} €</div>
            </div>
        </div>
    );
}
