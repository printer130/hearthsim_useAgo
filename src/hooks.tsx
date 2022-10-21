import { useEffect, useState } from 'react';

function getDateDiffs (timestamp: number){
  let value: number|string = "Just now"
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000
  if(Math.abs(Math.round(elapsed)) >= 10 && Math.abs(Math.round(elapsed)) < 60) {
    value = "A few seconds ago"
  }

  if(Math.abs(elapsed) >= 60) {
    value = Math.round(elapsed / 60)
  }
  return { value }
}

const useAge = ({ timestamp }:{ timestamp:number }) => {
  // you will want some kind of implementation here
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))

  useEffect(() => {
      const interval = setInterval(() => {
        const newTimeAgo = getDateDiffs(timestamp)
        setTimeago(newTimeAgo)
      }, 5000)

      return () => clearInterval(interval)

  }, [timestamp])

  const rtf = new Intl.RelativeTimeFormat("en", { style: "short" })
  const { value } = timeago

  if(typeof value === "number") {
    return {
      theTimeThatPassed: rtf.format(value, "minutes")
    }
  }

 return { 
  theTimeThatPassed: value
 }
}

export { useAge }
