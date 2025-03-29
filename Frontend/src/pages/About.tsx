
import { useEffect } from 'react';
import { Shield, Heart, Users, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Timeline data
  const timeline = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'MindConnect was founded with a mission to make mental healthcare accessible to everyone.'
    },
    {
      year: '2019',
      title: 'Initial Platform',
      description: 'Launched our initial platform connecting patients with licensed therapists through video sessions.'
    },
    {
      year: '2020',
      title: 'Medication Service',
      description: 'Expanded our services to include prescription management and medication delivery.'
    },
    {
      year: '2021',
      title: 'Growth & Expansion',
      description: 'Expanded our network to over 1,000 therapists across the country.'
    },
    {
      year: '2022',
      title: 'Improved Technology',
      description: 'Implemented AI matching to better connect patients with suitable therapists.'
    },
    {
      year: '2023',
      title: 'Today',
      description: 'Serving thousands of patients with comprehensive mental health services.'
    }
  ];

  // Team members
  const team = [
    {
      name: 'Dr. James Wilson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
      bio: 'Psychiatrist with 15 years of experience, passionate about mental health accessibility.'
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3',
      bio: 'Board-certified psychiatrist specializing in anxiety and depression treatment.'
    },
    {
      name: 'Mark Johnson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
      bio: 'Tech innovator with expertise in creating secure healthcare platforms.'
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Patient Experience',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1998&ixlib=rb-4.0.3',
      bio: 'Dedicated to creating positive and effective patient journeys and experiences.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-calm-50">
      {/* Hero Section */}
      <section className="py-16 bg-mind-600 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mind-500 rounded-full opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-mind-500 rounded-full opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About MindConnect
            </h1>
            <p className="text-mind-100 text-lg mb-4">
              We're on a mission to make mental healthcare accessible, affordable, and effective for everyone.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-mind-100 rounded-full opacity-70 blur-3xl" />
              <div className="relative glass rounded-3xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-mind-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-calm-900 mb-2">Trust & Safety</h3>
                    <p className="text-calm-600 text-sm">Licensed professionals and secure platform.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-mind-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-calm-900 mb-2">Compassionate Care</h3>
                    <p className="text-calm-600 text-sm">Patient-centered approach to mental health.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-mind-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-calm-900 mb-2">Accessibility</h3>
                    <p className="text-calm-600 text-sm">Making mental healthcare available to all.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-mind-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-calm-900 mb-2">Convenience</h3>
                    <p className="text-calm-600 text-sm">24/7 access to care from anywhere.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700">
                  Our Mission
                </span>
                <h2 className="text-3xl font-bold text-calm-900 mt-4 mb-6">
                  Making Mental Healthcare Accessible to Everyone
                </h2>
                <p className="text-lg text-calm-600">
                  At MindConnect, we believe that everyone deserves access to quality mental healthcare. Our platform bridges the gap between patients and mental health professionals, making it easier to get the support you need, when you need it.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-mind-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-calm-900">Quality Care</h3>
                    <p className="text-calm-600">
                      We partner with licensed therapists and psychiatrists who provide evidence-based care.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-mind-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-calm-900">Convenience</h3>
                    <p className="text-calm-600">
                      Access therapy sessions from anywhere with an internet connection, at times that suit you.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-mind-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-calm-900">Comprehensive Care</h3>
                    <p className="text-calm-600">
                      From therapy to medication management, we provide end-to-end mental health services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 bg-calm-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-calm-900 mt-4 mb-6">
              The MindConnect Story
            </h2>
            <p className="text-lg text-calm-600">
              From our humble beginnings to where we are today, we've been driven by a passion to transform mental healthcare.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-mind-200 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row md:justify-between items-center gap-8 relative`}
                >
                  {/* Left Content (even items) */}
                  <div className={`md:w-5/12 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-calm-100">
                      <span className="text-mind-600 font-bold text-xl">{item.year}</span>
                      <h3 className="text-xl font-semibold text-calm-900 mt-2 mb-3">{item.title}</h3>
                      <p className="text-calm-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Point */}
                  <div className="w-8 h-8 bg-mind-600 rounded-full border-4 border-white z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  
                  {/* Right Content (odd items) */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700">
              Our Team
            </span>
            <h2 className="text-3xl font-bold text-calm-900 mt-4 mb-6">
              Meet the People Behind MindConnect
            </h2>
            <p className="text-lg text-calm-600">
              Our team of healthcare professionals, technologists, and patient advocates are dedicated to transforming mental healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <div className="aspect-square bg-calm-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-calm-900">{member.name}</h3>
                <p className="text-mind-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-calm-50">
        <div className="container mx-auto px-6">
          <div className="bg-mind-600 rounded-3xl overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-mind-500 rounded-full opacity-20" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-mind-500 rounded-full opacity-20" />
            
            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Us in Our Mission
              </h2>
              <p className="text-mind-100 text-lg max-w-3xl mx-auto mb-8">
                Whether you're looking for support or want to join our network of therapists, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/therapists" className="bg-white text-mind-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-calm-50 transition-colors">
                  Find a Therapist
                </Link>
                <Link to="/contact" className="bg-mind-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-mind-800 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
