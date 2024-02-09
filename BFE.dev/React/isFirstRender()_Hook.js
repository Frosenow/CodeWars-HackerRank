import React, { useEffect, useRef } from 'react'

export function useIsFirstRender(): boolean {
  const isFirstRender = useRef(true); 

  useEffect(() => {
    isFirstRender.current = false; 
  }, [])

  if(isFirstRender.current){
    return true; 
  }
  return false; 
}

export function App() {
  useIsFirstRender();
  return <div>your app</div>
}


