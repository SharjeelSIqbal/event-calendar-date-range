import { useState } from 'react'



const InputDate = ({ handleChange }) => {
  const [ calender, setShowCalender ] = useState(false)
  const showCalender = (e) => setShowCalender(!calender)

  return(
    <div>
      <input id='startDate' name="startDate" type="date" onClick={showCalender} />
    </div>
  )
}

export default InputDate
