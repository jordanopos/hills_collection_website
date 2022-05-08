export default function Testimonial() {
  return (
    <div className="px-10 md:px-32 md:py-10 bg-primary">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-100 mb-4 pt-10">
        Don't just take it from us!
      </h1>
      <section className="text-gray-300 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                {/* <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/302x302"
                /> */}
                <p className="leading-relaxed font-sans">
                  The Watch is durable and nice. Have had no issues with it. I'd
                  appreciate if a payment option we're put in place though that
                  would allow me to pay for watches in installments.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-300  font-sans font-medium title-font tracking-wider text-sm">
                  Ojangole Jonathan
                </h2>
                <p className="text-gray-500">Happy Customer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                {/* <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/300x300"
                /> */}
                <p className="leading-relaxed font-sans">
                  I purchased an Emporio Armani watch from Hills Collection and
                  I can give three words to describe their products authentic,
                  classy and attractive. I was impressed not only with the
                  quality but the general professionalism and care that they
                  give to every customer. I’d definitely recommend them.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-300 font-sans font-medium title-font tracking-wider text-sm">
                  Rhees Jamwa
                </h2>
                <p className="text-gray-500">Happy Customer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                {/* <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/305x305"
                /> */}
                <p className="leading-relaxed font-sans">
                  Great customer service. Good advice on what product to buy.
                  Great quality products.{" "}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-300 font-sans font-medium title-font tracking-wider text-sm">
                  Phillis
                </h2>
                <p className="text-gray-500">Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
