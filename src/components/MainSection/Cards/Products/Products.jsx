import SelectedProducts from "../../../ui/SelectedProducts";

const Products = ({ cards, selectedCards, setSelectedCards }) => {

    return (
        <div className="font px-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    cards.map(card => {
                        return (
                            <SelectedProducts card={card} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></SelectedProducts>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;