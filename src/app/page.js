'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Monitor, Clock, Server, Award, Users, Globe, ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ClientMarquee from './ClientMarquee';

const AnimatedStat = ({ endValue, label }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`stat-${label}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [label]);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(endValue.replace(/[^0-9.]/g, ''));
    const duration = 2000; // Animation duration in milliseconds
    const increment = end / (duration / 16); // Update every 16ms (60 FPS)
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, isInView]);

  return (
    <div id={`stat-${label}`} className="text-center transform transition-all duration-500 hover:scale-105">
      <div className="text-3xl font-bold text-blue-600 mb-2">
        {count.toFixed(1).replace(/\.0$/, '')}
        {endValue.includes('+') ? '+' : ''}
        {endValue.includes('%') ? '%' : ''}
        {endValue.includes('/') ? '/7' : ''}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default function Home() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Worldwide' },
    { number: '99.9%', label: 'Uptime Guaranteed' },
    { number: '24/', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen">
      <Header /><br></br><br></br>
      <Head>
        <title>Aaron North America Ltd - IT Services & Cybersecurity</title>
        <meta name="description" content="Professional IT Services, Cybersecurity, and Infrastructure Solutions" />
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 to-blue-950 text-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-black/5">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto">
         
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Secure Your Digital Future
          </h1><br></br>
          
          <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl">
            Delivering enterprise-grade IT services, advanced cybersecurity solutions, and 
            strategic infrastructure management to organizations across North America.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg shadow-black/10 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} endValue={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Our Core Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Delivering comprehensive IT solutions tailored to your business needs with industry-leading expertise and support
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Shield className="w-12 h-12 text-blue-600" />}
              title="Cybersecurity"
              description="24/7 protection with SOC, SIEM & NOC solutions to safeguard your business assets"
            />
            <ServiceCard 
              icon={<Monitor className="w-12 h-12 text-blue-600" />}
              title="IT Support"
              description="Multi-level technical support available 24/7 for all your IT needs"
            />
            <ServiceCard 
              icon={<Server className="w-12 h-12 text-blue-600" />}
              title="Infrastructure"
              description="End-to-end infrastructure solutions with 4-hour SLA response time"
            />
            <ServiceCard 
              icon={<Clock className="w-12 h-12 text-blue-600" />}
              title="Digital Marketing"
              description="Strategic social media marketing and content creation services"
            />
          </div>
        </div>
      </div>

      {/* Client Network Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Trusted by Industry Leaders</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our growing network of satisfied clients from various industries across the globe
          </p>
          <ClientMarquee />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Why Choose Aaron?</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            With over 15 years of experience, we deliver excellence in every aspect of IT services
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-blue-600 mb-4" />}
              title="Global Presence"
              description="Established in 2007, we've expanded across Canada, USA, India, China, Hong Kong & Vietnam"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-blue-600 mb-4" />}
              title="Proven Experience"
              description="Over 200 employees globally with 10M+ USD turnover for the Aaron group"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-600 mb-4" />}
              title="24/7 Support"
              description="Round-the-clock monitoring and support with rapid response times"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const ServiceCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition group">
    <div className="mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 border border-gray-200 rounded-xl hover:border-blue-200 transition-colors">
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);