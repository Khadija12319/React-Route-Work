import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post= useLoaderData();
    const {id,title,body} =post;
    return (
        <div className="container mx-auto space-y-3">
            <h3 className="text-center text-3xl font-medium">Post details about :{id}</h3>
            <p className="text-center text-2xl">Title: {title}</p>
            <p className="text-center text-xl">Body: {body}</p>
        </div>
    );
};

export default PostDetails;