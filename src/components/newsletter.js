export default function NewsLetter(){
    return (

      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Join Our NewsLetter</h1>
          <p className="mb-8 leading-relaxed">Join our newsletter to get updates on new deals and promotions</p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="inline-flex text-white bg-gold border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">Subscribe</button>
          </div>
          <p className="text-sm mt-2 text-gray-500 w-full">Neutra shabby chic ramps, viral fixie.</p>
     
        </div>
      </div>
    </section>
    )
}