import React from 'react';
import './Income.css';

const Income = ({total, totalAmount}) => {
    console.log()
    const salaryTotal = totalAmount.reduce((totals, item)=> totals+item.yearly_income, 0);
    return (
        <div className="income">
            <p>Total Count : {total.length}</p>
            <h5>Total Yearly-income (in thou.) : {salaryTotal}.00</h5>
        </div>
    );
};

export default Income;