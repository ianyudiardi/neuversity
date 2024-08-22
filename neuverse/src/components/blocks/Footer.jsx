import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <div className="container flex items-center justify-between py-3 px-4">
            <div className="container mx-auto">
                <img src="/logo.svg" alt="" />
            </div>
            <div className="container flex flex-col items-center">
                <ul className="flex list-reset items-center">
                    <li className="">
                        <Link
                            className="inline-block py-2 px-4 no-underline active"
                            aria-current="page"
                            to="#"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="">
                        <Link className="inline-block py-2 px-4 no-underline" to="#">
                            Features
                        </Link>
                    </li>
                    <li className="">
                        <Link className="inline-block py-2 px-4 no-underline" to="#">
                            Pricing
                        </Link>
                    </li>
                </ul>
                <p>copyright blablabla</p>
            </div>
            <div className="container flex justify-end">
                <img src="/ic--baseline-facebook.svg" alt="" />
                <img src="prime--twitter.svg" alt="" />
            </div>
        </div>
    )
}