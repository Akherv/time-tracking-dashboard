import { useState } from 'react'
import '../styles/Profile.css'
import profilePhoto from '../assets/image-jeremy.png'

function Profile({datas, activeCategory, setActiveCategory}){


   function handleClick(scheduleMode) {
    // datas.map(({timeframes}) =>  (
    //   arr.push([title,background,timeframes[scheduleMode]])
    // Object.fromEntries( 
    //    Object.entries(timeframes).filter(
    //      ([key, val])=>[scheduleMode].includes(key)
    //   ))
    // ))
    setActiveCategory(scheduleMode);
  }

  return (
    <div className="Profile">
      <div className="Profile-user">
        <img src={profilePhoto} alt="profile" />
        <h1>
        <span className="Report">Report for</span>
          <span className="Title">Jeremy</span> <span className="Title Profile-name">Robson</span>
        </h1>
      </div>
      <div className="Profile-schedule">
        <ul>
          <li onClick={()=>handleClick('daily')}>Daily</li>
          <li onClick={()=>handleClick('weekly')}>Weekly</li>
          <li onClick={()=>handleClick('monthly')}>Monthly</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile