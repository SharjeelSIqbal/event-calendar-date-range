import layoutStyles from '../css/Layout.module.css'
import Heading from '../components/layout/heading'
import Icon from './icon'

const Button = ({ children }) => (

  <button type='submit' className={layoutStyles.submitButton}>
    <Heading variant='h3' style={{ color: "#FFFFFF" }}>
      {children}
    </Heading>
    <div className={layoutStyles.circle}>
      <Icon variant={'xs'}></Icon>
    </div>
  </button>

)


export default Button
