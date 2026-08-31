import { useState } from "react";

const SelectedProducts = ({card, selectedCards, setSelectedCards}) => {
    const [isSelected, setIsSelected] = useState([false])
    const handleSelected = () => {
        setIsSelected(true)
        setSelectedCards([...selectedCards, card])
    }
    
    return (
        <div className="font">
            <div className="card bg-base-100 shadow-sm">
                                <div className="card-body">
                                    <span className="badge badge-xs badge-warning ml-auto">{card.tagType}</span>
                                    <div className="w-15 h-15 border border-red-50 flex items-center justify-center rounded-full">
                                        <img className="w-8 h-8" src={card.icon} alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className="text-2xl font-bold">{card.name}</h2>
                                        <p className="text-[#627382] text-[16px] mb-5">{card.description}</p>
                                        <span className="text-2xl font-bold ">${card.price}</span>
                                    </div>
                                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                                        {
                                            card.features.map((feature, index) => {
                                                return (
                                                    <li key={index} className="text-[#627382] text-[16px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        <span>{feature}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="mt-6">
                                        <button onClick={handleSelected} className="btn btn-block bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full">Buy Now</button>
                                    </div>
                                </div>
                            </div>
        </div>
    );
};

export default SelectedProducts;