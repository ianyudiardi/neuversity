import Button from "../components/ui/Button"
export default function Home() {
    return (
        <>
            <section className="mx-10">
                <div className="container mx-auto sm:px-4 my-5">
                    <div className="flex flex-wrap ">
                        <div className="md:w-1/2 py-4">
                            <h1 className="font-bold text-4xl">
                                Landing page for your online services
                            </h1>
                            <p className="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe doloremque mollitia maxime, dignissimos dolore culpa dolor quae repellat architecto nisi ut asperiores quo molestias! Voluptates!
                            </p>
                            <div className="my-10">
                            <Button type="learn-more" />
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4">
                            <img
                                src="/hero-illustration.png"
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* partner */}
            <section className="container">
                <div className="mx-auto sm:px-4">
                    <div className="flex">
                        <div className="md:w-1/5 pr-4 pl-4">
                            <img src="/varta.svg" alt="" />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4">
                            <img src="/lenovo.svg" alt="" />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4">
                            <img src="/bbs.svg" alt="" />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4">
                            <img src="/weller.svg" alt="" />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4">
                            <img src="/british_airways.svg" alt="" />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4">
                            <img src="/lufthansa.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}