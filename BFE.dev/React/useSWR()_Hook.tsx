// PURPOSE: SWR is a popular library of data fetching. The aim is to implement copy of that hook to use in scenario similar to the one shown below: 
// function App() {
//   const { data, error } = useSWR('/api', fetcher)
//   if (error) return <div>failed</div>
//   if (!data) return <div>loading</div>

//   return <div>succeeded</div>
// }
// this is not to replicate the true implementation of useSWR()
// The first argument key is for deduplication, we can safely ignore it for now

import {useEffect, useState, useMemo} from 'react'

export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T
  error?: E
} {
  const fetcherRes = useMemo(fetcher, [_key]);
  const [data, setData] = useState<T | undefined>(fetcherRes instanceof Promise ? undefined : fetcherRes);
  const [error, setError] = useState<E | undefined>(); 

  useEffect(() => {
    if(fetcherRes instanceof Promise){
      // When the fetcherRes Promise is fulfilled (i.e., when the asynchronous operation succeeds), 
      // the setData function will be called with the resolved value as its argument.
      // This means that setData will update the data state with the result of the asynchronous operation.
      // If the result Promise is rejected (i.e., when the asynchronous operation encounters an error), 
      // the setError function will be called with the rejection reason (error) as its argument. 
      // This means that setError will update the error state with the error encountered during the asynchronous operation.
      fetcherRes.then(setData, setError); 
    }
  }, []) 

  return {
    data, 
    error, 
  }
}

export function App() {
  return <div>your app</div>
}


