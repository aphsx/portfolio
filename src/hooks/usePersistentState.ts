import { useCallback, useSyncExternalStore } from 'react'

const listeners = new Set<() => void>()

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback)
  const onStorage = () => {
    callback()
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(callback)
    window.removeEventListener('storage', onStorage)
  }
}

/**
 * Syncs a string state with localStorage without cascading renders or hydration mismatch.
 */
export function usePersistentState<T extends string>(
  key: string,
  defaultValue: T,
  validate?: (value: string) => value is T,
): [T, (nextValue: T) => void] {
  const getSnapshot = useCallback((): T => {
    try {
      if (typeof window === 'undefined') return defaultValue
      const saved = localStorage.getItem(key)
      if (saved !== null && (!validate || validate(saved))) {
        return saved as T
      }
    } catch {
      // Ignore localStorage read errors
    }
    return defaultValue
  }, [key, defaultValue, validate])

  const getServerSnapshot = useCallback((): T => defaultValue, [defaultValue])

  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const setValue = useCallback(
    (nextValue: T) => {
      try {
        localStorage.setItem(key, nextValue)
      } catch {
        // Ignore localStorage write errors
      }
      emitChange()
    },
    [key],
  )

  return [value, setValue]
}
