// PURPOSE: 
// It's quite common to see switches and checkboxes in web apps.

// Implement useToggle() to make things easier

// function App() {
//   const [on, toggle] = useToggle()
//   ...
// }

import { useCallback, useState } from 'react'

export function useToggle(on: boolean): [boolean, () => void] {
  const [state, setToggle] = useState<boolean>(on); 

  const toggle = useCallback(() => setToggle(prev => !prev), [state])

  return [state, toggle]
}
