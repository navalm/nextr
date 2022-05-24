import React from 'react'
import { useCountdown } from './hooks/useCountdown'

const ExpiredNotice = () => {
  return (
    <div className={'flex flex-col items-center'}>
      <span>Expired</span>
      <p>Please select a future date and time.</p>
    </div>
  )
}

const DateTimeDisplay = ({ value, type, isDanger }) => {
	const defaultStyles = 'flex flex-col items-center'
  return (
    <div className={isDanger ? `${defaultStyles} text-red-900` : defaultStyles}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  )
}

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div>
      <a
        href="https://github.com/navalm"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row justify-evenly text-lg md:text-3xl"
      	>
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 10} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  )
}


const Countdown = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      	/>
    )
  }
}

export default Countdown