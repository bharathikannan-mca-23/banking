import { useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'
import axios from 'axios'
export default function Deposit(){

const [dep,setDep]=useState(0)
const [userId,setUserId]=useState();
const [data,setData]=useState([])


useEffect(()=>{
   const fetchdata=async()=>{
      await axios.get('http://localhost:8080/data').then((item)=>{setData(item.data)})
   };fetchdata()
},[]);

let updateData;
function handleClick(e){
   e.preventDefault();
  
   for(let i=0;i<data.length;i++){
      if(data[i].id === Number(userId)){
         data[i].amount=Number(data[i].amount)+Number(dep);
         updateData={amount:data[i].amount};
         let url=`https://server-6gds.onrender.com/update/${data[i]._id}`
          axios.put(url,updateData);
          alert(`Rs.${dep} Amount Credited on Your Account`)
      }
   }

}


    return(
    <>
   
   <Form  onSubmit={handleClick}  >
      <h4 >Deposit Your Amount Here</h4><hr></hr>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id="label"  >Account No:</Form.Label>
        <Form.Control type="number"  id="input" onChange={(e)=>{setUserId(e.target.value)}}  />
        <Form.Label id="label" >Deposit Amount:</Form.Label>
        <Form.Control type="number" id="input" onChange={(e)=>{setDep(e.target.value)}}/>
        <Button type="submit" id="submitbtn" variant="danger" >Submit</Button>
        <Button type="reset" id="resetbtn" variant="primary">Reset</Button>
        </Form.Group>
        </Form>

   
   

    </>
    )
    
    
    }