import { useEffect } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Clock, Shield, Video, UserCheck, CheckCircle, Package, Star } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <UserCheck className="w-10 h-10 text-mind-500" />,
      title: 'Licensed Therapists',
      description: 'Connect with verified and licensed mental health professionals.'
    },
    {
      icon: <Video className="w-10 h-10 text-mind-500" />,
      title: 'Video Sessions',
      description: 'Secure, high-quality video therapy from the comfort of home.'
    },
    {
      icon: <Package className="w-10 h-10 text-mind-500" />,
      title: 'Medication Delivery',
      description: 'Convenient delivery of prescribed medications to your door.'
    },
    {
      icon: <Shield className="w-10 h-10 text-mind-500" />,
      title: 'Privacy Protected',
      description: 'Your data and sessions are secured with end-to-end encryption.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah L.',
      role: 'Patient',
      comment: 'MindConnect made it so easy to find a therapist that matched my needs. The video sessions are seamless, and I appreciate being able to attend from home.',
      rating: 5
    },
    {
      name: 'Michael T.',
      role: 'Patient',
      comment: 'The medication delivery service is incredibly convenient. No more waiting in line at the pharmacy, and the reminders help me stay on track with my treatment.',
      rating: 5
    },
    {
      name: 'Jessica K.',
      role: 'Therapist',
      comment: 'As a therapist, MindConnect provides me with an excellent platform to connect with patients and manage my practice efficiently.',
      rating: 4
    }
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-calm-900 mt-4 mb-6">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-lg text-calm-600">
              Our platform provides end-to-end mental health services, from finding the right therapist
              to managing your medication needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-calm-100 hover:shadow-md transition-all duration-300 opacity-0 animate-slide-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-16 h-16 rounded-2xl bg-mind-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-calm-900 mb-3">{feature.title}</h3>
                <p className="text-calm-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="inline-flex items-center text-mind-600 font-medium hover:text-mind-700 transition-colors">
              <span>Learn more about our services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-calm-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-mind-100 rounded-full opacity-50 blur-3xl" />
                <div className="relative z-10 space-y-8">
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700">
                    Simple Process
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-calm-900 leading-tight">
                    Easy Steps to Better Mental Health
                  </h2>
                  <p className="text-lg text-calm-600">
                    We've simplified the process of getting mental health support. Follow these steps to start your journey to well-being.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center">
                        <span className="text-mind-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-calm-900 mb-2">Create an Account</h3>
                        <p className="text-calm-600">
                          Sign up in minutes with a simple verification process.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center">
                        <span className="text-mind-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-calm-900 mb-2">Find Your Therapist</h3>
                        <p className="text-calm-600">
                          Browse profiles and choose a therapist that meets your needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center">
                        <span className="text-mind-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-calm-900 mb-2">Schedule Sessions</h3>
                        <p className="text-calm-600">
                          Book appointments at times that work for your schedule.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center">
                        <span className="text-mind-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-calm-900 mb-2">Manage Medications</h3>
                        <p className="text-calm-600">
                          Order prescribed medications and set up regular deliveries.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Link to="/therapists" className="btn-primary mr-4">
                      Find a Therapist
                    </Link>
                    <Link to="/medications" className="btn-secondary">
                      Order Medications
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-wellness-100 rounded-full opacity-70 blur-3xl" />
                <div className="relative">
                  <div className="w-16 h-16 absolute top-0 right-8 bg-mind-100 rounded-full opacity-70 animate-float" style={{ animationDelay: '0.5s' }} />
                  <div className="w-12 h-12 absolute bottom-16 left-0 bg-wellness-100 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }} />
                  
                  <div className="glass rounded-3xl p-6 md:p-10 shadow-xl opacity-0 animate-slide-in-right" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-calm-100">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-mind-600" />
                            <span className="font-medium text-calm-800">Therapy</span>
                          </div>
                          <div className="px-3 py-1 bg-mind-50 text-mind-600 rounded-full text-xs font-medium">
                            Upcoming
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-calm-900 mb-2">Dr. Emily Chen</h4>
                        <div className="flex items-center text-calm-500 text-sm mb-4">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Tomorrow, 10:00 AM</span>
                        </div>
                        <button className="w-full py-2 bg-mind-600 text-white rounded-lg font-medium hover:bg-mind-700 transition-colors">
                          Join Session
                        </button>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-calm-100">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <Package className="w-5 h-5 text-wellness-600" />
                            <span className="font-medium text-calm-800">Medication</span>
                          </div>
                          <div className="px-3 py-1 bg-wellness-50 text-wellness-600 rounded-full text-xs font-medium">
                            In Transit
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-calm-900 mb-2">Monthly Prescription</h4>
                        <div className="flex items-center text-calm-500 text-sm mb-4">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>Arriving in 2 days</span>
                        </div>
                        <button className="w-full py-2 bg-wellness-600 text-white rounded-lg font-medium hover:bg-wellness-700 transition-colors">
                          Track Order
                        </button>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-calm-100">
                        <div className="w-12 h-12 rounded-full bg-mind-50 flex items-center justify-center mb-4">
                          <CheckCircle className="w-6 h-6 text-mind-500" />
                        </div>
                        <h4 className="text-lg font-semibold text-calm-900 mb-2">Progress Tracking</h4>
                        <p className="text-calm-600 text-sm">Monitor your mental health journey with our tracking tools</p>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-calm-100">
                        <div className="w-12 h-12 rounded-full bg-wellness-50 flex items-center justify-center mb-4">
                          <Shield className="w-6 h-6 text-wellness-500" />
                        </div>
                        <h4 className="text-lg font-semibold text-calm-900 mb-2">Secure Platform</h4>
                        <p className="text-calm-600 text-sm">Your information is protected with the highest security standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-calm-900 mt-4 mb-6">
              What Our Users Say
            </h2>
            <p className="text-lg text-calm-600">
              Read about the experiences of people who have used our platform to improve their mental health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-calm-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-calm-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-calm-600 mb-6">"{testimonial.comment}"</p>
                <div>
                  <h4 className="font-semibold text-calm-900">{testimonial.name}</h4>
                  <p className="text-calm-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-mind-600 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mind-500 rounded-full opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-mind-500 rounded-full opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Mental Health Journey Today
            </h2>
            <p className="text-mind-100 text-lg mb-8">
              Connect with a therapist, order medications, and begin your path to better mental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapists" className="bg-white text-mind-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-calm-50 transition-colors">
                Find a Therapist
              </Link>
              <Link to="/medications" className="bg-mind-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-mind-800 transition-colors">
                Order Medications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
