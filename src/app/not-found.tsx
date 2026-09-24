import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-24 text-center">
      <div className="max-w-md">
        <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 tracking-wide uppercase">404 Error</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          ขออภัย ไม่พบหน้าที่คุณต้องการ หรือลิงก์อาจมีการเปลี่ยนแปลง
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/th"
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-teal-500 transition-colors"
          >
            กลับหน้าแรก (ไทย)
          </Link>
          <Link
            href="/en"
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Home (EN)
          </Link>
        </div>
      </div>
    </div>
  )
}
