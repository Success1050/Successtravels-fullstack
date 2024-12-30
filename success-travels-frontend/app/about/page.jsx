import HeaderComponent from "@/components/HeaderComponent";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <section className='bg-gray-100'>
        <HeaderComponent>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center l:text-left px-[.7rem] xl:px-0 capitalize'>
            About success travels and tours
          </h4>
        </HeaderComponent>

        <div className='container mx-auto  px-4 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='flex items-center justify-center gap-8 w-[40%] mx-auto'>
              <Image
                src='/mylogo.png'
                width={500}
                height={350}
                layout="responsive"
                className='rounded-lg w-full'
              />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-bold mb-4 mt-[3.5rem] lg:mt-0 capitalize text-center md:text-left'>Who we are</h3>
              <p className='text-gray-700 mb-4'>
                We are a passionate travel agency commited to providing the best
                travel experiences for our clients. Our team of dedicated
                professionals works tirelessly to ensure your trips are seemless
                and unforgettable.
              </p>

              <h3 className='text-2xl font-bold mb-4 mt-[3.5rem] lg:mt-0 capitalize text-center md:text-left'>Our mission</h3>
              <p className='text-gray-700 mb-4'>
                Our mission is to create amazing travel experiences that inspire
                and enrich the lives of our clients. We believe in personalised
                services, attention to details and providing exceptional value
              </p>
            </div>
          </div>
      <hr className="w-full mx-auto sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-full m-[3rem] h-[3px] block bg-blue-200 rounded-lg"/>
          {/* about the founder */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-0 justify-center items-center'>
            <div className='flex items-center justify-center gap-8 w-[40%] mx-auto'>
              <Image
                src='/ceo.jpg'
                width={500}
                height={350}
                layout="responsive"
                className='rounded-lg w-full'
              />
            </div>
            <div><h3 className='text-2xl font-bold mb-4 mt-[3.5rem] lg:mt-0 capitalize text-center md:text-left'>About the founder</h3>
              <p className='text-gray-700 mb-4'>
                Welcome! I'm Ekwunife Emmanuel Chiemelie, a graduate with a Bachelor's degree in Electrical Engineering. Although I was born in Kano State, I proudly hail from Awkuzu, Oyi Local Government Area, in Anambra State. I am the son of Mr. Augustine and Mrs. Joy Ekwunife.

I previously gained valuable experience as an intern at Giftnuels Travels and Tours in Abuja, where I worked for a year, learning the ins and outs of the travel industry. I'm passionate about leveraging my technical knowledge and skills to make a positive impact in every field I engage with.
              </p></div>
            
              
            </div>
          </div>
      </section>
    </>
  );
};

export default AboutPage;
