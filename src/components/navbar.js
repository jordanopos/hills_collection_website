import * as FontAwesome from "react-icons/fa"
import logo from "../assets/logo.png"

export default function NavBar() {
    return (
        <div className="h-16 fixed w-screen z-10 top-0 items-center bg-primary text-white justify-between flex">

            <div className="">
                <a rel="noreferrer" href="https://hillscollectionug.com"><img className="h-32" src={logo} alt="" /></a>
            </div>

            <div className="flex mr-10">
                <a rel="noreferrer" href="https://wa.me/256753274832?text=Hello%20Hills%20Collection%2C%20I%20have%20an%20inquiry%20about" target="_blank" className=""><FontAwesome.FaWhatsapp className="mr-4" size={23} /></a>
                <a rel="noreferrer" href="https://flutterwave.com/store/hillscollectionug" target="_blank">
                    <FontAwesome.FaShoppingBag size={23} />
                </a>
            </div>

        </div>
    );
}

