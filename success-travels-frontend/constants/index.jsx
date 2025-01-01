import {
  FaPlane,
  FaUmbrellaBeach,
  FaHotel,
  FaCreditCard,FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok, FaGithub
} from "react-icons/fa";



export const navLinks = [
  {
    id: "home",
    href: "/",
    label: "Home",
  },
  {
    id: "about",
    href: "/about",
    label: "About",
  },

  {
    id: "services",
    href: "/services",
    label: "Services",
  },
  {
    id: "testimonials",
    href: "/testimonials",
    label: "Testimonials",
  },
  {
    id: "contact",
    href: "/contact",
    label: "Contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaPlane />,
    name: "Flight Booking",
    desc: "We provide quick and easy flight booking services both local and international flights to make your travel hassle free",
  },
  {
    id: 2,
    icon: <FaHotel />,
    name: "Hotel Booking ",
    desc: "Book hotel at the best prices with our exclusive deals and discounts",
  },
  {
    id: 3,
    icon: <FaUmbrellaBeach />,
    name: "Beach Tours",
    desc: "Enjoy relaxing beach tours with all-inclusive packages and guided tours",
  },
  {
    id: 4,
    icon: <FaCreditCard />,
    name: "Visa Processing",
    desc: "We process any kind of visa at very good discount.",
  },
];

export const mainServices = [
  {
    id: 1,
    img: "/visa.jpg",
    name: "Visa Processing",
    desc: "Giftnuels travel agency helps you with an easy visa processing with an affordable price.",
  },
  {
    id: 2,
    img: "/plane.jpg",
    name: "Flight Reservation",
    desc: "Giftnuels travel agency offers a cheap flight ticket and a reliable airline to any country you want to travel to.",
  },
  {
    id: 3,
    img: "/hotelimg.jpeg",
    name: "Hotel Reservation",
    desc: "Giftnuels travel agency can get you one of the best hotels with good security, conducive environment and an affordable price in any country you want.",
  },
  {
    id: 4,
    img: "/beachimg.jpg",
    name: "Vacation Packages",
    desc: "Giftnuels travel agency can organize a vacation package for you in any country of your choice at a cheap.",
  },
  {
    id: 5,
    img: "/pickupimg.jpg",
    name: "Hotel/Airport Pickup",
    desc: "Giftnuels travel agency can arrange a standard pickup with a competent driver to come pick you up at any hotel you are.",
  },
  {
    id: 6,
    img: "/consultationimg.jpg",
    name: "General Consultation",
    desc: "Giftnuels travel agency is open to any consultation, enquires or advice regarding our services",
  },
];

export const cities = [
  {
    id: 1,
    img: "/img1.jpg",
    name: "Paris, France",
    desc: "Paris the most popular city in the world. Its is the most visited city in the world. It recently hosted the olympics",
  },
  {
    id: 2,
    img: "/img2.jpg",
    name: "London, England",
    desc: "London is the home to football lovers. One of the most decorated city in the world",
  },
  {
    id: 3,
    img: "/img3.jpg",
    name: "Newyork, USA",
    desc: "Newyork is the largest city in the united state and destination to many tourist",
  },
  {
    id: 4,
    img: "/img4.jpg",
    name: "Tokyo, Japan",
    desc: "Tokyo has grown to be the destination of tourists who wants to see the world latest innovations",
  },
];

export const testimonials = [
  {
    id: 1,
    img: "/cus1.jpg",
    name: "Mr Jones ",
    desc: "This agency has been very deligent in executing their job. They have always given me good fares and prices.",
    email : 'emma@gmai.com'
  },
  {
    id: 2,
    img: "/cus2.jpg",
    name: "Mr Paul Peter",
    desc: "This agency has been very deligent in executing their job. They have always given me good fares and prices.",
    email : 'emma@gmai.com'
  },
  {
    id: 3,
    img: "/cus2.jpg",
    name: "Mrs Lydia Anna",
    desc: "This agency has been very deligent in executing their job. They have always given me good fares and prices.",
    email : 'emma@gmai.com'
  },
];

export const socials= [
  {
    id: 1,
    name: '@Emmysuccess freedom',
    icon: <FaFacebook size={24} className='text-blue-500 hover:text-blue-600 motion cursor-pointer'/>,
    link: 'https://www.facebook.com/emmanuel.ekunife?mibextid=ZbWKwL'
  },
  {
    id: 2,
    name: '@successemmanuel46',
    icon: <FaTiktok size={24} className='text-[#121212] hover:text-[#222] motion cursor-pointer'/>,
    link: 'https://www.tiktok.com/@successemmanuel46?_t=8siIO0gTN3t&_r=1'
  },
  {
    id: 3,
    name: '@emmanuel ekwunife',
    icon: <FaLinkedinIn size={24} className='text-blue-500 hover:text-blue-600 motion cursor-pointer'/>,
    link: 'https://www.linkedin.com/in/emmanuel-success'
  },
  {
    id: 4,
    name: '@success200431',
    icon: <FaTwitter size={24} className='text-blue-400 hover:text-blue-500 motion cursor-pointer'/>,
    link: 'https://x.com/success200431?t=RLvKjEP6Vq9TSRp4QlLjkw&s=09'
  },
  {
    id: 5,
    name: '@success_prop',
    icon: <FaInstagram size={24} className='text-pink-500 hover:text-pink-600 motion cursor-pointer'/>,
    link: 'https://www.instagram.com/success_prop?igsh=MW9oaWl0c2szY2hiYw=='
  },
  {
    id: 5,
    name: '@success1050',
    icon: <FaGithub size={24} className='text-[#121212] hover:text-[#222] motion cursor-pointer'/>,
    link: 'https://github.com/Success1050'
  },
]