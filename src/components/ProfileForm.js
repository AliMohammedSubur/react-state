import { useState } from "react"
import React from 'react'

function ProfileForm() {
    const [profile, setProfile] =useState({
       firstname: "",
       lastname: "",
       email: "",
       phone: ""
   });
   
   const handler=(event) => {
    setProfile((prev) =>({
        ...prev,
        [event.target.name]: event.target.value
    }));
}
const handleform=(e) =>{
    e.preventDefault();
    SubmitEvent(profile)

}
        

     

    

    

     
   

  return (
    <div className="fromcontainer">
    <h3>profile from</h3>

    <form>
    <fieldset>
    <legend>Bio data</legend>
    <div className="names">
    <lebal>First Name
    <input name="firstname" value=
    {profile.firstname} type="text"onChange={handler}/>

    </lebal>

    </div>
    <div className="names">
    <lebal>last Name
    <input name="lastname" value=
    {profile.lastname} type="text"onChange={handler}/>

    </lebal>
    </div>
    
    <div className="names">
    <lebal>email
    <input name="email" value=
    {profile.email} type="text"onChange={handler}/>

    </lebal>
    </div>
    
    
    <div className="names">
    <lebal>phone
    <input name="phone" value=
    {profile.phone} type="text"onChange={handler}/>

    </lebal>
    </div>


    </fieldset>
    </form>

    </div>
  )
}

export default ProfileForm