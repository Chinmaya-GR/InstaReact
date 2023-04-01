import React, { useState } from "react"
import Nav from "./Nav"
import { Navigate, useNavigate } from "react-router-dom"
import "../component/css/form.css"

function Form()
{
    let [sendData,update]=useState({
        name:"",
        location:"",
        likes:0,
        description:"",
        PostImage:"",
        date: new Date()
    })
    async function submit(e)
    {
        e.preventDefault()
        let data=new FormData(e.target)
        // console.log(JSON.stringify(sendData));
        console.log(sendData);
        // await fetch("http://localhost:8000/instaData",{
        //     method:"post",
        //     body:JSON.stringify(sendData),
        //     headers:{
        //         "content-type":"application/json"
        //     }
        // })
        await fetch("https://instaclone-project-xz2c.onrender.com/postdata",{
             method:"post",
             body:data
         })
        .then((data)=>data.json())
        .then((responce)=>console.log(responce))
        .catch(()=>console.log("uploading error"))
    }
    function fn(value,id)
    {
       update((data)=>({
           ...data,
           [id]:value
       }))
    //    console.log(sendData);
    }
    return<>
    <Nav></Nav>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div>
        <form method="POST" onSubmit={(e)=>submit(e)}>
            <div>
                <input type="file" value={sendData.PostImage} name="PostImage" onChange={(e)=>fn(e.target.value,'PostImage')}  placeholder="select image" style={{border:"1px solid",width:"400px"}} accept="image/*" />
            </div>
            <div>
                <input type="text" value={sendData.name} name="name" onChange={(e)=>fn(e.target.value,'name')} placeholder="Author" style={{border:"1px solid",textAlign:'center',width:'200px'}} />
                <input type="text" value={sendData.location} name="location" onChange={(e)=>fn(e.target.value,'location')} placeholder="Location" style={{border:"1px solid",textAlign:'center'}}/>
            </div>
            <div>
                <input type="text" value={sendData.description} name="description" onChange={(e)=>fn(e.target.value,'description')} placeholder="Description" style={{border:"1px solid",width:"400px"}} />
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <button type="submit" style={{width:"80px",marginRight:"100px"}}>Post</button>
            </div>
        </form>
      </div>
      </div>
    </>
}
export default Form