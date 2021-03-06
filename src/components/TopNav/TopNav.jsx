import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/Logo.svg'
import Notification from '../../assets/img/Notification.svg'
import Trade from '../../assets/img/Trade.svg'
import Stock from '../../assets/img/Stock.svg'
import Structure from '../../assets/img/Structure.svg'
import Reports from '../../assets/img/Reports.svg'
import Account from '../../assets/img/Account.svg'
import More from '../../assets/img/More.svg'
import Menu from '../../assets/img/Burger.svg'
import './TopNav.css'



function TopNav() {
    return (
        <div className='TopNav'>
            <div className='Logo'>
                <NavLink to='/'><img src={Logo} alt='Logo'></img></NavLink>
            </div>
            <div className='Navigation'>
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
            </div>

            <div className='NavBtns'>
                <NavLink to='/notifications'> <img src={Notification} alt='Notification'></img></NavLink>
                <img src={More} alt='More' className='More'></img>
                <NavLink to='/mobnav'><img className='MobMenu' src={Menu} alt='menu'></img></NavLink>
            </div>
        </div>
    )

}

export default TopNav;