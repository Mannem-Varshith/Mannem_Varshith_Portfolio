import { motion } from 'framer-motion'
import AchievementCard from '../components/AchievementCard'
import useFetch from '../hooks/useFetch'

const Achievements = () => {
  const { data: achievements, loading, error } = useFetch('/api/achievements')

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
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-gray-800/50 mt-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Milestones and accomplishments that showcase my dedication, problem-solving abilities, and commitment to continuous learning in the field of computer science.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement._id} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            More Highlights
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Beyond these major achievements, I'm constantly working on personal growth and skill development.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                150+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                LeetCode Problems
              </div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                3
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Major Projects
              </div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                7+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Programming Languages
              </div>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Commitment to Learning
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready for the Next Challenge
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always looking for new opportunities to grow, learn, and contribute to meaningful projects. Let's work together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Get In Touch
            </a>
            
            <a
              href="/projects"
              className="btn-secondary inline-flex items-center justify-center"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements 