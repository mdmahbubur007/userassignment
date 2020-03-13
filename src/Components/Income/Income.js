import React from 'react';

const Income = ({total}) => {
    console.log()
    const salaryTotal = totalAmount.reduce((totals, item)=> totals+item.yearly_income, 0);
    return (
        <div>
            <p>Total Count : {total.length}</p>
            <h3>Yearly-income total : {salaryTotal}</h3>
        </div>
    );
};

export default Income;