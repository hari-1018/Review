import React from 'react'
import Child from './Child'
const Parent = () => {
  return (
    <div className='parent'>
        <h1>Parent 1 as Component 1</h1>
        <Child />
    </div>
  )
}

export default Parent