import layoutStyles from '../css/Layout.module.css'
import Heading from '../components/layout/heading'
import Icon from '../components/layout/icon'

const Button = ({ children }) => (

  <button className={layoutStyles.submitButton}>

    <Heading variant='h3' style={{ color: "#FFFFFF" }}>
      {children}
    </Heading>
    <div className={layoutStyles.circle}>
      <Icon variant={'xs'}></Icon>
    </div>
  </button>
)


export default Button
