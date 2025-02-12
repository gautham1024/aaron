// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Monitor, Clock, Server } from 'lucide-react';
import Header from './Header'
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Head>
        <title>Aaron North America Ltd - IT Services & Cybersecurity</title>
        <meta name="description" content="Professional IT Services, Cybersecurity, and Infrastructure Solutions" />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Secure Your Digital Future</h1>
            <p className="text-xl mb-8">
              Comprehensive IT services, cybersecurity solutions, and infrastructure management for businesses across North America
            </p>
            <Link href="/contact" className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-600">Our Core Services</h2>
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

      {/* Why Choose Us */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Aaron?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Global Presence"
              description="Established in 2007, we've expanded across Canada, USA, India, China, Hong Kong & Vietnam"
            />
            <FeatureCard
              title="Proven Experience"
              description="Over 200 employees globally with 10M+ USD turnover for the Aaron group"
            />
            <FeatureCard
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
  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="p-6 border border-gray-200 rounded-xl">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);