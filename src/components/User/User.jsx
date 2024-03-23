import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const User = ({user}) => {

    const {name, id, email, phone} = user;
    return (
        <div className="border-[2px] rounded-2xl border-black p-4 space-y-2 text-center">
            <h2 className="text-2xl font-medium">{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <button className="btn bg-blue-300 p-3 rounded-3xl text-xl"><NavLink to={`/user/${id}`}>Show Details</NavLink></button>

        </div>
    );
};
User.propTypes ={
    user: PropTypes.object.isRequired
}

export default User;