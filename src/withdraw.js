
import {useState,useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
export default function Withdraw(){
   
    const [withdraw,setWithdraw]=useState(0);
    const [userId,setUserId]=useState();
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchdata=async()=>{
           await axios.get('https://server-6gds.onrender.com/data').then((item)=>{setData(item.data)})
        };fetchdata()
     },[]);


    function handleClick(e){
        e.preventDefault();
       for(let i=0;i<data.length;i++){
            if(data[i].id === Number(userId)){
                if(data[i].amount>0){
                    data[i].amount=Number(data[i].amount)-Number(withdraw);
                    let updateData={amount:data[i].amount};
                   let url=`https://server-6gds.onrender.com/update/${data[i]._id}`
                    axios.put(url,updateData);
                    alert(`Rs.${withdraw} Amount Withdraw on Your Account`)
                }
                else{
                    alert("YOUR ACCOUNT BALANCE 0 SO YOU CAN'T WITHDRAW");
                }
              
            }
         }
     }
    
    return(
    <>
    <Form  onSubmit={handleClick}  >
      <h4 >Withdraw Your Amount Here</h4><hr></hr>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id="label"  >Account No:</Form.Label>
        <Form.Control type="number"  id="input" onChange={(e)=>{setUserId(e.target.value)}}  />
        <Form.Label id="label" >Withdraw Amount:</Form.Label>
        <Form.Control type="number" id="input" onChange={(e)=>{setWithdraw(e.target.value)}}/>
        <Button type="submit" id="submitbtn" variant="danger" >Submit</Button>
        <Button type="reset" id="resetbtn" variant="primary">Reset</Button>
        </Form.Group>
        </Form>
    </>

    )
    
    
    }