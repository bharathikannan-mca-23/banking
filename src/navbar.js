import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar(){
    return(<>
  

  
 
  <Nav defaultActiveKey="/home" as="ul"  fill variant="tabs" id="nav">

  <Nav.Item as="li"  >
        <Nav.Link id="nav-list" href="#/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li"  >
        <Nav.Link id="nav-list" href="#/create">Create</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link id="nav-list" href="#/deposit">Deposit</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link id="nav-list" href="#/withdraw" >WithDraw</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link id="nav-list" href="#/alldata">Alldata</Nav.Link>
      </Nav.Item>
    </Nav>
   


    </>)
}