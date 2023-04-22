import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Dashboard = (props) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/expenses')
        .then((res) => setExpenses(res.data))
        .catch(err => console.log(err))
    },[])
    

    return(
        <>
        <h1> Here are your Expenses</h1>
        <Link to = "/">Add Expense</Link>
        <table className="table table-striped">
                <thead>
                <tr>
                    <th> Name</th>
                    <th>Price</th>
                    <th>Type of</th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((e, index) => {
                    return (
                    <tr key={index}>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>{e.typeOf}</td>
                        <td>
                            <Link to =  {`/edit/${e._id}`}>edit</Link>
                            
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </>

    );
    

};
export default Dashboard;