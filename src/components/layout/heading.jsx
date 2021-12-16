import React from 'react'
import layoutStyles from '../../css/Layout.module.css'

const e = React.createElement;

const Heading = ({ variant, children, weight }) => (

  <>
    {e(variant, {className: layoutStyles.heading, style: weight }, children)}
  </>

 )

export default Heading
