const PricingCard = ({ price }) => {
    return (
        <div className="font">
            <div className={`card ${price.name === "Pro" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "bg-white"} shadow-sm p-6 h-106.25 flex flex-col`}>
                
                <div className="">
                    <h2 className="text-2xl font-bold">{price.name}</h2>
                    <p className={`${price.name === 'Pro' ? 'text-white' : 'text-[#627382]'} text-[16px] mb-5`}>{price.description}</p>
                    <span className="text-2xl font-bold ">${price.price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        price.features.map((feature, index) => {
                            return (
                                <li key={index} className={`${price.name === 'Pro' ? 'text-white' : 'text-[#627382]'} text-[16px]`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="mt-auto pt-6">
                    <button className={`btn btn-block ${price.name === "Pro" ? "bg-white text-[#9514fa]" : "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"} rounded-full`}>{price.button}</button>
                </div>
            </div>
        </div>

    );
};

export default PricingCard;