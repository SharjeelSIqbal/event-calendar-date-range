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
        min={name === 'startDate' ? Date.now() : null}
        onChange={handleChange}
        onClick={showCalender}
      />
    </div>
  )
}

export default InputDate
