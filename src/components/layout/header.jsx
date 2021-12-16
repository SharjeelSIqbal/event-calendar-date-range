import Heading from '../layout/heading'
import Icon from './icon'
import layoutStyles from '../../css/Layout.module.css'


const Header = () => (
  <header className={layoutStyles.header}>
    <div className={layoutStyles.iconHeader}>
      <Icon variant='sm' />
    </div>
    <div className={layoutStyles.headerHeading}>
      <Heading variant='h1'>Book an Event</Heading>
    </div>
  </header>
)

export default Header
