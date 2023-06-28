import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addblog } from "../Redux/Slice/blogslice";
import { Link } from 'react-router-dom';
import './AddData.css'


function AddData(){

    const[inputvalue,setinputValue]=useState('')

    const blogitem=useSelector(store=>store.blog.blogs)

    const dispatch=useDispatch()


    const handlesubmit=(event)=>{
        event.preventDefault()
        
        const blogitem={
            id: Date.now(),
            title:event.target.title.value,
            text:event.target.content.value
            
        }
        console.log(blogitem,"+++++++++++");
        dispatch(addblog(blogitem))
        
        setinputValue(blogitem)
        

    }


    return(
        <>
     <div className="container">
  <h1>Blog</h1>
  <form onSubmit={handlesubmit}>
    <div>
      <h3>Title</h3>
      <input type="text" placeholder="Enter the title" name="title" />
    </div>
    <div>
      <h3>Body</h3>
      <textarea id="message" name="content" rows="4" cols="50"></textarea>
    </div>
    <div>
      <button type="submit">Add Data</button>
    </div>
  </form>
  {blogitem.map((data) => {
    return (
      <Link to={`/view/${data.id}`} key={data.id}>
        <h1>{data.title}</h1>
      </Link>
    );
  })}
</div>


    </>





    )
}
export default AddData;