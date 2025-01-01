import HeaderComponent from "@/components/HeaderComponent";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaWhatsapp} from "react-icons/fa";
import Link from "next/link";
import { socials } from "@/constants";

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

            {/* SOCIAL MEDIAS */}
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4 capitalize'>Follow us on our social media handles by clicking on the link to redirect you to our social media pages</h3>
              <div className="flex flex-col justify-center col-[2rem] gap-y-3">
                {socials.map((social)=>{
                  const {id, name, icon, link}= social
                  return <Link href= {link} className="flex gap-[.7rem]" key={id} target="_blank">
                      <span>{icon}</span>
                   <h2>{name} </h2>
                </Link>
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
