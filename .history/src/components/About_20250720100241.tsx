import React from 'react';
import { GraduationCap, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            B.Sc (Data Science & Machine Learning), Mumbai University (2023–2026)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 p-1">
                <img
                  src="/image.png"
                  alt="Abhishek Gupta"
                  className="w-full h-full object-cover object-top rounded-full border-4 border-white dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-300 scale-125"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-float">
                ML
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold animate-float-delayed">
                AI
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Pursuing My final year of B.Sc in Data Science & ML,AI from Mumbai University. 
                    Focused on statistical analysis, machine learning algorithms, and practical data applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                  <Heart className="text-teal-600 dark:text-teal-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">My Passion</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm passionate about transforming raw data into actionable insights that drive real-world decisions. 
                    I love teaching data science concepts through YouTube and mentoring students in their data journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Lightbulb className="text-orange-600 dark:text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fun Fact</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    "Data is the new oil, but analytics is the refinery." - I believe in making complex data 
                    accessible and understandable for everyone. When I'm not coding, you'll find me creating 
                    educational content or exploring the latest ML research papers.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;