import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
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
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="animate-on-scroll animate-fade-up font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-500">Monetize</span> Your Unused Software Licenses
          </h1>
          <p className="animate-on-scroll animate-fade-up delay-100 text-xl text-gray-600 dark:text-gray-300 mb-8">
            SoftSell helps businesses recover value from unused software licenses. Get fair market valuations and sell your licenses quickly and securely.
          </p>
          <div className="animate-on-scroll animate-fade-up delay-200 flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="btn btn-primary text-lg px-8 py-3 rounded-lg"
            >
              Get a Quote
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="#how-it-works" 
              className="btn btn-outline text-lg px-8 py-3 rounded-lg"
            >
              Learn How It Works
            </a>
          </div>
          <div className="animate-on-scroll animate-fade-up delay-300 mt-12 flex flex-wrap gap-6 items-center text-gray-500 dark:text-gray-400">
            <p className="text-sm font-medium">Trusted by leading companies:</p>
            <div className="flex flex-wrap gap-8">
              <span className="font-bold text-lg opacity-70">ACME Inc.</span>
              <span className="font-bold text-lg opacity-70">TechCorp</span>
              <span className="font-bold text-lg opacity-70">DevSuite</span>
              <span className="font-bold text-lg opacity-70">CloudEx</span>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll animate-fade-up delay-200 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
          <div className="aspect-video bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
            <div className="text-center p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">How Much Are Your Licenses Worth?</h3>
              <p className="mb-8">Get an instant valuation and turn unused software into cash.</p>
              <a href="#contact" className="btn bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
                Sell Your Licenses
              </a>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-500">85%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Recovery of Original Value</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-500">48h</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Processing Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;