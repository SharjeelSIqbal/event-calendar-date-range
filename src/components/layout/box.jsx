import layoutStyles from '../../css/Layout.module.css'

const Box = ({ children }) => (
  <div className={layoutStyles.box}>
    {children}
  </div>
)

export default Box
