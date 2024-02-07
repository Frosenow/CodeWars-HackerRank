// PURPOSE: 
// Create a hook to easily use setTimeout(callback, delay).

// reset the timer if delay changes
// DO NOT reset the timer if only callback changes

import React, {useEffect, useRef} from 'react'
export function useTimeout(callback: () => void, delay: number) {

  const callbackRef = useRef(callback); 
  callbackRef.current = callback; 

  useEffect(() => {
    const timeoutId = setTimeout(() => callbackRef.current(), delay)
    
    return () => clearTimeout(timeoutId)
  }, [delay])
}

export function App() {
  useTimeout(() => console.log('test'), 1000)
  return <div>your app</div>
}
 
