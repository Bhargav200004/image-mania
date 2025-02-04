import React from 'react'

const ProfileName = ({
    name,
    country,
    state
}:{
name : string,
country : string,
state : string
}) => {
  return (
    <div className="flex flex-col gap-2">
    <h1 className="text-center text-5xl font-thin">{name}</h1>
    <h2 className="text-center text-xl font-extralight">{state}, <span>{country}</span></h2>
    </div>
  )
}

export default ProfileName;