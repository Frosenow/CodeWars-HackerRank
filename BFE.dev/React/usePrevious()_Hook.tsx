import React, {useRef, useEffect} from 'react'

export function usePrevious<T>(value: T): T | undefined {
  const prevVal = useRef<T | undefined>(undefined)

  useEffect(() => {
    prevVal.current = value; 
  }, [value])

  return prevVal.current; 
}


export function App() {
  return <div>your app</div>
}


