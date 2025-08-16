import { motion } from 'framer-motion'
import useFetch from '../hooks/useFetch'

const About = () => {
  const { data: profile, loading, error } = useFetch('/api/profile')

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto"></div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Profile</h2>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50 mt-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {profile.about}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Strong foundation in data structures and algorithms
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Passionate about emerging technologies
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Eager to contribute to impactful projects
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Continuously learning and improving
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                150+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                LeetCode Problems Solved
              </div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                3
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Featured Projects
              </div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                7+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Programming Languages
              </div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                2
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Major Achievements
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 