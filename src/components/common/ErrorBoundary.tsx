import { Component, ReactNode, ErrorInfo } from 'react'
import { motion } from 'framer-motion'
import { HiExclamationCircle, HiArrowPath } from 'react-icons/hi2'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-16 px-4"
        >
          <div className="text-red-500 mb-4">
            <HiExclamationCircle size={64} />
          </div>

          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
            Something went wrong
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-md">
            We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={this.handleRetry}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors"
          >
            <HiArrowPath size={16} />
            Try Again
          </motion.button>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs text-left max-w-2xl overflow-auto">
              <summary className="cursor-pointer font-mono text-red-600 dark:text-red-400">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </motion.div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary