'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Trophy, Target, Zap } from 'lucide-react';

const CodingProfiles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const profiles = [
    {
      name: 'LeetCode',
      description: 'Competitive programming platform with algorithmic challenges',
      stats: {
        problems: '500+',
        ranking: 'Top 15%',
        streak: '100+ days',
      },
      color: 'from-yellow-500 to-orange-500',
      icon: '🟨',
      url: '#',
    },
    {
      name: 'Codeforces',
      description: 'Competitive programming contests and problem solving',
      stats: {
        rating: '1400+',
        contests: '50+',
        rank: 'Specialist',
      },
      color: 'from-blue-500 to-indigo-500',
      icon: '🟦',
      url: '#',
    },
  ];

  const achievements = [
    {
      title: 'Problem Solver',
      description: '1000+ problems solved across platforms',
      icon: Target,
    },
    {
      title: 'Contest Participant',
      description: 'Regular participation in coding contests',
      icon: Trophy,
    },
    {
      title: 'Algorithm Expert',
      description: 'Strong foundation in DSA and algorithms',
      icon: Zap,
    },
  ];

  return (
    <section id="coding-profiles" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Coding Profiles</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My competitive programming journey and achievements across various platforms
          </p>
        </motion.div>

        {/* Coding Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card group cursor-pointer"
              onClick={() => window.open(profile.url, '_blank')}
            >
              <div className={`h-2 bg-gradient-to-r ${profile.color} rounded-t-lg -mt-6 -mx-6 mb-4`}></div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{profile.icon}</span>
                  <span className="text-xl font-bold">{profile.name}</span>
                </div>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{profile.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(profile.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Programming Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;