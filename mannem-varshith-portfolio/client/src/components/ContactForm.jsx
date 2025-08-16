import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiCode, FiMapPin } from 'react-icons/fi'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const formRef = useRef(null)

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91-9032612597',
      link: 'tel:+919032612597'
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      label: 'Email',
      value: 'mannem.varshith1205@gmail.com',
      link: 'mailto:mannem.varshith1205@gmail.com'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Tirupati, Andhra Pradesh, India',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/mannem-varshith',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      label: 'GitHub',
      url: 'https://github.com/Mannem-Varshith',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      label: 'LeetCode',
      url: 'https://leetcode.com/u/varshi1205/',
      color: 'hover:text-orange-600'
    }
  ]

  const sendEmail = (e) => {
    e.preventDefault()
    if (!formRef.current) return

    // Fill hidden time field
    const timeField = formRef.current.querySelector('input[name="time"]')
    if (timeField) timeField.value = new Date().toISOString()

    emailjs.sendForm(
      'service_kjbd3ng',
      'template_x1bsdxk',
      formRef.current,
      'Uyomoeqk7wEWxBSuz'
    ).then(() => {
      alert('✅ Message sent successfully!')
      formRef.current.reset()
    }).catch(() => {
      alert('❌ Failed to send message. Try again later.')
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          I'm always interested in hearing about new opportunities, interesting projects, or just want to say hello. Feel free to reach out!
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                {info.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {info.label}
                </p>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 break-words"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-900 dark:text-white break-words">
                    {info.value}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Follow Me
          </h4>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-200 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Send Message
        </h3>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Hidden timestamp field, filled just before sending */}
          <input type="hidden" name="time" />

          <button type="submit" className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition duration-200">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactForm