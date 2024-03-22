import { Link } from "react-router-dom";

const User = ({user}) => {

    const {name, id, email, phone} = user;
    return (
        <div className="border-[2px] rounded-2xl border-black p-4 space-y-2 text-center">
            <h2 className="text-2xl font-medium">{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <button className="btn bg-blue-300 p-3 rounded-3xl text-xl"><Link to={`/user/${id}`}>Show Details</Link></button>
            
        </div>
    );
};

export default User;