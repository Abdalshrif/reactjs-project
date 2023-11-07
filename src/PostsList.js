import { Link, useNavigate } from "react-router-dom";


function PostList({posts,name}) {

    const navigator = useNavigate()
    const deleteAction = (id)=>{
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
          method: 'DELETE',
        }).then(()=>{
          navigator('/');
        });
      }

    return (
        <div className="container"> 
        <h1>{name}</h1>  
        <table id="datatable" className="table table-bordered dt-responsive nowrap">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th colSpan={3}>A ction</th>
                </tr>
            </thead>

            <tbody>   
                {posts.map((post)=>(
                    <tr key={post.id}>   
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td><button onClick={() => deleteAction(post.id)} type="button" className="btn btn-danger">Delete</button></td>
                            <td><Link to={"/Posts/" + post.id} className="btn btn-info">More</Link></td>
                            <td><Link to={"/Edit/" + post.id} className="btn btn-success">Edit</Link></td>
                    </tr>
                    ))}
            </tbody>
        </table>
    </div>
    );
}
export default PostList;