
import AuthBtn from "./AuthBtn";
import logo from "../assets/logo-text.png";

const Navber = () => {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-8 w-auto"
                />

                <ul className="flex justify-center items-center gap-4">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <AuthBtn />
            </div>
        </nav>
    );
};

export default Navber;
