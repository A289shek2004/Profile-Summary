import React from 'react';
import { Code, Database, Brain, BarChart3, Monitor, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'R', level: 75 },
        { name: 'SQL', level: 90},
        { name: 'HTML/CSS', level: 75 },
      ]
    },
    {
      title: 'Data Libraries',
      icon: BarChart3,
      color: 'teal',
      skills: [
        { name: 'pandas', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 85 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'OpenCV', level: 70 },
      ]
    },
    {
      title: 'AI/ML Frameworks',
      icon: Brain,
      color: 'purple',
      skills: [
        { name: 'TensorFlow', level: 70 },
        { name: 'PyTorch', level: 70 },
        { name: 'Keras', level: 80 },
        { name: 'MLflow', level: 65 },
      ]
    },
    {
      title: 'BI Tools',
      icon: BarChart3,
      color: 'green',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Tableau', level: 75 },
        { name: 'Excel', level: 90 },
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'orange',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQLite', level: 80 },
        { name: 'PostgreSQL', level: 70 },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Monitor,
      color: 'indigo',
      skills: [
        { name: 'Jupyter', level: 95 },
        { name: 'VS Code', level: 90 },
        { name: 'RStudio', level: 80 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'PgAdmin', level: 0 },
      ]
    }
  ];

  const softSkills = [
    { name: 'Communication', icon: '💬' },
    { name: 'Leadership', icon: '👑' },
    { name: 'Problem-Solving', icon: '🧩' },
    { name: 'Critical Thinking', icon: '🧠' },
    { name: 'Team Collaboration', icon: '🤝' },
    { name: 'Teaching', icon: '📚' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      teal: 'from-teal-500 to-teal-600 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
      purple: 'from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      green: 'from-green-500 to-green-600 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      orange: 'from-orange-500 to-orange-600 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      indigo: 'from-indigo-500 to-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for transforming data into actionable insights
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses.split(' ').slice(2).join(' ')}`}>
                    <IconComponent size={24} className={colorClasses.split(' ').slice(4).join(' ')} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Users className="text-blue-600 dark:text-blue-400" size={32} />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-4">
              Soft Skills
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-2xl mb-2">{skill.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;