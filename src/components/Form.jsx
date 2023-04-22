import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';



 const Form = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [typeOf, setTypeOf] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/expenses/new',{
            name, price, typeOf 
        })
        .then(res => {
            console.log(res.data)
            navigate('/dashboard')
        })
        .catch((err) =>{
            console.log(err)
            const errorResponse = err.response.data.errors;
            const errorArr = [];
    
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message);
            }
    
            setErrors(errorArr);
            })
    }

    return(

        <>
        <form onSubmit={submitHandler} meth>
        {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
          <div>
            <label htmlFor="name">Name</label>
            <input className="form-control"  type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value ={name}/>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input className="form-control"  type="number" name="price" id="price"  onChange={(e) => setPrice(e.target.value)} value ={price} />
          </div>
          <div>
            <label  htmlFor="typeOf">Type of Expense</label>
            <input className="form-control"  type="text" name="typeOf" id="typeOf"  onChange={(e) => setTypeOf(e.target.value)} value ={typeOf} />
          </div>
          <input type="submit" class="btn btn-primary" value = "Add" />
        </form>
        </>)
     }
    

 export default Form;