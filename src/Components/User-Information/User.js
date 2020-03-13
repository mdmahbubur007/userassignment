import React, {useState} from 'react';
import './User.css';
import Personal from '../Personal-Details/Personal';
import Income from '../Income/Income';


const User = (props) => {
    const Information = [
        {id: 1, name: "Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351885', yearly_income: 832, img:"https://images-na.ssl-images-amazon.com/images/I/314hcoZg2JL._AC_US218_.jpg",},
        {id: 2, name: "Md. Mahmudur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351886', yearly_income: 530, img:"https://images-na.ssl-images-amazon.com/images/I/417bGBOCqBL._AC_US218_.jpg",},
        {id: 3, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351887', yearly_income: 632, img:"https://images-na.ssl-images-amazon.com/images/I/51ILz01lxmL._AC_US218_.jpg",},
        {id: 4, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351888', yearly_income: 932, img:"https://images-na.ssl-images-amazon.com/images/I/417uVGTgAlL._AC_US218_.jpg",},
        {id: 5, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351889', yearly_income: 582, img:"https://images-na.ssl-images-amazon.com/images/I/51fNKzDjiyL._AC_US218_.jpg",},
        {id: 6, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351890', yearly_income: 592, img:"https://images-na.ssl-images-amazon.com/images/I/51mEVhwXGKL._AC_US218_.jpg",},
        {id: 7, name: "Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351891', yearly_income: 522, img:"https://images-na.ssl-images-amazon.com/images/I/418g6Q3eTHL._AC_US218_.jpg",},
        {id: 8, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351885', yearly_income: 232, img:"https://images-na.ssl-images-amazon.com/images/I/518PvURfFsL._AC_US218_.jpg",},
        {id: 9, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351895', yearly_income: 532, img:"https://images-na.ssl-images-amazon.com/images/I/41AerRC5u6L._AC_US218_.jpg",},
        {id: 10, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351896', yearly_income: 131, img:"https://images-na.ssl-images-amazon.com/images/I/51zDiHyaE1L._AC_US218_.jpg",},
        {id: 11, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351897', yearly_income: 322, img:"https://images-na.ssl-images-amazon.com/images/I/51jegGDgy2L._AC_US218_.jpg",},
        {id: 12, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351898', yearly_income: 252, img:"https://images-na.ssl-images-amazon.com/images/I/51JVSEmcsCL._AC_US218_.jpg",},
        {id: 13, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351899', yearly_income: 492, img:"https://images-na.ssl-images-amazon.com/images/I/51sZTRzpQjL._AC_US218_.jpg",},
        {id: 14, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351900', yearly_income: 532, img:"https://images-na.ssl-images-amazon.com/images/I/3167uhg4DPL._AC_US218_.jpg",},
        {id: 15, name:"Md. Mahbubur Rahman", email: 'mdmahbubur007@gmail.com', mobile : '01913351901', yearly_income: 572, img:"https://images-na.ssl-images-amazon.com/images/I/513RoqwKmPL._AC_US218_.jpg",},

    ]
   const [totalSalary, setTotalSalary] = useState([]);
   const addSalary = item =>{
       var isExit = totalSalary.find(ele=> ele.id === item.id)
       if(!isExit){
           const updateTotal = [...totalSalary, item]
           setTotalSalary(updateTotal)
       }
   }
    
    return (
        <div className="Users">
            <div className="personal">
                {
                    Information.map(user=><Personal
                    addSalary = {addSalary}
                        user={user}>    
                        </Personal>)
                }
            </div>
            <div className="income">
                <Income total ={Information} totalAmount ={totalSalary}></Income>
            </div>
        </div>
    );
};

export default User;