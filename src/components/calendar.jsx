import calendarStyles from '../css/Calendar.module.css'
import Month from './layout/calendar-month'
import Box from './layout/box'
import Container from './layout/container'

const Calender = () => (
  <div className={calendarStyles.container}>
    <Month />
  </div>
)

export default Calender
