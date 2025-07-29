import React, { useState } from 'react';
import { Github, ExternalLink, Tag, Calendar } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Facial Recognition System for Secure Employee Identification',
      description: 'A comprehensive security system combining facial recognition with multi-factor authentication including OTP verification and servo lock integration.',
      problem: 'Secure access control for employee identification',
      approach: 'Python + OpenCV + GUI + OTP + Servo lock integration',
      results: 'Admin/guest modes with secure multi-factor authentication achieving 95% accuracy',
      technologies: ['Python', 'OpenCV', 'GUI', 'Security'],
      category: 'Computer Vision',
      github: 'https://github.com/A289shek2004/Facial-Recognition-System-for-Secure-Employee-Identification-project',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'Food Waste Management and Prediction',
      description: 'Machine learning solution to analyze and predict food waste patterns, helping organizations optimize their food management strategies.',
      problem: 'Analyze and predict food waste patterns to reduce environmental impact',
      approach: 'Comprehensive EDA + ML modeling to forecast waste generation',
      results: 'Prediction model achieved ~90% accuracy with actionable insights',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      category: 'Machine Learning',
      github: 'https://github.com/A289shek2004/Food-Waste-Management-and-Prediction',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop',
      featured: true
    },
    {
      title: 'CO₂ Emission Vehicles Analysis',
      description: 'Regression analysis to evaluate and predict vehicle emissions based on various automotive features and specifications.',
      problem: 'Evaluate vehicle emissions for environmental impact assessment',
      approach: 'Advanced regression modeling with comprehensive feature analysis',
      results: 'Predicted emissions with 75–80% R² score and feature importance insights',
      technologies: ['Python', 'Regression', 'Data Analysis', 'Visualization'],
      category: 'Data Analysis',
      github: 'https://github.com/A289shek2004/CO2_Emmision_Vehicles',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop',
      featured: false
    },
    {
      title: 'Mice Protein Expression Classification',
      description: 'Advanced classification system to detect protein-level experimental effects using machine learning algorithms.',
      problem: 'Detect protein-level experimental effects in biological research',
      approach: 'ML classification using Random Forest and SVM algorithms',
      results: 'Achieved 90%+ accuracy with robust feature selection',
      technologies: ['Python', 'Random Forest', 'SVM', 'Bioinformatics'],
      category: 'Machine Learning',
      github: 'https://github.com/A289shek2004/Mice-Protein-Expression-Classification-Using-ML-Project',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      featured: false
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Predictive analytics solution to identify customers likely to churn, enabling proactive retention strategies.',
      problem: 'Predict customer churn to improve retention strategies',
      approach: 'Logistic Regression + Random Forest with comprehensive EDA',
      results: '~85% accuracy with interactive BI dashboard for insights',
      technologies: ['Python', 'Logistic Regression', 'Power BI', 'EDA'],
      category: 'Data Analysis',
      github: 'https://github.com/A289shek2004/Churn_Project',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      featured: true
    }
  ];

  const categories = ['All', 'Machine Learning', 'Computer Vision', 'Data Analysis'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world applications solving complex problems with data science and machine learning
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                project.featured ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Problem-Approach-Results */}
                <div className="space-y-2 mb-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Problem:</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">{project.problem}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Approach:</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">{project.approach}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Results:</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">{project.results}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/A289shek2004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Github size={20} />
            <span className="font-semibold">View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;