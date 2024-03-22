import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2 className="text-center text-3xl py-5">Name of user: <span className="font-semibold">{name}</span></h2>
            <p className="text-center text-3xl py-3">Website: {website}</p>
        </div>
    );
};

export default UserDetails;