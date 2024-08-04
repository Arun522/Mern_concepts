import React, { useState } from 'react'

const OnChange = () => {
    const [name, setName] = useState("")
  return (
    <div>
        <input placeholder='Name'  onChange={(e)=>setName(e.target.value)} />
        {name}
    </div>
  )
}

export default OnChange