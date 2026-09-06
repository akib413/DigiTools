import { toast } from "react-toastify";
import DeletedCart from "../../../ui/DeletedCart";
import Proceed from "../../../ui/Proceed";

const Cart = ({selectedCards, setSelectedCards}) => {
    const handleDeleteSelectedCard = (card) => {
        const filterCard = selectedCards.filter(selectedCard => selectedCard.name !== card.name)
        setSelectedCards(filterCard)
        toast.error(`${card.name} remove form cart`)
    }
    const totalPrice = selectedCards.reduce(
        (total, card) => total + Number(card.price),
        0
    )
    const proceedCart = () => {
        setSelectedCards([])
        toast(`Clear all cart!`)
    }

    return (
        <div className="font">
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
            {
                selectedCards.length === 0 ? '' : <Proceed totalPrice={totalPrice} proceedCart={proceedCart}></Proceed>
            }
        </div>
    );
};

export default Cart;