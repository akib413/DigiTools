import { use, useState } from "react";
import Cart from "./Cards/Cart/Cart";
import Products from "./Cards/Products/Products";

const Cards = ({dataPromise}) => {
    console.log(dataPromise)
    const cards = use(dataPromise)
    console.log(cards)
    const [selectedType, setSelectedType] = useState('products')
    const [selectedCards, setSelectedCards] = useState([])

    return (
        <div>
            <div className="text-center px-125 py-15 space-y-3">
                <h3 className="text-[45px] font-bold">Premium Digital Tools</h3>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className="mt-5">
                    <a onClick={() => setSelectedType('products')} className={`btn ${selectedType === 'products' ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : ''} rounded-full`}>Products</a>
                    <a onClick={() => setSelectedType('cart')} className={`btn ${selectedType === 'cart' ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : ''} rounded-full`}>Cart {selectedCards.length}</a>
                </div>
            </div>
            
            {selectedType === 'products' ? <Products cards={cards} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></Products> : <Cart selectedCards={selectedCards} setSelectedCards={setSelectedCards}></Cart>}
            
            
        </div>
    );
};

export default Cards;