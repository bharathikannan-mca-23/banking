
import './App.css';
import Navbar from './navbar.js'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './Home.js';
import Create from './create.js';
import Deposit from './deposit.js';
import Withdraw from './withdraw.js';
import Alldata from './alldata.js';
import userContext from './context.js';

function App() {
  return (
    <>
   <Navbar></Navbar>
   
     <userContext.Provider value={{'users':[]}}>
     <HashRouter>
      <Routes>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/create" element={<Create/>} ></Route>
        <Route path="/deposit" element={<Deposit/>} ></Route>
        <Route path="/withdraw" element={<Withdraw/>} ></Route>
        <Route path="/alldata" element={<Alldata/>} ></Route>
      </Routes>
     </HashRouter>
     </userContext.Provider>
     
     
    </>
  );
}

export default App;
