import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, company, rating, delay }) => {
  return (
    <div className={`animate-on-scroll animate-fade-up delay-${delay} card p-6 md:p-8 relative`}>
      <div className="absolute top-6 right-6 text-gray-200 dark:text-gray-700">
        <Quote size={36} />
      </div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={20} 
            fill={i < rating ? 'currentColor' : 'none'} 
            className={i < rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'} 
          />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">"{quote}"</p>
      <div className="mt-6">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {role}, {company}
        </p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
  
  return (
    <section id="testimonials" ref={sectionRef} className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="animate-on-scroll animate-fade-up">What Our Clients Say</h2>
          <p className="animate-on-scroll animate-fade-up delay-100">
            Don't just take our word for it. Here's what businesses like yours have to say about SoftSell.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonial 
            quote="SoftSell helped us recover almost 85% of our initial investment on unused enterprise software licenses. The process was quick and their valuation was spot on."
            name="Sarah Johnson"
            role="CTO"
            company="TechNova Inc."
            rating={5}
            delay={100}
          />
          
          <Testimonial 
            quote="As a growing startup, we needed to optimize our software budget. SoftSell allowed us to sell licenses we no longer needed and reinvest in tools we actually use."
            name="Michael Chen"
            role="Operations Director"
            company="Quantum Solutions"
            rating={5}
            delay={200}
          />

          <Testimonial 
            quote="The security and compliance aspects of SoftSell's platform gave our legal team peace of mind. The entire transfer process was documented and audit-ready."
            name="David Rodriguez"
            role="IT Director"
            company="Global Finance Partners"
            rating={4}
            delay={300}
          />
          
          <Testimonial 
            quote="I was skeptical about reselling our unused licenses, but SoftSell made it incredibly easy. Their team provided expert guidance throughout the entire process."
            name="Jennifer Adams"
            role="Procurement Manager"
            company="Atlas Manufacturing"
            rating={5}
            delay={400}
          />
        </div>
        
        <div className="animate-on-scroll animate-fade-up delay-500 mt-16 text-center">
          <a href="#contact" className="btn btn-primary px-8 py-3 rounded-lg">
            Get Your Valuation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;