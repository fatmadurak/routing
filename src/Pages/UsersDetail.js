import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function UsersDetail() {
    
    const [user,setUser]=useState(null);
    const {id}=useParams();

    useEffect(()=>{

     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((res)=>res.json())
     .then((data)=>setUser(data))
    },[id])

  return (
    <div>
        <h1>Kullanıcı Detayları</h1>

        {

            user && <pre>

                {JSON.stringify(user,null,2)}
               
                </pre>
           
        }

       <Link to={`/users/${Number(id)+1}`}>Sonraki Kullanıcı Detayları</Link>

    </div>
  )
}

export default UsersDetail