const Proceed = ({ totalPrice, proceedCart }) => {
    return (
        <div>
            <div className="lg:px-50 px-5">
                <div className="flex justify-between my-5">
                    <p className="text-[#627382]">Total:</p>
                    <h3 className="text-[24px] font-bold">${totalPrice}</h3>
                </div>
                <a onClick={proceedCart} className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full w-full">Proceed to Checkout</a>
            </div>
        </div>
    );
};

export default Proceed;