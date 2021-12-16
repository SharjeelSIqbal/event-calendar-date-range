import Header from '../components/layout/header'
import Label from './layout/label'
import InputDate from './inputDate'
import Button from '../components/button'
import layoutStyles from '../css/Layout.module.css'
import { useReducer } from 'react'

const initialState = {
  where: '',
  people: null,
  startDate: Date.now(),
  endDate: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'handle input':
      return {
        ...state,
        [action.field]: action.payload
      }
      default:
        return state
    }
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(e.target);
}


const Form = () => {

  const handleChange = (e) => {
    console.log(e.target)
    if(e.target.name === 'endDate'){
      console.log(form.startDate - form.endDate)
    }
    dispatch({
      type:'handle input',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const [ form, dispatch ] = useReducer(reducer, initialState)
  return (
    <>
    <Header />
    <form className={layoutStyles.form} onSubmit={handleSubmit}>
      <div className={layoutStyles.inputDiv}>
        <Label name='where'>
          <input
            className={layoutStyles.input}
            id='where'
            type='text'
            onChange={handleChange}
            value={form.where}
            name='where' />
        </Label>
        <Label name='people'>
          <select name='people' id="people" onChange={handleChange}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </Label>
      </div>
      <div className={layoutStyles.inputDiv}>
        <Label name='startDate'>
          <InputDate name='startDate' handleChange={ handleChange } />
        </Label>
        <Label name='endDate'>
          <InputDate name='endDate' handleChange={ handleChange } />
        </Label>
      </div>
      <div className={layoutStyles.submitDiv}>
        <Button>Book</Button>
      </div>
    </form>
    </>
  )
}

export default Form
