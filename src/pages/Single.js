// import React, {useState, useEffect} from 'react'
// import {Link, useParams} from 'react-router-dom'
// import { useGlobalContext } from '../context'

// function Single() {
//   const { stylist } = useGlobalContext()
//   const {id} = useParams();
//   const [singleUser, setSingleUser] = useState(null)
//   const [loading, setLoading] = useState(true)
//   console.log(id)

//  console.log(id)
//   const fetchData = async() =>{
//     try {
//       const response = await fetch(``);
//       const data = await response.json();
//       if (!localStorage.getItem(data.User_Details[0].firstname)){
//         localStorage.setItem(data.User_Details[0].firstname, JSON.stringify(data))
//       }
//       setSingleUser(JSON.parse(localStorage.getItem(data.User_Details[0].firstname)))
//       setLoading(false)
      
//     } catch (error) {
//       console.log(error)
//     }
   
//   }
//   useEffect(()=>{
//     fetchData()
//   }, [])

 
 
//   if(loading){
//     return <h1>Loading</h1>
//   }

//   return (
//     <div className="single-user">
   
//     </div>
//   )
// }

// export default Single