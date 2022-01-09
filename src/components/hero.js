import image from "../assets/hero_watch.png"

export default function Hero() {
    return (
        <div className="">
            <div className="bg-primary text-white px-10 md:fle md:items-center md:px-44 md:justify-around">
                <div className='flex flex-col'>
                    <h1 className="font-bold font-safira text-xl md:text-5xl self-center pt-28 pb-3">The <span className="text-gold">Time</span>  is <span className="animate-pulse">Now</span></h1>
                    <h3 className="text-gray-500 text-md text-center font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper risus sit amet aliquam blandit.</h3>
                    <button className="mt-6 md:w-1/2 md:self-center md:mb-8 md:mt-10  text-center justify-center items-center outline outline-white outline-1 rounded-sm p-3 text-white hover:text-black hover:bg-white flex">

                        <h1 className="self-center">Shop Now</h1></button>
                </div>
                <div className="flex flex-col">
                    <img className=" h-96 self-center mt-10 mb-7" src={image} alt="Watch Hero" />
                </div>
            </div>

        </div>

    );
}