import { useState } from "react";
import { json, useNavigate } from "react-router-dom";


function Create() {

    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const [waitingServer, setWaitingServer] = useState(false)
    const navigator = useNavigate()

    // To Refuse Reload On Submit Data
    const mySubmit = (e)=>{
        e.preventDefault();

    // To Upload Data
        const mypost = {
            userId, 
            title,
            body,
        }
        console.log(mypost);

        setWaitingServer(true);
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(mypost),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },

        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
            console.log('New Post added');
            setWaitingServer(false);
            navigator('/Posts');
        });
        
      }, 2000);  
        

    }
    return(
      <>
      <br/>
      <h1 className="text-center text-info">Create Post</h1>
        <form onSubmit={mySubmit}>
          <div className="container"><br />
            <div className="mb-3">
                <input className="form-control" placeholder="Inter User Id"
                 required value={userId} onChange={(e)=> setUserId(e.target.value)}/><br />

                <input className="form-control" placeholder="Inter Title"
                required value={title} onChange={(e)=> setTitle(e.target.value)}/><br />

                <textarea className="form-control" placeholder="Inter Body"
                required value={body} onChange={(e)=> setBody(e.target.value)}/><br />
            </div>

            {!waitingServer && <button className="btn btn-primary">Create</button>}
            {waitingServer && <button className="btn btn-primary" disabled>Please Wait</button>}
        </div>
        <br/>
        <h3>{userId}</h3>
        <h3>{title}</h3>
        <h3>{body}</h3>
        </form>
        </>
      
    );
};

export default Create;