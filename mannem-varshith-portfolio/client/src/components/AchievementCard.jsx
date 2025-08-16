import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="achievement-card group relative"
    >
      {/* Achievement Icon */}
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
          {achievement.icon}
        </div>
      </div>

      {/* Achievement Content */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {achievement.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {achievement.description}
        </p>

        {/* Achievement Link */}
        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 font-medium"
          >
            <span>View Details</span>
            <FiExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default AchievementCard