import Container from './components/layout/container'
import Box from './components/layout/box'
import Form from './components/form'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    if(!localStorage.getItem('event-data')){
      localStorage.setItem('event-data', { nextEvent: 1, eventData: [] })
    }
    return
  })

  return (
    <Container>
      <Box>
        <Form />
      </Box>
    </Container>

)}
export default App;
