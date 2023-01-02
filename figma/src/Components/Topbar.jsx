import React from 'react'
import './topbar.css'
import {FiChevronDown, FiLink2} from "react-icons/fi"
import {BsBell} from "react-icons/bs"
import {HiOutlineQuestionMarkCircle} from "react-icons/hi"

export default function Topbar() {
  return (
    <div className='main'>
      <div className='mainDiv'>
        <div  className='link'>
          <div><FiLink2 fontSize={15}/></div>
          <div>Quick Links</div>
          <div><FiChevronDown fontSize={12} /></div>
        </div>
        <div className='corner'>
            <div className='lang'>
              <img src="https://www.worldatlas.com/r/w768/upload/d8/06/17/shutterstock-204917971.jpg" alt="" />
              <div>English</div>
            </div>
            <div><BsBell fontSize={22}/></div>
            <div><HiOutlineQuestionMarkCircle fontSize={22}/></div>
        </div>
      </div>
    </div>
  )
}
