import { NextRequest, NextResponse } from 'next/server'
import { SITE_CONFIG } from './config/site'

const locales = SITE_CONFIG.supportedLanguages
const defaultLocale = SITE_CONFIG.defaultLanguage

function isLocale(value: string): boolean {
  return (locales as readonly string[]).includes(value)
}

function isKnownPath(segments: string[]): boolean {
  // segments are after the locale, e.g. [] | ['projects'] | ['projects', 'id'] | ['uses']
  if (segments.length === 0) return true
  if (segments.length === 1 && (segments[0] === 'projects' || segments[0] === 'uses' || segments[0] === 'timeline')) {
    return true
  }
  if (segments.length === 2 && segments[0] === 'projects' && segments[1].length > 0) {
    return true
  }
  return false
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Next internals and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const parts = pathname.split('/').filter(Boolean)
  const first = parts[0]

  // Missing or invalid locale → home
  if (!first || !isLocale(first)) {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}`
    return NextResponse.redirect(url)
  }

  const rest = parts.slice(1)
  if (!isKnownPath(rest)) {
    const url = request.nextUrl.clone()
    url.pathname = `/${first}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
