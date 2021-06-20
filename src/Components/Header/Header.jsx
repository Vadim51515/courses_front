import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
const Header = (props) => {
    return (
        <div className={styles.headerBox}>
            <div className={styles.flex}>
                <img className={styles.logo} alt="logo" src='../img/Logo.png' />
                <p style={{marginLeft:20, fontSize:16}}>Государственное автономное профессиональное образовательное учреждение Свердловской области «Екатеринбургский монтажный колледж»  (ГАПОУ СО "ЕМК")</p>
                <div className={styles.mainInfoBox}>
                    <div className={styles.infoBox}>
                        <h3 className={styles.operatingMode}>Режим работы:</h3>
                        <p className={styles.operatingMode_1}>Понедельник-Пятница</p>
                        <p className={styles.operatingMode_2}>08.30-17.00 (без перерыва)</p>
                    </div>
                    <div >
                        <h3 style={{ marginTop: 0, marginLeft: 'auto', width: 'max-content', marginRight: 140 }}>Контакты:</h3>
                        <div style={{ display: 'flex', width: 'max-content', marginLeft: 'auto', marginRight: 50, marginBottom: 10 }}>
                            <img className={styles.number} alt="phone" src='../img/phone.svg' />
                            <p>+7 (343) 257-45-48</p>
                        </div>
                        <div style={{ display: 'flex', width: 'max-content', marginLeft: 'auto' }}>
                            <img className={styles.email} alt="email" src='../img/Email.svg' />
                            <p style={{ marginTop: 0 }}>emkolledgodo@yandex.ru</p>
                        </div>
                {localStorage.getItem('isAdmin') == '1' && 
                 <NavLink to={'application'} >
                <p className={styles.applicationLink}>Заявки</p>
                </NavLink>
                }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header