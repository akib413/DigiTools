import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="font">
            <div className="navbar bg-base-100 shadow-sm px-50">
                <div className="navbar-start">
                    <a className="font-bold text-3xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <a className="cursor-pointer"><FiShoppingCart></FiShoppingCart></a>
                    <a className="btn rounded-full">Login</a>
                    <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;