const DeletedCart = ({ card, handleDeleteSelectedCard }) => {
    return (
        <div className="font px-50">
            <div className="flex items-center justify-between rounded-2xl bg-[#f9fafc] p-5 mb-4">
                <div className="flex items-center justify-between gap-5">
                    <div className="">
                        <div className="w-15 h-15 border border-red-50 flex items-center justify-center rounded-full">
                            <img className="w-8 h-8" src={card.icon} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-semibold">{card.name}</h3>
                        <p className="text-[16px] text-[#627382]">${card.price}</p>
                    </div>
                </div>
                <div className="">
                    <p onClick={() => handleDeleteSelectedCard(card)} className="text-[16px] text-[#ff3980] font-bold cursor-pointer">Remove</p>
                </div>
            </div>
        </div>
    );
};

export default DeletedCart;