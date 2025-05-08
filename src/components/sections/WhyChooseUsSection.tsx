import React, { useEffect, useRef } from 'react';
import { Shield, Clock, BadgeDollarSign, Trophy } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`animate-on-scroll animate-fade-up delay-${delay} card p-6 md:p-8`}>
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const WhyChooseUsSection: React.FC = () => {
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
    <section id="why-choose-us" ref={sectionRef} className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="animate-on-scroll animate-fade-up">Why Choose Us</h2>
          <p className="animate-on-scroll animate-fade-up delay-100">
            SoftSell offers unique advantages that make selling your software licenses simple, secure, and profitable.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            icon={<Shield size={24} />}
            title="Secure Transactions"
            description="Our platform ensures all license transfers are secure, compliant, and protected with enterprise-grade encryption."
            delay={100}
          />
          
          <Feature 
            icon={<Clock size={24} />}
            title="Fast Processing"
            description="Get valuations within hours and complete transactions in as little as 48 hours from submission to payment."
            delay={200}
          />
          
          <Feature 
            icon={<BadgeDollarSign size={24} />}
            title="Best Value"
            description="Our market analysis tools ensure you get the highest possible value for your unused software licenses."
            delay={300}
          />
          
          <Feature 
            icon={<Trophy size={24} />}
            title="Expert Support"
            description="Our team of software licensing experts provides guidance throughout the entire process."
            delay={400}
          />
        </div>
        
        <div className="animate-on-scroll animate-fade-up delay-500 mt-16 bg-gradient-to-r from-blue-600 to-accent-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to turn unused licenses into revenue?</h3>
              <p className="mb-6 text-blue-100">Join thousands of businesses that have recovered millions in software costs.</p>
              <a href="#contact" className="btn bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold inline-block">
                Get Started
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-bold">$12M+</p>
                <p className="text-sm text-blue-100">Recovered for clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-blue-100">Client satisfaction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-bold">5,000+</p>
                <p className="text-sm text-blue-100">Successful sales</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-bold">35%</p>
                <p className="text-sm text-blue-100">Avg. cost savings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;