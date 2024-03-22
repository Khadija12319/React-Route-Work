import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className="text-center space-y-1 border-[2px] border-black rounded-2xl bg-green-200">
            <h4 className="text-2xl font-medium py-2">Post of id: {id}</h4>
            <p className="text-xl px-2 py-3 ">{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;