
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: 'How do I book a therapy session?',
      answer: 'You can book a therapy session by browsing our therapist directory, selecting a therapist that matches your needs, and choosing an available time slot on their calendar. You\'ll receive a confirmation email with details for your session.'
    },
    {
      question: 'How does medication delivery work?',
      answer: 'After a consultation with one of our licensed providers, they may prescribe medication if appropriate. You can then order your prescription through our platform, and it will be delivered to your doorstep in discreet packaging, usually within 2-3 business days.'
    },
    {
      question: 'Is my information kept confidential?',
      answer: 'Yes, we take privacy and confidentiality very seriously. All personal and medical information is encrypted and securely stored in compliance with HIPAA regulations. Your information is only shared with the healthcare providers directly involved in your care.'
    },
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept a wide range of insurance plans. You can verify your coverage during registration or by contacting our support team. We also offer competitive self-pay rates for those without insurance coverage.'
    },
    {
      question: 'Can I switch therapists if it\'s not a good fit?',
      answer: 'Absolutely! We understand that finding the right therapist is important. If you feel your current therapist isn\'t the right match, you can switch to another provider at any time through your account settings or by contacting our support team.'
    },
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
              Get in Touch
            </h1>
            <p className="text-mind-100 text-lg mb-4">
              Have questions or need support? We're here to help you on your mental health journey.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700">
                  Contact Us
                </span>
                <h2 className="text-3xl font-bold text-calm-900 mt-4 mb-6">
                  We'd Love to Hear From You
                </h2>
                <p className="text-lg text-calm-600">
                  Whether you have questions about our services, need technical support, or want to provide feedback, our team is ready to assist you.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-mind-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-calm-900 mb-2">Our Location</h3>
                    <p className="text-calm-600">
                      1234 Mental Health Avenue, Suite 567<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-mind-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-calm-900 mb-2">Phone Support</h3>
                    <p className="text-calm-600">
                      General Inquiries: +1 (800) 123-4567<br />
                      Technical Support: +1 (800) 987-6543<br />
                      Emergency (24/7): +1 (800) 555-1234
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-mind-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-calm-900 mb-2">Email Us</h3>
                    <p className="text-calm-600">
                      General Information: <a href="mailto:info@mindconnect.com" className="text-mind-600 hover:underline">info@mindconnect.com</a><br />
                      Support Team: <a href="mailto:support@mindconnect.com" className="text-mind-600 hover:underline">support@mindconnect.com</a><br />
                      Partnership Inquiries: <a href="mailto:partners@mindconnect.com" className="text-mind-600 hover:underline">partners@mindconnect.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-mind-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-mind-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-calm-900 mb-2">Working Hours</h3>
                    <p className="text-calm-600">
                      Customer Support:<br />
                      Monday - Friday: 8:00 AM - 8:00 PM EST<br />
                      Saturday: 9:00 AM - 5:00 PM EST<br />
                      Sunday: Closed<br /><br />
                      <span className="text-mind-600 font-medium">24/7 Emergency Support Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-calm-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-mind-100 text-mind-700">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-calm-900 mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-calm-600">
              Find answers to common questions about our services, platform, and mental health care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-calm-900 mb-3">{faq.question}</h3>
                <p className="text-calm-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block p-6 bg-white rounded-xl shadow-sm border border-calm-100">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-mind-600" />
                <span className="font-semibold text-calm-900">Still have questions?</span>
              </div>
              <p className="text-calm-600 mb-4">
                If you couldn't find the answer to your question, feel free to reach out to our support team.
              </p>
              <button className="btn-primary">Contact Support</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="MindConnect Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1662489000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 glass-dark p-6 md:p-8 rounded-xl max-w-xs md:max-w-sm text-white">
              <h3 className="text-xl font-semibold mb-3">Visit Our Office</h3>
              <p className="mb-4 text-white/80">
                Our headquarters is located in the heart of New York City, easily accessible by public transportation.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white text-mind-600 rounded-lg font-medium hover:bg-calm-50 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
