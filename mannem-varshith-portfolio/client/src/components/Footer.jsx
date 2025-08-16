import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/mannem-varshith',
      color: 'hover:text-blue-500'
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      label: 'GitHub',
      url: 'https://github.com/Mannem-Varshith',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: <FiCode className="w-5 h-5" />,
      label: 'LeetCode',
      url: 'https://leetcode.com/u/varshi1205/',
      color: 'hover:text-orange-500'
    }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Mannem Varshith
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Computer Science Student & Aspiring Software Developer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Building innovative solutions with passion and creativity
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-200 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Mannem Varshith. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Built with ❤️ using React, Node.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 