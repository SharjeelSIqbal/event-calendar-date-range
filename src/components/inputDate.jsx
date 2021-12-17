import { useState } from 'react'


const InputDate = ({ handleChange, name }) => {
  const [ calender, setShowCalender ] = useState(false)
  const showCalender = (e) => setShowCalender(!calender)

  return (
    <div>
      <input
        id={name}
        name={name}
        type="date"
        onChange={handleChange}
        onClick={showCalender}
        required
      />
    </div>
  )
}

export default InputDate
