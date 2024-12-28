import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <span>Available for hire</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Building the future,<br />
              <span className="text-blue-600 dark:text-blue-400">one commit at a time</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Software Developer based in Lahore, Pakistan. Passionate about creating innovative solutions
              and exploring new technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 dark:bg-blue-500/10 rounded-xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=500"
                alt="Profile"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;