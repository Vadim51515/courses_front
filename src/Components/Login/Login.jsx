import React, { useState, useEffect, useCallback } from 'react';
import styles from './Login.module.css'
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
    NavLink
} from "react-router-dom";
const Login = (props) => {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);
    const [login, setLogin] = useState('')
    const [erorr, setErorr] = useState(false)
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/login')
            .then(response => {
                if (response.data !== undefined) {
                    setUsers(response.data);
                }
            })
        const time = setInterval(timer, 1000);
    }, []);
    const timer = () => {
        Axios.get('http://localhost:3001/login')
            .then(response => {
                if (response.data !== undefined) {
                    setUsers(response.data);
                }
            })
    }
    const auth = () => {
        users &&
        users.map(e => {
            if (e.login == login && e.password == password) {
                console.log("ВЫ успешно вошли в систему");
                    setErorr(false)
                    localStorage.removeItem('isAdmin');
                    localStorage.setItem('isAdmin',"1");
                    handleOnClick()
                    return
            }
            else{
                setErorr(true)
            }
        })
    }
                    
        //         setLoginErorr(false)
        //         if (e.password == password) {
        //             setLoginErorr(false)
        //             localStorage.removeItem('userId');
        //             localStorage.setItem('userId', e.id);
        //             handleOnClick()
        //         }
        //         else {
        //             setPasswordErorr(true)
        //         }
        //     }
        //     else {
        //         setLoginErorr(true)
    return (
        <div className={styles.loginBack}>
            <h1 style={{width:'max-content', marginLeft:'auto', marginRight:'auto', color:'white'}}>Войдите в ваш аккаунт</h1>
            <div className={styles.loginBox} >
                <p className={styles.loginText}>Введите ваш логин</p>
                <input
                    className={styles.loginInput}
                    onChange={(e => { setLogin((e.target.value)) })} />
                <p className={styles.passwordText}>Введите ваш пароль</p>
                <input
                    className={styles.passwordInput}
                    type='password'
                    onChange={(e => { setPassword((e.target.value)) })} />
                {
                   erorr ?
                        <p className={styles.error}
                        >Логин или пароль введен не коректно</p>
                        : null
                }
                <div className={styles.comeInBox}>
                    <button className={styles.comeIn} onClick={(e) => { auth() }}>Войти</button>
                </div>
            </div>
        </div>
    )

}

export default Login

