import { use } from "react";
import PricingCard from "../ui/PricingCard";

const Pricing = ({pricePromise}) => {
    const pricing = use(pricePromise)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-50 py-20 space-y-3">
            {
                pricing.map(price => <PricingCard price={price}></PricingCard>)
            }
        </div>
    );
};

export default Pricing;