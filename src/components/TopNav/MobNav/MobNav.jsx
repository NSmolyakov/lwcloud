import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/img/Logo.svg'
import Trade from '../../../assets/img/Trade.svg'
import Stock from '../../../assets/img/Stock.svg'
import Structure from '../../../assets/img/Structure.svg'
import Reports from '../../../assets/img/Reports.svg'
import Account from '../../../assets/img/Account.svg'
import Notification from '../../../assets/img/Notification.svg'
import Close from '../../../assets/img/Close.svg'
import './mobNav.css'

function MobNav(){
    return(<div className='mobNav'>
         <div>
                <NavLink to='/'><img className='Logo' src={Logo} alt='Logo'></img></NavLink>
                <NavLink to='/notifications'> <img src={Notification} alt='Notification' className='Notif'></img></NavLink>
                <NavLink to='/'><img src={Close} alt='Close' className='Close'></img></NavLink>
        </div>
            
             <nav>
                    <div className='NavElement'>
                        <NavLink to='/trade'><img src={Trade} alt='Trade'></img><p>Торговля</p></NavLink>
                    </div>
                    <div className='NavElement'>
                        <NavLink to='/stock'><img src={Stock} alt='Stock'></img><p>Склад</p></NavLink>
                    </div>
                    <div className='NavElement'>
                        <NavLink to='/structure'> <img src={Structure} alt='Structure'></img> <p>Структура</p></NavLink>
                    </div>
                    <div className='NavElement'>
                        <NavLink to='/reports'> <img src={Reports} alt='Reports'></img> <p>Отчёты</p></NavLink>
                    </div>
                    <div className='NavElement'>
                        <NavLink to='/account'> <img src={Account} alt='Account'></img> <p>Аккаунт</p></NavLink>
                    </div>
                </nav>
    </div>)
}

export default MobNav