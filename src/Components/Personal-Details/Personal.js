import React from 'react';
import './Personal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';


const Personal = (props) => {
    console.log(props)
    
    
    return (
        <div className="product">
        <div className = "feature">  
                <h3>{props.user.id}. {props.user.name}</h3>     
                <h5>Email : {props.user.email}</h5>
                <h5>Mobile # : {props.user.mobile}</h5>
                <br/>
                <h4>Yearly Income (in thou.) : {props.user.yearly_income}.00</h4>
                <button onMouseOver ={()=>props.addSalary(props.user)}><FontAwesomeIcon icon={faUser}/>  Add to Total Income</button>   
            </div>
            <div className="image">
                <img src={props.user.img} alt=""/>               
            </div>            
        </div>
    );
   
};

export default Personal;