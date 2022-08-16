import React from 'react'

function ProfileCard(writer) {
  return (
    <div className='card'>
          <div className='textgroup'>
              <h3>{writer.name}</h3>
              <p>{writer.email }</p>
              <p>{writer.phone}</p>
              <button className='actionBtn'>Read more</button>
      </div>
    </div>
  )
}

export default ProfileCard
