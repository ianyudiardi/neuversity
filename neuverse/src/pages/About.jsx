export default function About() {
    return (
        <section className="mx-10">
            <h1 className="font-bold text-4xl text-center">
                About Us
            </h1>
            <div className="container mx-auto sm:px-4 my-5">
                <div className="flex flex-wrap ">
                    <div className="md:w-1/2 py-4">
                        <p className="py-4">
                            At this company, we're committed to delivering the best in [product/service]. With a focus on innovation and dedication, we have a vision for making a positive impact.
                            <br /><br />
                            Our Mission:
                        </p>
                        <ul>
                            <li>Best Quality: We always strive for top-notch quality.</li>
                            <li>Innovation: We're constantly seeking new ways to improve.</li>
                            <li>Expert Team: Our team is skilled and dedicated.</li>
                            <li>Your Community: We listen to our customers.</li>
                        </ul>
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
    )
}