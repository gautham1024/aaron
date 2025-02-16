'use client'
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Globe, Users, Award, Building } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const CountUpAnimation = ({ endValue, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const endNum = parseFloat(endValue.replace(/[^0-9.]/g, ''));
    
    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      
      const currentCount = Math.min((progress / duration) * endNum, endNum);
      setCount(Math.floor(currentCount));
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(endNum);
      }
    };
    
    requestAnimationFrame(animate);
  }, [endValue, duration]);

  return <>{prefix}{count}{suffix}</>;
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      year: "2007",
      event: "Established in Hong Kong"
    },
    {
      year: "2015",
      event: "Became leading IT support provider"
    },
    {
      year: "2020",
      event: "Expanded to North America"
    },
    {
      year: "2024",
      event: "Reached 200+ global employees"
    }
  ];

  const stats = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      value: "6",
      label: "Countries",
      prefix: "",
      suffix: ""
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: "200",
      label: "Employees",
      prefix: "",
      suffix: "+"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      value: "10",
      label: "USD Revenue",
      prefix: "$",
      suffix: "M+"
    },
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      value: "1000",
      label: "Clients Served",
      prefix: "",
      suffix: "+"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header /><br></br><br></br><br></br>
      <Head>
        <title>About Us - Aaron North America Ltd</title>
        <meta name="description" content="Learn about Aaron North America Ltd's journey and achievements" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl max-w-3xl leading-relaxed">
              From our humble beginnings in Hong Kong to becoming a global IT services provider,
              we've been committed to delivering excellence in technology solutions since 2007.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                  <div className="flex justify-center mb-6">{stat.icon}</div>
                  <div className="text-4xl font-bold text-blue-800 mb-3">
                    <CountUpAnimation 
                      endValue={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex mb-12 last:mb-0 group">
                <div className="w-32 flex-shrink-0 text-right pr-8 font-bold text-blue-800 text-xl">
                  {milestone.year}
                </div>
                <div className="flex-grow pl-8 border-l-2 border-blue-200">
                  <div className="relative -ml-4 -mt-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <div className="mt-2 text-lg text-gray-700">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <ValueCard
              title="Excellence"
              description="We strive for excellence in every service we provide, ensuring the highest quality solutions for our clients."
            />
            <ValueCard
              title="Innovation"
              description="Staying at the forefront of technology to provide cutting-edge solutions that drive business growth."
            />
            <ValueCard
              title="Integrity"
              description="Building trust through transparent practices and honest relationships with our clients and partners."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const ValueCard = ({ title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);