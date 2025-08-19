import {FaPhone, FaArrowRight, FaGlobe} from 'react-icons/fa'
import NavBar2 from './nav2';
import Footer from './footer';
import ScrollTop from './scroll_top';
import Testimonials from './testimonial';


function About(){
        return(
                
                < >
                <NavBar2/>
    <div name='support' className='w-full mt-10'>
      
      
      <div className='max-w-[1240px] p-10 mt-20 mx-auto text-black1 relative'>
          <div className='px-4 py-12 '>
              <h3 className='text-3xl md:text-4xl text-black p-10 font-bold text-center lg:text-center'> The Royale Cleaners</h3>
              <p className='py-4 text-3xl text-black text-center'>The most convenient way to book a cleaning for your home & office.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-yellow-500 rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FaPhone size={50} className='w-16 p-4 bg-black1 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 md:text-xl'>
                      Royale Cleaners. Home & Office Cleaning is a curated online marketplace for home & office cleaning services. We work with background-checked, experienced cleaners in the UK.

                        </p>
                  </div>
                  
              </div>
              <div className='bg-yellow-500 mt-10  rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <FaGlobe size={50} className='w-16 p-4 bg-black1 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 md:text-xl'>

                      We continuously strive to provide you with the most convenient way to get a clean & comfortable environment for your home & office. We eliminate barriers in the access to cleaning services by working with English-speaking cleaners and offering an easy & secure way to book a cleaning appointment with a quick-to-submit booking form. Our "100% satisfaction guarantee" policy gives you peace of mind when scheduling a cleaning appointment.
                      </p>
                  </div>
                  
              </div>
              
          </div>
      </div>
  </div>

  <ScrollTop/>

  <Testimonials/>


                        
              <Footer/> 
               
                </>
        );
}

export default About;