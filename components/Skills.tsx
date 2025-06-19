'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Brain, Zap, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Kotlin', 'Golang', 'PHP'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Zap,
      skills: ['React.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Styling',
      icon: Palette,
      skills: ['Tailwind CSS', 'Shadcn', 'Bootstrap'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Data Science & AI',
      icon: Brain,
      skills: ['NumPy', 'Pandas', 'Seaborn', 'Matplotlib', 'TensorFlow', 'PyTorch'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['HTML5', 'CSS3', 'REST APIs', 'GraphQL', 'WebSockets', 'PWA'],
      color: 'from-teal-500 to-blue-500',
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'CI/CD', 'GitLab', 'Jenkins', 'Terraform'],
      color: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: (index * 0.1) + (skillIndex * 0.05),
                      }}
                      className="badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;