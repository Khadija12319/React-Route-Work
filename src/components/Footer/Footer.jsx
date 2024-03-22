import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="w-full space-y-3 py-10">
            <div className="mx-auto container">
            <span className="flex justify-center gap-5 text-3xl pt-4">
                <FaFacebook/>
                <FaTwitter />
                <AiFillInstagram/>
                <FaGooglePlus/>
                <FaYoutube />
            </span>
            </div>
            <h4 className="text-center text-xl">© All Rights Reserved</h4>
        </div>
    );
};

export default Footer;