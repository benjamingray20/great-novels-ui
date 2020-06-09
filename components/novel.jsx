import React from 'react'

export default ({ id, title, name }) => (
  <div key={id} className="novels">
    {`${title} ${name}`}
  </div>
)
