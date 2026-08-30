const Stats = () => {
    return (
        <div className="">
            <div className="stats bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white lg:stats-horizontal shadow w-full rounded-none font flex justify-between gap-20 px-50  items-center py-15 text-center">
                <div className="stat border-r-[#ffffffc5]">
                    <div className="stat-value font-bold text-[50px]">50K+</div>
                    <div className="stat-title text-[24px] text-[#ffffffc5] font-medium">Active Users</div>
                </div>

                <div className="stat border-r-[#ffffffc5]">
                    <div className="stat-value font-bold text-[50px]">200+</div>
                    <div className="stat-title text-[24px] text-[#ffffffc5] font-medium">Premium Tools</div>
                </div>

                <div className="stat">
                    <div className="stat-value font-bold text-[50px]">4.9</div>
                    <div className="stat-title text-[24px] text-[#ffffffc5] font-medium">Rating</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;