

import {useState,useEffect} from "react";
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'


export default function Alldata(){
  
  const [data,setData]=useState([])
 

  useEffect(()=>{
    const fetchdata=async()=>{
       await axios.get('https://server-6gds.onrender.com/data').then((item)=>{setData(item.data)})
    };fetchdata()
 },[]);
   
  function handleDelete(index){
    let DeleteArray=[...data];
    axios.delete(`https://server-6gds.onrender.com/delete/${DeleteArray[index]._id}`);
    alert(`Account ${DeleteArray[index].id} Delete from Database` )
    DeleteArray.splice(index,1);
    setData(DeleteArray);
    
    
  }
  return(
    <>
      <h2>Bank Users Database</h2>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>AccountNo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Balance</th>
          <th>Delete-Option</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item,index)=>  
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.amount}</td>
          <td><Button onClick={()=>handleDelete(index)}>Delete</Button></td>
        </tr>)
        }
      
        </tbody>
        </Table>
    
    </>
  )
}
