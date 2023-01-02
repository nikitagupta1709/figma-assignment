import React from 'react'
import "./sidebar.css";
import {SlHome} from 'react-icons/sl'
import { BiDollarCircle, BiDockTop, BiWalletAlt } from 'react-icons/bi'
import { MdAutoGraph } from 'react-icons/md'
import { TbTriangleSquareCircle } from 'react-icons/tb'
import { VscSymbolKeyword } from 'react-icons/vsc'
import { AiOutlineSetting } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { BsShieldCheck } from 'react-icons/bs'


export default function SideNavbar() {
    return (
        <div className='side'>
            <div className='top'>
                <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/i2n6r3qczrsmretrymn0" alt=""/>
                <div><SlHome fontSize={20}/></div>
                <div><BiDollarCircle/></div>
                <div><MdAutoGraph/></div>
                <div><BiDockTop /></div>
                <div><VscSymbolKeyword/></div>
                <div><TbTriangleSquareCircle/></div>
                <div><BiWalletAlt /></div>
                <div><AiOutlineSetting /></div>
                <div><FiUsers /></div>
                <div><BsShieldCheck/></div>
            </div>
            <div className='bottom'>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
