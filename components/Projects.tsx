'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Sparkles } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'AI Code Lab',
      description: 'An intelligent code generation and analysis platform powered by AI. Features include code completion, bug detection, and performance optimization suggestions.',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Proxy Web Server in C',
      description: 'A high-performance proxy server implementation in C with caching, load balancing, and security features. Handles concurrent connections efficiently.',
      technologies: ['C', 'Socket Programming', 'HTTP', 'TCP/IP'],
      github: '#',
      live: null,
      featured: true,
    },
    {
      title: 'Sorting Visualizer',
      description: 'Interactive web application that visualizes various sorting algorithms in real-time. Features customizable speed, array size, and multiple algorithms.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'AI Chat App',
      description: 'Real-time chat application with AI-powered responses and sentiment analysis. Includes user authentication and message encryption.',
      technologies: ['React', 'Node.js', 'Socket.io', 'OpenAI API', 'JWT'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'LLM from Scratch',
      description: 'Implementation of a Large Language Model from scratch using Python and PyTorch. Includes training pipeline and inference optimization.',
      technologies: ['Python', 'PyTorch', 'Transformers', 'CUDA', 'NumPy'],
      github: '#',
      live: null,
      featured: true,
    },
    {
      title: 'Price Prediction App',
      description: 'Machine learning application for predicting cryptocurrency and stock prices using historical data and technical indicators.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'Chart.js'],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card relative"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium rounded-full">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-5 w-5 text-purple-600" />
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => window.open(project.github, '_blank')}
                  className="flex-1 btn btn-outline text-sm py-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </button>
                
                {project.live && (
                  <button 
                    onClick={() => window.open(project.live, '_blank')}
                    className="flex-1 btn btn-primary text-sm py-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => window.open('https://github.com/abhishek-singh-rautela', '_blank')}
            className="btn btn-outline"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;