'use client'
import Head from 'next/head';
import { Shield, Server, Laptop, Cloud, Users, Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive protection including SOC, SIEM, penetration testing, and security risk assessment",
      features: [
        "24/7 Continuous Monitoring",
        "Managed Detection & Response (MDR)",
        "Disaster Recovery",
        "Security Training"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "IT Infrastructure",
      description: "Complete infrastructure management and deployment services",
      features: [
        "Network Management",
        "Server Room Configuration",
        "Infrastructure Security",
        "Office IT Relocation"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "IT Support",
      description: "Multi-level technical support for all your IT needs",
      features: [
        "Level 1 - Basic Support",
        "Level 2 - Professional Support",
        "Level 3 - Expert Support",
        "24/7 Help Desk"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Private cloud solutions and managed services",
      features: [
        "Private Cloud Hosting",
        "Data Backups",
        "Disaster Recovery",
        "Cloud Migration"
      ],
      color: "from-cyan-500 to-blue-600"
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
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Head>
        <title>Our Services - Aaron North America Ltd</title>
        <meta name="description" content="Comprehensive IT and security services offered by Aaron North America Ltd" />
      </Head>

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-6">Our Services</h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-blue-100">
            Comprehensive IT solutions tailored to elevate your business in the digital age
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20 -mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="p-8">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h2 className="text-2xl text-blue-600 font-bold mb-4 group-hover:text-blue-800 transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 group/button">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/button:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and stay ahead in the digital landscape.
          </p>
          <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}