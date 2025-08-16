import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import useFetch from '../hooks/useFetch'

const Skills = () => {
  const { data: skills, loading, error } = useFetch('/api/skills')

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
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800/50 mt-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            A comprehensive collection of programming languages, technologies, and tools I've mastered through continuous learning and hands-on projects.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <SkillCard key={skillGroup._id} skillGroup={skillGroup} index={index} />
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Always Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm constantly expanding my skill set and exploring new technologies to stay current with industry trends and best practices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="skill-badge">React Native</span>
            <span className="skill-badge">Docker</span>
            <span className="skill-badge">AWS</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 