import DeletedCart from "../../../ui/DeletedCart";

const Cart = ({selectedCards, setSelectedCards}) => {
    const handleDeleteSelectedCard = (card) => {
        const filterCard = selectedCards.filter(selectedCard => selectedCard.name !== card.name)
        setSelectedCards(filterCard)
    }

    return (
        <div>
            {
                selectedCards.length === 0 ? (<div className='h-100 flex items-center flex-col gap-4'>
                        <h2 className='font-semibold text-xl'>No products selected yet</h2>
                        <p>Go to Products tab to select products</p>
                    </div>) : (selectedCards.map(card => {
                        return(
                            <DeletedCart card={card} handleDeleteSelectedCard={handleDeleteSelectedCard}></DeletedCart>
                        )
                    }))
            }
        </div>
    );
};

export default Cart;