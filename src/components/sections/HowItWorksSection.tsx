import React, { useEffect, useRef } from 'react';
import { Upload, BarChart, CreditCard } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ icon, number, title, description, delay }) => {
  return (
    <div className={`animate-on-scroll animate-fade-up delay-${delay} flex flex-col items-center text-center`}>
      <div className="relative mb-6">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-4">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-600 dark:bg-accent-500 text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-xs">{description}</p>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
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
    <section id="how-it-works" ref={sectionRef} className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="animate-on-scroll animate-fade-up">How It Works</h2>
          <p className="animate-on-scroll animate-fade-up delay-100">
            SoftSell makes it easy to get value from your unused software licenses in just three simple steps.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <Step 
            icon={<Upload size={28} />}
            number={1}
            title="Upload License"
            description="Submit your license details through our secure portal for initial assessment."
            delay={100}
          />
          
          <Step 
            icon={<BarChart size={28} />}
            number={2}
            title="Get Valuation"
            description="Our AI-powered system analyzes market data to determine a fair and competitive price."
            delay={200}
          />
          
          <Step 
            icon={<CreditCard size={28} />}
            number={3}
            title="Get Paid"
            description="Accept our offer and receive payment through your preferred method within 48 hours."
            delay={300}
          />
        </div>
        
        <div className="animate-on-scroll animate-fade-up delay-400 mt-16 text-center">
          <a href="#contact" className="btn btn-primary px-8 py-3 rounded-lg">
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;