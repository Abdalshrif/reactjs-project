import { useEffect, useState } from "react";

function PostsModel(URL) 
{
    const [isWaiting , setIsWaiting] = useState(true);
    const [serverError , setServerError] = useState(null);
    const [posts, setPost] = useState(null);

    useEffect(()=>{
        setTimeout(() =>{
            fetch(URL)
            .then(response => {
              console.log(response.ok)
               if(!response.ok) {
                throw Error('You Can not the server!');
               }
              return response.json();
            })
            .then(data => {
              setPost(data);
              setIsWaiting(false);
            }).catch(e=>{
                console.log(e.message);
                setServerError(e.massege); 
                setIsWaiting(false);

            });
        },2000);
      
    }, [URL]);

    return {isWaiting,serverError, posts }
    
 
}
export default PostsModel;

