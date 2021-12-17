import Heading from '../layout/heading'

const Input = ({ name, children }) => (
  <div>
    <div>
      <label htmlFor={name}>
        <Heading variant='h4' style={{ fontWeight: 'normal' }}>
          {`${name[0].toUpperCase()}${name.slice(1)}`}
        </Heading>
      </label>
    </div>
    {children}
  </div>
)

export default Input
