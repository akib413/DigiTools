import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <div className="font">
            <footer className="footer sm:footer-horizontal bg-[#101727] text-white px-50 py-20">
                <aside>
                    <h2 className="text-3xl font-bold">DigiTools</h2>
                    <p className="text-[#c4c4c4]">
                        Premium digital tools for creators,
                        <br />
                        professionals, and businesses. Work smarter
                        <br />
                        with our suite of powerful tools.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-[18px] font-medium ">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[18px] font-medium">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[18px] font-medium">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <div className="">
                    <h6 className="footer-title text-[18px] font-medium">Social Links</h6>
                    <div className="flex gap-3">
                        <div className="p-2 bg-white text-black rounded-full">
                            <TbBrandInstagramFilled></TbBrandInstagramFilled>
                        </div>
                        <div className="p-2 bg-white text-black rounded-full">
                            <FaFacebookSquare></FaFacebookSquare>
                        </div>
                        <div className="p-2 bg-white text-black rounded-full">
                            <FaXTwitter></FaXTwitter>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-[#101727] text-[#c4c4c4] px-50 py-8">
                <hr />
                <div className="flex justify-between mt-8">
                    <div className="">
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className="w-88">
                        <ul className="flex justify-between">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;