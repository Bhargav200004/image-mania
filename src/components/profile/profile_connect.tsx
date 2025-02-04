import { LucideIcon } from 'lucide-react'
import React from 'react'

const ProfileConnect = ({
    name ,
    icon: Icon
}: {
    name : string,
    icon : LucideIcon
}) => {
  return (
    <div className="flex flex-row gap-1">
    <Icon/>
    <h1 className="text-xl">{name}</h1>
  </div>
  )
}

export default ProfileConnect