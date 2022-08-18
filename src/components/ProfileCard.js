import React from 'react'

function ProfileCaard({card}) {
  return (
    <div className="greencard">
    <h3>{card.firstname} {card.lastname}</h3>
    <p>{card.email}</p>
    <p>{card.phone}</p>
      
    </div>
  )
}

export default ProfileCaard
