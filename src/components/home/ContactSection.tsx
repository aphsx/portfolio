import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { FiUser, FiMail, FiFileText } from 'react-icons/fi'
import { Section } from '../ui'
import { useLanguage } from '../../contexts'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const ContactSection = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  })
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    title: false,
    message: false
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : ''
      case 'email':
        if (value.trim() === '') return 'Email is required'
        if (!validateEmail(value)) return 'Must be a valid email'
        return ''
      case 'title':
        return value.trim() === '' ? 'Title is required' : ''
      case 'message':
        if (value.trim() === '') return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return ''
      default:
        return ''
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Validate on change if field has been touched
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      title: validateField('title', formData.title),
      message: validateField('message', formData.message)
    }

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      title: true,
      message: true
    })

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return
    }

    setIsLoading(true)
    setStatus('')

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', title: '', message: '' })
        setTouched({ name: false, email: false, title: false, message: false })
        setErrors({ name: '', email: '', title: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section
      title={t('home.contact.email')}
      icon={<MdEmail />}
      delay={0.8}
    >
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {t('home.contact.description')}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="You Name"
              className={`w-full pl-10 pr-3 py-2.5 bg-white dark:bg-gray-800 border rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none transition-colors ${
                touched.name && errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-teal-500'
              }`}
            />
          </div>
          {touched.name && errors.name && (
            <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="your.email@example.com"
              className={`w-full pl-10 pr-3 py-2.5 bg-white dark:bg-gray-800 border rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none transition-colors ${
                touched.email && errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-teal-500'
              }`}
            />
          </div>
          {touched.email && errors.email && (
            <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
          )}
        </div>

        {/* Title Field */}
        <div>
          <div className="relative">
            <FiFileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Subject/Title"
              className={`w-full pl-10 pr-3 py-2.5 bg-white dark:bg-gray-800 border rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none transition-colors ${
                touched.title && errors.title
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-teal-500'
              }`}
            />
          </div>
          {touched.title && errors.title && (
            <p className="text-red-500 text-xs mt-1 ml-1">{errors.title}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Message"
            className={`w-full px-3 py-2.5 bg-white dark:bg-gray-800 border rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none transition-colors resize-none ${
              touched.message && errors.message
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 dark:border-gray-600 focus:border-teal-500'
            }`}
            rows={5}
          />
          {touched.message && errors.message && (
            <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>
          )}
        </div>

        {/* Success/Error Message */}
        {status === 'success' && (
          <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
            <p className="text-green-700 dark:text-green-400 text-sm">
              ✅ Email sent successfully! We'll get back to you soon.
            </p>
          </div>
        )}
        {status === 'error' && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-red-700 dark:text-red-400 text-sm">
              ❌ Failed to send email. Please try again.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2.5 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-md text-sm font-medium transition-colors"
        >
          {isLoading ? 'Sending...' : t('home.contact.button')}
        </button>
      </form>
    </Section>
  )
}

export default ContactSection