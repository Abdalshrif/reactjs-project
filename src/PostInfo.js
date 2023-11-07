import { Link, useParams } from "react-router-dom";
import PostsModel from "./PostsModel";
import Posts from "./Posts";

function PostInfo() {
    const {id} = useParams();
    const { isWaiting, serverError, posts} = PostsModel('https://jsonplaceholder.typicode.com/posts/' + id);

    return(
        <div> <br />
            <h1>PostInfo - {id}</h1> <br />

         <div className="card container">
            <div className="card-body">
                <h5 className="card-title">{posts.title}</h5>
                <p className="card-text">{posts.body}</p>
                <Link path="/Posts" element={<Posts/>} className="btn btn-primary">Back</Link>

            </div>
         </div>
        </div>
    );
}
export default PostInfo;