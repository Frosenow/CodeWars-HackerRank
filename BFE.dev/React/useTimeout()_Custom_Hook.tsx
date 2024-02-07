import React, {useEffect, useRef} from 'react'
export function useTimeout(callback: () => void, delay: number) {

  const callbackRef = useRef(callback); 
  callbackRef.current = callback; 

  useEffect(() => {
    const timeoutId = setTimeout(() => callbackRef.current(), delay)
    
    return () => clearTimeout(timeoutId)
  }, [delay])
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
  useTimeout(() => console.log('test'), 1000)
  return <div>your app</div>
}
