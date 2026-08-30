import { CiPlay1 } from "react-icons/ci";
import bannerImg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div>
            <div className="font flex justify-between gap-20 px-50  items-center py-15">
                <div className="flex-1 space-y-3">
                    <div className="bg-[#e1e7ff] rounded-full w-69.5">
                        <p className="font-medium bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent px-5 py-2">New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className="text-[60px] font-bold">Supercharge Your Digital Workflow</h1>
                    <p className="text-[18px] text-[#627382]">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                    <div className="flex gap-5 mt-5">
                        <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full">Explore Products</button>
                        <div>
                            <button className="btn btn-soft btn-primary rounded-full font-semi"><CiPlay1></CiPlay1> Watch Demo</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={bannerImg} className="w-125 h-147.5" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;