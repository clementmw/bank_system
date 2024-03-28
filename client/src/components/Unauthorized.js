import React from 'react'

function Unauthorized() {
  return (
    <div className=' flex align-center justify-center'>
        <h1 className=''>Unauthorized Access</h1>
        <div>
            <p>You are not authorized to access this page.</p>
            <p>Please login for access.</p>
        </div>
    </div>
  )
}

export default Unauthorized