import './App.css';
import BestSellerProducts from './components/best_seller';
import Hero from './components/hero';
import Aos from 'aos';
import Footer from './components/footer';
import 'aos/dist/aos.css'
import client from "./ApolloClient/client"
import { useEffect } from 'react';
import NavBar from './components/navbar';
import Testimonial from './components/testimonial';
import { ApolloProvider } from "@apollo/client"
import aboutImage from "./assets/hills_collection_about.jpeg"
import WhyHillsCollection from './components/why_hills_collection';
import ContactUs from './components/contact_us';
import FounderMessage from './components/founder';
import NewsLetter from './components/newsletter';
import AboutUs from './components/about_us';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <ApolloProvider client={client}>
      <div className="h-screen w-screen bg-white font-casual">

        <NavBar />
        <div data-aos="fade-up">
          <Hero />
        </div>


        <div data-aos="fade-left">
          <WhyHillsCollection />
        </div>


         
        <img className='px-10 pt-10 block md:hidden' data-aos="fade-right" src={aboutImage} alt="about hills collection" />


        <div data-aos="fade-right">
          <BestSellerProducts />
        </div>


        <div data-aos="fade-left">
          <AboutUs/>
        </div>


        <div data-aos="fade-up">
          <Testimonial />
        </div>


        {/* <FullProductScreen/> */}

        <section data-aos="fade-right" className="text-gray-600 body-font overflow-hidden">
          <div className="container px-10 pt-5 pb-10 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://htmldemo.hasthemes.com/ruiz/ruiz/assets/images/product/product-06.png" />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Featured</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Hublot Centenerial S Class</h1>
                <p className="leading-relaxed font-sans pb-10">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900 font-sans">Ush.300,000</span>
                  <button className="flex ml-auto text-white bg-gold border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded">View Store</button>
                </div>
              </div>
            </div>
          </div>
        </section>


        <FounderMessage />

        <div data-aos="fade-up">
          <ContactUs />
        </div>

        <div data-aos="fade-right">
          <NewsLetter />
        </div>

      

        <div data-aos="">
          <Footer />
        </div>
      </div>

    </ApolloProvider>
  );
}

export default App;
