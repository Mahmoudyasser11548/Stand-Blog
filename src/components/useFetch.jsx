import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState('')
  const [isPending, setisPending] = useState(true)
  const [data, setData] = useState('')
  
  useEffect(() => { 
    const abort = new AbortController()

    fetch(url, { signal: abort.signal })
      .then(res => {
        if(!res.ok) {
          throw Error("Could not fetch the data from that source");
        }
        return res.json();
      })
      .then(data => { 
        setData(data)
        setisPending(false)
        setError(null)
      })
      .catch(err => { 
        if(err.name === "AbortError") {
          console.log("Aborted");
        } else { 
          setisPending(false)
          setError(err.message)
        }
      })
    return () => abort.abort()
  }, [url])

  return { error, data, isPending };
}

export default useFetch;