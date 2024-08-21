import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="container relative flex flex-wrap items-center content-between py-3 px-4  bg-body-tertiary">
            <div className="container flex justify-between mx-auto sm:px-4">
                <div>
                    <Link
                        className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap"
                        to="#"
                    >
                        <img src="/logo.svg" alt="" />
                    </Link>
                </div>
                <div className="items-center" id="navbarNav">
                    <ul className="flex flex-wrap list-reset pl-0 mb-0 ms-auto">
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
                </div>
            </div>
        </nav>
    )
}
