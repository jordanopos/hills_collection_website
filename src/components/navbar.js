import * as FontAwesome from "react-icons/fa"
import logo from "../assets/logo.png"

export default function NavBar() {
    return (
        <div className="h-16 fixed w-full z-10 top-0 items-center bg-primary text-white justify-between flex">

            <div className="">
                <a href="#"><img className="h-32" src={logo} alt="" /></a>
            </div>

            <div className="flex mr-10">
                <a href="https://google.com" className=""><FontAwesome.FaWhatsapp className="mr-4" size={23} /></a>
                <FontAwesome.FaShoppingBag size={23} />
            </div>

        </div>
    );
}