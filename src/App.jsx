import React, { useState,useRef } from 'react';

export default function App() {
  
  const[count,setCount]= useState(false);
  const[over,setOver] = useState(false);
  let ref = useRef(null);
  let data= useRef([]);
  return(  
    <div className="h-screen grid  place-items-center ">
     <ul className="w-60 h-60 grid grid-cols-3" onClick={(e)=>{
      
      
      if((count==false)&&(e.target.textContent==""))
      {
        e.target.textContent="X";
        setCount(true);
         data.current[e.target.id]="X";
      
        
      }
      else if((count==true)&&(e.target.textContent==""))
      {
        e.target.textContent="O";
        setCount(false);
        data.current[e.target.id]="O";
       
      }
      if((data.current[0]=="O" && data.current[1]=="O" && data.current[2]=="O")||(data.current[0]=="X" && data.current[1]=="X" && data.current[2]=="X")||(data.current[3]=="O" && data.current[4]=="O" && data.current[5]=="O")||(data.current[3]=="X" && data.current[4]=="X" && data.current[5]=="X")||(data.current[6]=="O" && data.current[7]=="O" && data.current[8]=="O")||(data.current[6]=="X" && data.current[7]=="X" && data.current[8]=="X")||(data.current[0]=="O" && data.current[1]=="O" && data.current[2]=="O")||(data.current[0]=="X" && data.current[3]=="X" && data.current[6]=="X")||(data.current[1]=="O" && data.current[4]=="O" && data.current[7]=="O")||(data.current[1]=="X" && data.current[4]=="X" && data.current[7]=="X")||(data.current[2]=="O" && data.current[5]=="O" && data.current[8]=="O")||(data.current[2]=="X" && data.current[5]=="X" && data.current[8]=="X")||(data.current[0]=="X" && data.current[4]=="X" && data.current[8]=="X")|| (data.current[0]=="O" && data.current[4]=="O" && data.current[8]=="O")||(data.current[2]=="X" && data.current[4]=="X" && data.current[6]=="X")||(data.current[2]=="O" && data.current[4]=="O" && data.current[6]=="O"))
      {
        setOver(true)
      }
    
      
     }}>
      <li id='0' className="border grid place-items-center text-5xl font-bold h-20 w-20"></li>
      <li id='1' className="border grid place-items-center text-5xl font-bold h-20 w-20"></li>
      <li id='2' className="border grid place-items-center text-5xl font-bold h-20 w-20"></li>
      <li id='3' className="border grid place-items-center text-5xl font-bold h-20 w-20"></li>
      <li id='4' className="border grid place-items-center text-5xl font-bold h-20 w-20"></li>
      <li id='5' className="border grid place-items-center text-5xl font-bold h-20 w-20"></li>
      <li id='6' className="border grid place-items-center text-5xl font-bold h-20 w-20"></li>
      <li id='7' className="border grid place-items-center text-5xl font-bold h-20 w-20"></li>
      <li id='8' className="border grid place-items-center text-5xl font-bold h-20 w-20"></li>
     </ul>
     {
        over&&<div className='absolute h-96 bg-black opacity-90 w-full rounded-full grid place-items-center text-white text-6xl font-bold' onClick={()=>location.reload()}>Game Over</div>
     }
     
    </div>
)}