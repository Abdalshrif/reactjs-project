import PostList from "./PostsList";
import PostsModel from "./PostsModel";

function Posts()
 {

    const {isWaiting, serverError, posts} = PostsModel('https://jsonplaceholder.typicode.com/posts');
   
    return (

        <div>
            {isWaiting && <h3 className="text-center mt-4">Please Wait To Load Data ....</h3>}
            {serverError && <p>{serverError}</p>}
            {posts && <PostList posts={posts} name="Posts"/>}
        </div>
    
    );
}
 export default Posts;






  // const [posts1, setPost1] = useState([
    //     {
    //         userId: 1,
    //         id: 1,
    //         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //       },
    //       {
    //         userI: 1,
    //         id: 2,
    //         title: "qui est esse",
    //         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    //       },
    //       {
    //         userId: 1,
    //         id: 3,
    //         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    //       },
    //       {
    //         userId: 1,
    //         id: 4,
    //         title: "eum et est occaecati",
    //         body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    //       },        
    // ]);
