import './App.css';
import  BannserSection2  from './components/banner';
import BestSellerProducts from './components/best_seller';
import Hero from './components/hero';
import Aos from 'aos';
import Footer from './components/footer';
import 'aos/dist/aos.css'
import client from "./ApolloClient/client"
import { useEffect } from 'react';
import NavBar from './components/navbar';
import Testimonial from './components/testimonial';
import {ApolloProvider} from "@apollo/client"
import FullProductScreen from './components/full_product_screen';
import aboutImage from "./assets/hills_collection_about.jpeg"
import AboutComponent from './components/about';

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

 
      <div data-aos="fade-up">
        <AboutComponent/>
      </div>

    

        <img className='px-10 pt-10' data-aos="fade-up" src={aboutImage} alt="about hills collection" />


      <div data-aos="fade-up">
        <BestSellerProducts />
      </div>


      <div data-aos="fade-up">
        <Testimonial />
      </div>


		<FullProductScreen/>


      <div data-aos="fade-up">
        <BannserSection2 />

      </div>

      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>

		</ApolloProvider>
     );
}

export default App;
