import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated logo */}
          <div className="w-20 h-20 mx-auto mb-4">
            <div className="w-full h-full border-4 border-blue-200 dark:border-blue-800 rounded-full animate-pulse">
              <div className="w-full h-full border-4 border-transparent border-t-blue-600 rounded-full animate-spin">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">AG</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Loading text */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-poppins">
            Abhishek Gupta
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Loading Portfolio...
          </p>
        </div>

        {/* Loading animation */}
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;