const Cart = ({selectedCards, setSelectedCards}) => {
    return (
        <div>
            {
                selectedCards.length === 0 ? (<div className='h-100 flex items-center flex-col gap-4'>
                        <h2 className='font-semibold text-xl'>No products selected yet</h2>
                        <p>Go to Products tab to select products</p>
                    </div>) : ''
            }
        </div>
    );
};

export default Cart;