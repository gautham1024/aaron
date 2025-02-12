// pages/about.js
import Head from 'next/head';
import { Globe, Users, Award, Building } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

export default function About() {
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
      label: "Countries"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: "200+",
      label: "Employees"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      value: "10M+",
      label: "USD Revenue"
    },
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      value: "1000+",
      label: "Clients Served"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Head>
        <title>About Us - Aaron North America Ltd</title>
        <meta name="description" content="Learn about Aaron North America Ltd's journey and achievements" />
      </Head>

      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl">
            From our humble beginnings in Hong Kong to becoming a global IT services provider,
            we've been committed to delivering excellence in technology solutions since 2007.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="w-24 flex-shrink-0 text-right pr-6 font-bold text-blue-800">
                  {milestone.year}
                </div>
                <div className="flex-grow pl-6 border-l-2 border-blue-200">
                  <div className="relative -ml-3.5 -mt-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="mt-2">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);