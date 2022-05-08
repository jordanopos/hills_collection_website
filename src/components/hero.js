import image from "../assets/hero_watch_2.png"

export default function Hero() {

    let launch = () => {
        window.open('https://flutterwave.com/store/hillscollectionug', "_blank")
    }
    return (
        <div className="w-screen">
            <div className="bg-primary text-white px-10 md:flex md:items-center md:px-44 md:justify-around">
                <div className='flex flex-col'>
                    <h1 className="font-bold font-safira text-xl md:text-5xl self-center pt-28 pb-3">The <span className="text-gold">Time</span>  is <span className="animate-pulse">Now</span></h1>
                    <h3 className="text-gray-500 text-md text-center font-sans"> With Hills Collection, you can have an authentic watch from top luxury brands and receive it quickly, safely and conveniently.</h3>
                    <button onClick={launch} className="mt-6 md:w-1/2 md:self-center md:mb-8 md:mt-10  text-center justify-center items-center outline outline-white outline-1 rounded-sm p-3 text-white hover:text-black hover:bg-white flex">

                        <h1 className="self-center">Shop Now</h1></button>
                </div>
                <div className="flex flex-col">
                    <img className="h-96 w-full self-center mt-10 mb-7" src={image} alt="Watch Hero" />
                </div>
            </div>

        </div>

    );
}