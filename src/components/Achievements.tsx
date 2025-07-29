import React from 'react';
import { Award, Users, Video, BookOpen, Mic, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Data Quest Competition Organizer',
      description: 'Organized and mentored participants in inter-college data science competition, guiding students through real-world data challenges.',
      icon: Trophy,
      color: 'blue',
      category: 'Leadership'
    },
    {
      title: 'Co-authored Research Project',
      description: 'Co-authored comprehensive project report on special education, contributing to academic research and social impact.',
      icon: BookOpen,
      color: 'teal',
      category: 'Research'
    },
    {
      title: 'YouTube Mentor & Educator',
      description: 'Teaching data science concepts and programming skills to students through engaging video content and tutorials.',
      icon: Video,
      color: 'purple',
      category: 'Teaching'
    },
    // {
    //   title: 'Tech Event Speaker',
    //   description: 'Active participation and speaking at various tech events, sharing knowledge about data science and machine learning.',
    //   icon: Mic,
    //   color: 'orange',
    //   category: 'Speaking'
    // },
    // {
    //   title: 'Community Mentorship',
    //   description: 'Mentoring aspiring data scientists and helping them navigate their learning journey in analytics and ML.',
    //   icon: Users,
    //   color: 'green',
    //   category: 'Mentoring'
    // },
    {
      title: 'Academic Excellence',
      description: 'Consistently maintaining high academic performance while actively contributing to practical projects and research.',
      icon: Award,
      color: 'indigo',
      category: 'Academic'
    }
  ];

  const explorationAreas = [
    { name: 'Computer Vision', icon: '👁️', progress: 75 },
    { name: 'Deep Learning', icon: '🧠', progress: 70 },
    { name: 'Natural Language Processing', icon: '📝', progress: 65 },
    { name: 'MLOps', icon: '⚙️', progress: 60 },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 from-blue-500 to-blue-600',
      teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 from-teal-500 to-teal-600',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 from-purple-500 to-purple-600',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 from-orange-500 to-orange-600',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 from-green-500 to-green-600',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 from-indigo-500 to-indigo-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            Achievements & Activities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Contributing to the data science community through leadership, education, and innovation
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const colorClasses = getColorClasses(achievement.color);
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses.split(' ').slice(0, 4).join(' ')}`}>
                    <IconComponent size={24} className={colorClasses.split(' ').slice(4, 8).join(' ')} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses.split(' ').slice(0, 4).join(' ')}`}>
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Exploration */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Currently Exploring
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Expanding knowledge in cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {explorationAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-3xl mb-2">{area.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {area.name}
                </h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-500"
                    style={{ width: `${area.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {area.progress}% Progress
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Students Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Events Organized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-400">YouTube Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;