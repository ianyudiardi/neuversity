import Button from "../ui/Button"
export default function PriceCards({
    price = 0,
    title = "default",
    description = "default",
    features = []
}) {
    return (
        <div className="container flex flex-col justify-between py-4 border rounded-3xl">
            <div>
                <p className="pt-4 pb-2 text-xl font-semibold"><span className="text-4xl font-bold text-green-400">{price}</span>/month</p>
                <h2 className="font-semibold text-2xl text-green-400">{title}</h2>
                <p className="font-bold text-gray-500">{description}</p>
                <ul className="py-2">
                    {features.map((feature, index) => (
                        <li className="flex gap-1 py-1" key={index}>
                            <img src="/check-circle-1.png" className="size-5" alt="" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <Button type="choose-plan" className="">Choose Plan</Button>
        </div>
    )
}