import { NavLink, useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {

    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(-1);
    }

    const post= useLoaderData();
    const {id,title,body} =post;
    return (
        <div className="container mx-auto space-y-3 justify-center items-center flex flex-col">
            <h3 className="text-center text-3xl font-medium">Post details about :{id}</h3>
            <p className="text-center text-2xl">Title: {title}</p>
            <p className="text-center text-xl">Body: {body}</p>
            <NavLink className="bg-green-200 p-4 text-lg font-medium rounded-2xl" onClick={handleShowDetails}><button>Return</button></NavLink>
        </div>
    );
};

export default PostDetails;