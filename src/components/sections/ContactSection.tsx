import React, { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is being edited
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formState.company.trim()) {
      errors.company = "Company name is required";
    }
    
    if (!formState.licenseType) {
      errors.licenseType = "Please select a license type";
    }
    
    if (!formState.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormState({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: '',
        });
      }, 1500);
    }
  };
  
  return (
    <section id="contact" ref={sectionRef} className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="animate-on-scroll animate-fade-up">Get a Quote</h2>
          <p className="animate-on-scroll animate-fade-up delay-100">
            Ready to turn your unused software licenses into cash? Fill out the form below and our team will get back to you with a valuation.
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="animate-fade-in bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
              <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your message has been submitted successfully. Our team will contact you shortly with a valuation for your software licenses.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-on-scroll animate-fade-up delay-200 card p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`input ${formErrors.name ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`input ${formErrors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="john.doe@example.com"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="company" className="label">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className={`input ${formErrors.company ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="Acme Inc."
                  />
                  {formErrors.company && <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>}
                </div>
                
                <div>
                  <label htmlFor="licenseType" className="label">License Type</label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formState.licenseType}
                    onChange={handleChange}
                    className={`input ${formErrors.licenseType ? 'border-red-500 dark:border-red-500' : ''}`}
                  >
                    <option value="">Select License Type</option>
                    <option value="enterprise">Enterprise Software</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="security">Security Software</option>
                    <option value="productivity">Productivity Tools</option>
                    <option value="design">Design & Creative</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.licenseType && <p className="text-red-500 text-sm mt-1">{formErrors.licenseType}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className={`input resize-none ${formErrors.message ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="Please describe the software licenses you want to sell..."
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  type="submit" 
                  className="btn btn-primary px-8 py-3 rounded-lg text-lg font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2" size={20} />
                      Submit Request
                    </span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;