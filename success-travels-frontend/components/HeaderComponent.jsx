import Image from "next/image";
import Link from "next/link";

const HeaderComponent = ({ children }) => {
  return (
    <>
      <div
        className='relative h-screen bg-cover bg-center'
        style={{ backgroundImage: "url(/travelBanner.jpg)" }}
      >
         <div className="absolute top-[15%] left-1/2 translate-x-[-50%]"><Link href='/'><Image src= "/mylogo.png" width={50}
                              height={50}
                              className="rounded-[50%] w-[100px] h-[100px]"
                              layout="responsive"
                             
                              /></Link></div>
        <div className='absolute inset-0 top-[38%] lg:top-[65%] flex flex-col items-center justify-center'>
          {children}
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
