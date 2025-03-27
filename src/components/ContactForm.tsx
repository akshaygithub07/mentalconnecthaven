
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Your message has been sent!', {
        description: 'We will get back to you as soon as possible.',
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        subject: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-40 h-40 bg-mind-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
      
      <div className="relative">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-calm-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-calm-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-calm-700">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select a subject</option>
              <option value="therapy">Therapy Inquiry</option>
              <option value="medication">Medication Inquiry</option>
              <option value="technical">Technical Support</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-calm-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="input-field resize-none"
              placeholder="How can we help you?"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
