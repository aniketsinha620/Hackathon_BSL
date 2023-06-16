import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';


const MaybeShowNav = ({children}) => {
    const location = useLocation();
    const[Shownavbar , setShownavbar] = useState(false);

    useEffect(()=>{
        console.log('This is location:' , location);
        if (location.pathname === '/dashboard' || location.pathname === '/login' || location.pathname === '/signup') {
            setShownavbar(false);  
        }
        else
        {
           setShownavbar(true);
        }
    },[location])
   console.log(Shownavbar);
  return (
    <div>{Shownavbar && children} </div>
  )
}

export default MaybeShowNav