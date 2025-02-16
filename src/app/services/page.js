'use client';

import Head from 'next/head';
import { Shield, Server, Laptop, Cloud, Users, Phone } from 'lucide-react';
import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const services = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity Solutions",
    description: "Comprehensive protection including SOC, SIEM, penetration testing, and security risk assessment",
    features: ["24/7 Continuous Monitoring", "Managed Detection & Response (MDR)", "Disaster Recovery", "Security Training"],
    image: "/services/img1.png",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "IT Infrastructure",
    description: "Complete infrastructure management and deployment services",
    features: ["Network Management", "Server Room Configuration", "Infrastructure Security", "Office IT Relocation"],
    image: "/services/img2.png",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "IT Support",
    description: "Multi-level technical support for all your IT needs",
    features: ["Level 1 - Basic Support", "Level 2 - Professional Support", "Level 3 - Expert Support", "24/7 Help Desk"],
    image: "/services/img3.png",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    description: "Private cloud solutions and managed services",
    features: ["Private Cloud Hosting", "Data Backups", "Disaster Recovery", "Cloud Migration"],
    image: "/services/img4.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing and content creation",
    features: [
      "Social Media Management",
      "Content Creation",
      "Marketing Strategy",
      "Campaign Management"
    ],
    image: "/services/img5.png",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Mobile Security Solutions",
    description: "Leading provider of mobile security display systems",
    features: [
      "Electronic Display Security",
      "Retail Security Solutions",
      "RFID Systems",
      "EAS Gate Systems"
    ],
    image: "/services/img6.png",
    color: "from-yellow-500 to-orange-600"
  }
];

const ImageCarousel = () => (
  <div className="flex justify-center py-8 bg-gray-100 my-24">
    <div className="w-full max-w-4xl h-96"> {/* Set max width for larger screens */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        loop={true}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full"> {/* Use h-full for responsive height */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);





const ServiceCard = ({ service, isActive, onHover }) => (
  <div
    className="relative bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden group"
    onMouseEnter={onHover}
    onMouseLeave={() => onHover(null)}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
    <div className="p-8">
      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
        {service.icon}
      </div>
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
        {service.title}
      </h2>
      <p className="text-gray-600 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
        {service.description}
      </p>
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700 group">
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 group-hover:scale-125 transition-transform duration-300`} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header /><br></br><br></br><br></br>
      <Head>
        <title>Our Services - Aaron North America Ltd</title>
        <meta name="description" content="Comprehensive IT and security services offered by Aaron North America Ltd" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-blue-100">
            Comprehensive IT solutions tailored to elevate your business in the digital age.
          </p>
        </div>
      </div>

      <ImageCarousel />

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isActive={activeService === index}
              onHover={() => setActiveService(index)}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how our services can help you achieve your business goals and stay ahead in the digital landscape.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}