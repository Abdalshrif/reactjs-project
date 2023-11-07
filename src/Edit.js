import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import Posts from "./Posts";




function Edit() {

    const {id} = useParams();
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [posts, setPost] = useState(null);
    const [isWaiting , setIsWaiting] = useState(true);


    const [waitingServer, setWaitingServer] = useState(false)
    const navigator = useNavigate()


    useEffect(()=>{
      setTimeout(() =>{
          fetch('https://jsonplaceholder.typicode.com/posts/' + id)
          .then(response => {
            console.log(response.ok)
             if(!response.ok) {
              throw Error('You Can not the server!');
             }
            return response.json();
          })
          .then(data => {
            setUserId(data.userId);
            setTitle(data.title);
            setBody(data.body);
            setIsWaiting(false);
            // setPost(data);
            // setIsWaiting(false);

          }).catch(ev=>{
              console.log(ev.message);
             ;

          });
      },2000);
    
  }, []);

    // To Refuse Reload On Submit Data
    const mySubmit = (e)=>{
        e.preventDefault();

    // To Upload Data
        const mypost = {
            id,
            userId, 
            title,
            body,
        }
        console.log(mypost);

        setWaitingServer(true);
        setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id,{
            method: 'PUT',
            body: JSON.stringify(mypost),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },

        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
            console.log('Updated Seccessfuly');
            setWaitingServer(false);
            navigator('/Posts');
        });
        
      }, 2000);  
        

    }
    return(
        <form onSubmit={mySubmit}>
          <div className="container"><br />
          {isWaiting && <h3>Please Wait To Load Data ....</h3>}
            <div className="mb-3">
                <input className="form-control"
                 required value={userId} onChange={(e)=> setUserId(e.target.value)}/><br />

                <input className="form-control" 
                required value={title} onChange={(e)=> setTitle(e.target.value)}/><br />

                <textarea className="form-control"
                required value={body} onChange={(e)=> setBody(e.target.value)}/><br />
            </div>

            {!waitingServer && <button className="btn btn-primary">Update</button>}
            {waitingServer && <button className="btn btn-primary" disabled>Please Wait</button>}
        </div>
        <br/>
        <h3>{userId}</h3>
        <h3>{title}</h3>
        <h3>{body}</h3>
        </form>
      
    );
};

export default Edit;