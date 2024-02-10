import React, {useRef, useEffect, useMemo} from 'react'
// PURPOSE: Create a hook usePrevious() to return the previous value, with initial value of `undefined.

// useEffect Solution
export function usePrevious<T>(value: T): T | undefined {
  const prevVal = useRef<T | undefined>(undefined)

  useEffect(() => {
    prevVal.current = value; 
  }, [value])

  return prevVal.current; 
} 

// No-UseEffect Solution 
export function usePrevious<T>(value: T): T | undefined {
  const prevVal = useRef<T | undefined>(undefined)
  const toReturn = prevVal.current; 
  prevVal.current = value;  
  return toReturn; 
} 

// useMemo Solution 
export function usePrevious<T>(value: T): T | undefined {
  const prevValue = useRef<T | undefined>(undefined)
  
  return useMemo(() => {
    const prev = prevValue.current; 
    prevValue.current = value; 
    return prev; 
  }, [value])
}

export function App() {
  return <div>your app</div>
}


