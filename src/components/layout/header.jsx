import Heading from '../layout/heading'
import Icon from './icon'
import layoutStyles from '../../css/Layout.module.css'


const Header = () => (
  <header className={layoutStyles.header}>
    <Icon variant='sm' />
    <div className={layoutStyles.headerTitle}>
      <Heading variant='h2'>Book an Event</Heading>
    </div>
  </header>
)

export default Header
