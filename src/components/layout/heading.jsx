import React from 'react'
import layoutStyles from '../../css/Layout.module.css'

const e = React.createElement;

const Heading = ({ variant, children, style }) => (

  <>
    {e(variant, {className: layoutStyles.heading, style: style }, children)}
  </>

 )

export default Heading
