import { useEffect } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import {
  Video,
  Star,
  BrainCircuit,
  TrendingUp,
  MessageCircleHeart,
  Sunrise,
  ShieldCheck,
  CalendarCheck,
  Activity,
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-mind-600" />,
      title: "AI Chat Assistant",
      description: "24/7 mental health support with our intelligent chatbot",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-mind-600" />,
      title: "Mood Tracker",
      description: "Visualize emotional patterns with intelligent analytics",
    },
    {
      icon: <MessageCircleHeart className="w-8 h-8 text-mind-600" />,
      title: "Anonymous Chat",
      description: "Secure text-based therapy with licensed professionals",
    },
    {
      icon: <Video className="w-8 h-8 text-mind-600" />,
      title: "Video Therapy",
      description: "Face-to-face sessions from the comfort of home",
    },
    {
      icon: <Sunrise className="w-8 h-8 text-mind-600" />,
      title: "Daily Affirmations",
      description: "Personalized positive messages to start your day",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-mind-600" />,
      title: "Secure Platform",
      description: "HIPAA-compliant and end-to-end encrypted",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-mind-600" />,
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience",
    },
    {
      icon: <Activity className="w-8 h-8 text-mind-600" />,
      title: "Progress Reports",
      description: "Track your mental health journey over time",
    },
  ];

  const testimonials = [
    {
      name: "Emily R.",
      role: "Graphic Designer",
      comment:
        "The AI chatbot was my first step - it helped me understand I needed professional support. Now I use mood tracking daily and video therapy weekly. My mental health has never been more manageable!",
      rating: 5,
    },
    {
      name: "David M.",
      role: "College Student",
      comment:
        "Anonymous chat saved me. I wasn't ready for face-to-face therapy, but being able to message a licensed therapist gave me the courage to seek proper help. Game-changer!",
      rating: 5,
    },
    {
      name: "Priya S.",
      role: "Software Engineer",
      comment:
        "The daily affirmations and progress reports keep me motivated. I love how the platform combines AI tools with human therapists - it's like having 24/7 support!",
      rating: 5,
    },
    {
      name: "Marcus T.",
      role: "Freelancer",
      comment:
        "As someone who travels constantly, video therapy fits perfectly into my lifestyle. The medication delivery to different locations is a lifesaver!",
      rating: 5,
    },
    {
      name: "Sofia N.",
      role: "New Mom",
      comment:
        "Between feedings and naps, I use the mobile app for quick mood tracking and meditation. The AI insights help me understand my postpartum journey better.",
      rating: 5,
    },
    {
      name: "Dr. Angela W.",
      role: "Licensed Psychologist",
      comment:
        "The platform's analytics help me provide better care. I can track patients' progress between sessions and adjust treatment plans more effectively.",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-calm-900 mt-4 mb-6">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-lg text-calm-600">
              From mood tracking to secure video therapy, we combine
              cutting-edge technology with licensed professionals for
              comprehensive mental health support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-calm-100 hover:shadow-md transition-all duration-300 opacity-0 animate-slide-up"
                style={{
                  animationDelay: `${0.1 + index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-mind-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-calm-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-calm-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-calm-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Steps */}
            <div className="space-y-8">
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
                    We've simplified the process of getting mental health
                    support. Follow these steps to start your journey to
                    well-being.
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center">
                        <span className="text-mind-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-calm-900 mb-2">
                          Create an Account
                        </h3>
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
                        <h3 className="text-xl font-semibold text-calm-900 mb-2">
                          Use AI Assessment
                        </h3>
                        <p className="text-calm-600">
                          Our chatbot helps understand your needs and recommends
                          resources.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center">
                        <span className="text-mind-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-calm-900 mb-2">
                          Choose Your Path
                        </h3>
                        <p className="text-calm-600">
                          Select anonymous chat, video therapy, or medication
                          support.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center">
                        <span className="text-mind-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-calm-900 mb-2">
                          Track & Improve
                        </h3>
                        <p className="text-calm-600">
                          Use mood tracking and progress reports to monitor your
                          journey.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link to="/register" className="btn-primary">
                      Start Your Journey
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative z-10">
                <img
                  src="/images/mental-health-process.jpg"
                  alt="Mental health support process"
                  className="rounded-3xl"
                />
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
              Read about the experiences of people who have used our platform to
              improve their mental health.
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
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-calm-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-calm-600 mb-6">"{testimonial.comment}"</p>
                <div>
                  <h4 className="font-semibold text-calm-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-calm-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-mind-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mind-500 rounded-full opacity-20 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-mind-500 rounded-full opacity-20 animate-float-reverse" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-mind-600/95 to-mind-700/95 z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header Section */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your Mental Wellness Journey
            </h2>
            <p className="text-mind-100/90 text-xl mb-10 max-w-2xl mx-auto">
              Experience compassionate care through AI-powered tools, licensed
              therapists, and seamless medication management - all in one secure
              platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/register"
                className="relative group bg-white text-mind-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10">Begin Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-calm-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
