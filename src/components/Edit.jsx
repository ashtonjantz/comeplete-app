import React, {useEffect, useState} from 'react';
import {useNavigate, Link, useParams} from 'react-router-dom';
import axios from 'axios';


const Edit = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [typeOf, setTypeOf] = useState("");
    const [expenses, setExpenses] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/expenses/' + id)
        .then( res => {
            setName(res.data.name);
            setPrice(res.data.price);
            setTypeOf(res.data.typeOf);
            setExpenses(res.data);
        })
        .catch((err) => console.log(err))
    },[])

    const updateExp = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/expenses/' + id,{
            name, price, typeOf
        })
        .then(res => {
            console.log(res);
            navigate('/dashboard');
        })
        .catch((err) => console.log(err))
    }

    const deleteExp  =  (expId) => {
        navigate('/dashboard');
        axios.delete('http://localhost:8000/api/expenses/' + expId)
        .then(()=> console.log('Deleted from backend'))

        .catch((err) => console.log('something went wrong',err))
    } 
        


    return(

        <>
        <form onSubmit={updateExp}>
            <Link to = '/dashboard'>Back to Dashboard</Link>
          <div>
            <label htmlFor="name">Name</label>
            <input className="form-control"   type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value ={name}/>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input className="form-control"   type="number" name="price" id="price"  onChange={(e) => setPrice(e.target.value)} value ={price} />
          </div>
          <div>
            {/* dropdown */}
            <label htmlFor="typeOf">Type of Expense</label>
            <input className="form-control"   type="text" name="typeOf" id="typeOf"  onChange={(e) => setTypeOf(e.target.value)} value ={typeOf} />
          </div>
          <input className='btn btn-success' type="submit" value = "Update" />
        </form>
          <button className='btn btn-danger'  onClick={() =>{deleteExp(expenses._id)}}>Delete</button>
        </>)
}
export default Edit;