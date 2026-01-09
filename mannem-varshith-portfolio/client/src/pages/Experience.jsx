import { motion } from 'framer-motion'
import useFetch from '../hooks/useFetch'

const Experience = () => {
    const { data: experiences, loading, error } = useFetch('/api/experience')

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
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Experience</h2>
                    <p className="text-gray-600 dark:text-gray-400">{error}</p>
                </div>
            </section>
        )
    }

    return (
        <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800/50 mt-16">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        My <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                        Professional experience and internships where I've applied my skills to build real-world solutions.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {exp.role}
                                    </h3>
                                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                                        {exp.company}
                                    </p>
                                </div>
                                <span className="text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                                    {exp.duration}
                                </span>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">▹</span>
                                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Looking for Opportunities
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        I'm actively seeking full-time opportunities where I can contribute my backend development skills and continue growing as a software engineer.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
