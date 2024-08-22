import PriceCards from "../components/blocks/PriceCards";
export default function NeoPrices() {
    const prices = [
        {
            price: "19$",
            title: "Starter",
            description: "Unleash the power of automation.",
            features: ["Multi-step Zap", "3 Premium Apps", "2 Users Team"]
        },
        {
            price: "29$",
            title: "Pro",
            description: "Unleash the power of automation.",
            features: ["Multi-step Zap", "Unlimited Premium", "50 Users Team","Shared Workspace"]
        },
        {
            price: "39$",
            title: "Enterprise",
            description: "Unleash the power of automation.",
            features: ["Multi-step Zap", "Unlimited Premium", "Unlimited Users Team","Advanced Admin", "Custom Data Retention" ]
        }
    ]

    return (
        <>
            <h1 className="text-5xl text-center pb-4">Let's start together</h1>
            <section className="grid grid-cols-3 h-96 container gap-4">
                {prices.map((price, index) => (
                    <PriceCards
                        key={index}
                        price={price.price}
                        title={price.title}
                        description={price.description}
                        features={price.features}
                    />
                ))}
            </section>
        </>
    );
    }