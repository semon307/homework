import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
       setShow(false)
    }
    const hours = (date: Date) => {
       return date.getHours() > 9 ? `${date.getHours()}` : `0${date.getHours()}`
    }
    const minutes = (date: Date) => {
        return date.getMinutes() > 9 ? `${date.getMinutes()}` : `0${date.getMinutes()}`
    }
    const seconds = (date: Date) => {
        return date.getSeconds() > 9 ? `${date.getSeconds()}` : `0${date.getSeconds()}`
    }
    const day = (date: Date) => {
        console.log(date.getDay())
        return date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`
    }
    const month = (date: Date) => {
        const day = date.getMonth() + 1
        return day > 9 ? `${day}` : `0${day}`
    }
    const stringTime = `${hours(date)}:${minutes(date)}:${seconds(date)}` // fix with date
    const stringDate = `${day(date)}.${month(date)}.${date.getFullYear()}` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
