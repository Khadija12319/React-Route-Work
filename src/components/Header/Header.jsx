import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="py-10">
            <div className="container mx-auto flex justify-around">
                <h1 className="text-4xl font-extrabold">React Router</h1>
                <nav className="flex gap-5 text-2xl">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;