import { NavLink } from "react-router-dom";
import '../../App.css'

const Header = () => {
    return (
        <div className="py-10">
            <div className="container mx-auto flex justify-around">
                <h1 className="text-4xl font-extrabold">React Router</h1>
                <nav className="flex gap-5 text-2xl">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;