import { useLoaderData } from "react-router-dom";
import User from "../components/User/User";

const Users = () => {

    const users = useLoaderData();
    return (
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;