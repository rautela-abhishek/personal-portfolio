'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const coursework = [
    'Data Structures & Algorithms',
    'Software Engineering',
    'Database Management Systems',
    'Operating Systems',
    'Internet of Things',
    'Artificial Intelligence',
    'Machine Learning',
    'System Design',
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-2xl font-bold mb-2">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                  Bachelor of Technology
                </div>
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Computer Science and Engineering (IoT)
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Rajasthan Technical University, Kota
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    2022 - 2026
                  </div>
                </div>
              </div>
              <div className="hidden sm:block w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Key Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.7 + (index * 0.1),
                    }}
                    className="badge"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;