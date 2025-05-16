import React from 'react'

const image = ({className,src,alt}) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}

export default image