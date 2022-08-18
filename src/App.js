import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import ProfileCard from './components/ProfileForm'
import ProfileForm  from './components/ProfileForm'

function App() {

  const [allprofiles, setAllprofiles] = React.useState([
  {
    firstname: "Ali",
      lastname: "Subur",
      email: "alimohammedsubur@gmail.com",
        phone: "0549341667"
    }
  ])
  
  const updateallprofiles = (profile) => {
    let arr = allprofiles;
    arr.push(profile)
    setAllprofiles([...arr])
  };


  return (
    <>
    <div className="app">
  <h1>our profile maker</h1>
    </div>
    <ProfileForm submit={updateallprofiles} />
      <hr />
      <div className='list'>
        {allprofiles.map((person, index) => (
          <profileCard key={index} card={person} /> 
        ))}

      </div>
    </>
  )
}

export default App