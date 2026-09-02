const Workflow = () => {
    return (
        <div className="font">
            <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-center px-50 py-30 space-y-3">
                <h3 className="text-3xl font-bold">Ready to Transform Your Workflow?</h3>
                <div className="">
                    <p>Join thousands of professionals who are already using Digitools to work smarter.</p>
                <p>Start your free trial today.</p>
                </div>
                <div className="flex justify-center gap-2 mt-8">
                    <button className="btn rounded-full">Explore Products</button>
                    <button className="btn rounded-full bg-transparent text-white">View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;