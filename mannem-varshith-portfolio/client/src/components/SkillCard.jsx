import { motion } from 'framer-motion'

const SkillCard = ({ skillGroup, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 hover:transform hover:scale-105 transition-all duration-300"
    >
      {/* Category Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {skillGroup.category}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skillGroup.skills.map((skill, skillIndex) => (
          <motion.div
            key={skillIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
          >
            <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
              {skill.icon}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCard 