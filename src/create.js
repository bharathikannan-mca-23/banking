import { useContext,useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import userContext from "./context.js";
import Form from 'react-bootstrap/Form';
import './App.css'
import axios from 'axios'


export default function Create(){
    const ctx=useContext(userContext);
    let [userData,setUserData]=useState([]);
    let [name,setName]=useState();
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let [amount,setAmount]=useState(0);
    let[accountNo,setAccountNo]=useState();
    function handleSubmit(e){
        e.preventDefault();
      //   let data=[...userData,{id:accountNo,name:name,email:email,password:password,amount:amount}];
         // setUserData(data);
         let data={id:accountNo,name:name,email:email,password:password,amount:amount};
         axios.post("https://server-6gds.onrender.com/create",data)
         alert("Your New Account Created SuccessFully");
       
      }
   useEffect(()=>{

   ctx.users=[...ctx.users,...userData]
   setUserData([]);
  
   },[userData])
    
    
   
return(
<>
    <Form  onSubmit={handleSubmit}  >
      <h4 >Bank Account Registration Form</h4><hr></hr>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id="label"  >Account No:</Form.Label>
        <Form.Control type="number"  id="input" onChange={(e)=>{setAccountNo(e.target.value)}}  />
        <Form.Label id="label" >User Name:</Form.Label>
        <Form.Control type="text" id="input"  onChange={(e)=>{setName(e.target.value)}}  />
        <Form.Label id="label" >Email:</Form.Label>
        <Form.Control type="email" id="input"  onChange={(e)=>{setEmail(e.target.value)}}  />
        <Form.Label id="label" >Password:</Form.Label>
        <Form.Control type="password" id="input"  onChange={(e)=>{setPassword(e.target.value)}}/>
        <Form.Label id="label" >First Amount</Form.Label>
        <Form.Control type="number" id="input" onChange={(e)=>{setAmount(e.target.value)}}  />
        <Button type="submit" id="submitbtn" variant="danger" >Submit</Button>
        <Button type="reset" id="resetbtn" variant="primary">Reset</Button>
      </Form.Group>
   </Form>

</>
)


}