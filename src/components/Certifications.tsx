import React from 'react';
import { ExternalLink, Calendar, Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python for Data Science and Machine Learning Bootcamp',
      issuer: 'Udemy',
      date: '2024',
      credentialId: 'UC-xxxxx',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
      verified: true,
      logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=64&h=64&fit=crop',
      color: 'blue'
    },
    {
      title: 'Data Analysis with Power BI',
      issuer: 'Microsoft',
      date: '2024',
      credentialId: 'MS-xxxxx',
      skills: ['Power BI', 'DAX', 'Data Modeling', 'Visualization'],
      verified: true,
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop',
      color: 'orange'
    },
    {
      title: 'SQL for Data Science',
      issuer: 'Coursera',
      date: '2023',
      credentialId: 'COURSERA-xxxxx',
      skills: ['SQL', 'Database Management', 'Data Querying'],
      verified: true,
      logo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=64&h=64&fit=crop',
      color: 'teal'
    },
    {
      title: 'Machine Learning A-Z',
      issuer: 'Udemy',
      date: '2023',
      credentialId: 'UC-yyyyy',
      skills: ['Regression', 'Classification', 'Clustering', 'Deep Learning'],
      verified: true,
      logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=64&h=64&fit=crop',
      color: 'purple'
    },
    {
      title: 'Data Visualization with Tableau',
      issuer: 'Tableau',
      date: '2023',
      credentialId: 'TB-xxxxx',
      skills: ['Tableau', 'Data Visualization', 'Dashboard Design'],
      verified: false,
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop',
      color: 'green'
    },
    {
      title: 'Google Data Analytics Certificate',
      issuer: 'Google',
      date: 'In Progress',
      credentialId: 'GOOGLE-xxxxx',
      skills: ['Analytics', 'R Programming', 'Data Cleaning', 'Visualization'],
      verified: false,
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=64&h=64&fit=crop',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400',
      orange: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10 text-orange-600 dark:text-orange-400',
      teal: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10 text-teal-600 dark:text-teal-400',
      purple: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400',
      green: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400',
      indigo: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            Certifications & Learning
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development in data science and analytics
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => {
            const colorClasses = getColorClasses(cert.color);
            
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${colorClasses}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  {cert.verified && (
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  )}
                </div>

                {/* Meta Information */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Award size={16} />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Skills Covered:</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${cert.verified ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.verified ? 'Verified' : cert.date === 'In Progress' ? 'In Progress' : 'Pending'}
                    </span>
                  </div>
                  {cert.verified && (
                    <button className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm">
                      <ExternalLink size={14} />
                      <span>View</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Progress */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Learning Journey Statistics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Hours Learned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Completion Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Continuous Learning Mindset
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Always expanding my knowledge base and staying updated with the latest trends 
              in data science, machine learning, and analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
                Currently Learning: Deep Learning
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
                Next: MLOps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;