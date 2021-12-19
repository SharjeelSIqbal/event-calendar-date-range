import '../../css/Global.module.css'
import calendarStyles from '../../css/Calendar.module.css'
import Heading  from './heading'
import moment from 'moment'
import { BiChevronLeft,
         BiChevronsLeft,
         BiChevronRight,
         BiChevronsRight
      } from 'react-icons/bi'
import { useState, useEffect } from 'react'



//moment().datyInMonth gives you days in the month
const Month = () => {
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const [currentMonth, setCurrentMonth] = useState(moment().month())
  const [ currentYear, setCurrentYear ] = useState(moment().year())

  const nextYear = () => {
        setCurrentYear(currentYear + 1)
    }

  const lastYear = () => {
    if (currentYear > moment().year()) {
      setCurrentYear(currentYear - 1)
    }
  }

  const nextMonth = () => {
    if(currentMonth === 11){
      nextYear()
      setCurrentMonth(0)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const lastMonth = () => {
    if(currentMonth > moment().month() || currentYear > moment().year()){
      if(currentMonth === 0){
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    }
  }
  useEffect( () => {
    if(currentYear === moment().year()){
      setCurrentMonth(moment().month())
    }
  }, [currentYear])


  return (
    <div className={calendarStyles.header}>
    <div className={calendarStyles.year}>
      <Heading variant='h4'>{currentYear}</Heading>
    </div>
    <div className={calendarStyles.month}>
      <div>
        <button name='last-month' className={calendarStyles.button} onClick={lastYear}>
          <BiChevronsLeft />
        </button>
        <button id='last-year' name='last-year' className={calendarStyles.button} onClick={lastMonth}>
          <BiChevronLeft />
        </button>
      </div>
      <div className={calendarStyles.monthsList}>
        {months.map(month => <Heading key={`${month}`} variant='h4'>
          {moment()
            .month(month)
            .format('MMM')}
          </Heading>
          )}
      </div>
      <div>
        <button name='next-month' className={calendarStyles.button} onClick={nextMonth}>
          <BiChevronRight />
        </button>
        <button name='next-year' className={calendarStyles.button} onClick={nextYear}>
          <BiChevronsRight />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Month
