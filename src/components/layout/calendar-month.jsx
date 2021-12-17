import calendarStyles from '../../css/Calendar.module.css'
import Heading from './heading'

const Month = () => {
  return (
    <div>
      <Heading variant='h4'>{Date.getMonth()}</Heading>
    </div>
  )
}

export default Month
