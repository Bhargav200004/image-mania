import React from 'react'

const ProfileTag = ({
    tags = '0',
    title
} : {
    tags : string,
    title : string,
}) => {
  return (
    <div className="flex flex-col w-fit">
    <h1 className=" text-center text-3xl font-serif font-normal ">{tags}</h1>
    <p className="text-2xl font-serif font-normal">{title}</p>
  </div>
  )
}

export default ProfileTag