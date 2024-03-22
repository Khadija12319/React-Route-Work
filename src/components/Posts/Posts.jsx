import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl text-black text-center">This is Posts page{posts.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;