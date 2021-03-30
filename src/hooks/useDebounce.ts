import React from 'react'

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  React.useEffect(() => {
    let handler: any
    if (value.length > 0) {
      handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
    } else {
      setDebouncedValue(value)
    }

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}