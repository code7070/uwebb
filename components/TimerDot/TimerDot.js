import { useEffect, useState } from 'react'

export default function TimerDot({ timer = 3000 }) {
  const [localTimer, setLocalTimer] = useState(timer)
  const [dot, setDot] = useState('.')

  useEffect(() => {
    setLocalTimer(timer)
  }, [timer])

  useEffect(() => {
    let x

    if (localTimer > 1000) {
      x = setInterval(() => {
        setLocalTimer(localTimer - 1000)
        setDot(dot === '...' ? '.' : `${dot}.`)
      }, 1000)
    }

    console.log(localTimer)

    return () => clearInterval(x)
  }, [localTimer, dot])

  return <>{dot}</>
}
