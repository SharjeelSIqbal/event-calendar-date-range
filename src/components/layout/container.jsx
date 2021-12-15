import layoutStyles from '../../css/Layout.module.css'

const Container = ({ children }) => (
  <div className={layoutStyles.container}>
    {children}
  </div>
)

export default Container
