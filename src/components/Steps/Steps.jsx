import { FaRegUser } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";


const Steps = () => {
    return (
        <div className="font">
            <div className="px-50 py-20 bg-[#f9fafc] mt-20">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Get Started in 3 Steps</h2>
                    <p className="text-[16px] text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="flex gap-5">
                    <div className="shadow-xl p-10 bg-white">
                        <div className="flex justify-end">
                            <p className="w-10 h-10 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full flex items-center justify-center">01</p>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="w-20 h-20 bg-[#eaf6ffb3] rounded-full flex items-center justify-center m-auto">
                                <FaRegUser className="text-5xl text-[#4f39f6]"></FaRegUser>
                            </div>
                            <h4 className="text-[24px] font-bold  mt-3">Create Account</h4>
                            <p className="text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className="shadow-xl p-10 bg-white">
                        <div className="flex justify-end">
                            <p className="w-10 h-10 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full flex items-center justify-center">02</p>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="w-20 h-20 bg-[#eaf6ffb3] rounded-full flex items-center justify-center m-auto">
                                <FiPackage className="text-5xl text-[#4f39f6]"></FiPackage>
                            </div>
                            <h4 className="text-[24px] font-bold mt-3">Choose Products</h4>
                            <p className="text-[#627382]">Browse our catalog and select the tools
                                that fit your needs.</p>
                        </div>
                    </div>
                    <div className="shadow-xl p-10 bg-white">
                        <div className="flex justify-end">
                            <p className="w-10 h-10 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full flex items-center justify-center">03</p>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="w-20 h-20 bg-[#eaf6ffb3] rounded-full flex items-center justify-center m-auto">
                                <LuRocket className="text-5xl text-[#4f39f6]"></LuRocket>
                            </div>
                            <h4 className="text-[24px] font-bold mt-3">Start Creating</h4>
                            <p className="text-[#627382]">Download and start using your premium
                                tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;