import HeaderComponent from "@/components/HeaderComponent";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <section className='bg-gray-100'>
        <HeaderComponent>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Contact Us
          </h4>
        </HeaderComponent>

        <div className='container mx-auto px-4 py-12'>
          <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
              <div className='flexItem'>
                <FaEnvelope className='text-blue-500 mr-2' />
                <p>successtravel31@gmail.com</p>
              </div>
              <div className='flexItem'>
                <FaPhone className='text-blue-500 mr-2' />
                <p>+2348128032967</p>
              </div>
              <div className='flexItem'>
                <FaMapMarkedAlt className='text-blue-500 mr-2' />
                <p>Ifite, Close to wintess garden Awka South, Anambra State</p>
              </div>
              <hr className="w-full mx-auto bg-blue-200 my-[1rem]"/>
              If you have any question regarding flights, visa or any travel related services feel free to chat us at 
              <Link
                  href='https://api.whatsapp.com/send?phone=2348139738894&text=Hello, more information!'
                  target='_blank'
                >
                  <div className="flex items-center"><FaWhatsapp
                    size={24}
                    className='text-green-400 hover:text-green-500 motion cursor-pointer font-bold'
                  /><p className="font-bold italic ml-[.5rem] mt-[.5rem]">+2348139738894</p></div>
                  
                </Link>
                OR
              <Link
                  href='https://api.whatsapp.com/send?phone=2348128032967&text=Hello, more information!'
                  target='_blank'
                >
                  <div className="flex items-center"><FaWhatsapp
                    size={24}
                    className='text-green-400 hover:text-green-500 motion cursor-pointer font-bold'
                  /><p className="font-bold italic ml-[.5rem] mt-[.5rem]">+2348128032967</p></div>
                  
                </Link>
            </div>

            {/* form */}
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
              <form action='#'>
                <div className='mb-4'>
                  <label className='block text-gray-700 mb-2' htmlFor='Name'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='w-full p-2 border border-gray-300 rounded'
                    name='Name'
                    placeholder='Enter name'
                  />
                </div>
                <div>
                  <label htmlFor='Email' className='block text-gray-700 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='Email'
                    className='w-full p-2 border border-gray-300 rounded'
                    placeholder='Enter Email'
                  />
                </div>
                <div>
                  <label htmlFor='Name' className='block text-gray-700 mb-2'>
                    Message
                  </label>
                  <textarea
                    name=''
                    id=''
                    placeholder='Write Message'
                    className='w-full p-2 border border-gray-300 rounded'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='py-2 px-4 bg-blue-500 text-white rounded'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
