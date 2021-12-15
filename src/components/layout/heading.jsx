import React from 'react'
import layoutStyles from '../../css/Layout.module.css'

const e = React.createElement;

const Heading = ({ variant, children }) => (

  <>
    {e(variant, {className: layoutStyles.heading}, children)}
  </>

 )

export default Heading
