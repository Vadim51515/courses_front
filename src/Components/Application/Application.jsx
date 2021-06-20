import React, { useState, useEffect, useCallback } from 'react';
import styles from './Application.module.css'
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
    NavLink
} from "react-router-dom";
const Application = (props) => {
    // Добавить редирект если не админ
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);
    const [applications, setApplications] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/get/application')
            .then(response => {
                if (response.data !== undefined) {
                    setApplications(response.data);
                }
            })
        const time = setInterval(timer, 3000);
        if (localStorage.getItem('isAdmin') !== '1') {
            handleOnClick()
        }
    }, []);
    const timer = () => {
        Axios.get('http://localhost:3001/get/application')
        .then(response => {
            if (response.data !== undefined) {
                setApplications(response.data);
            }
        })
    }
    
    return (
        <div className={styles.applicationBack}>
                                <button className={styles.recordingCourseButton} onClick={() => {
                        handleOnClick()
                    }}> <h3>Вернуться к просмотру всех курсов</h3></button>
            {applications &&
                applications.map(e=>(
                <div className={styles.applicationBox}>
                    <div className={styles.deleteApplicationBox}>
                    <img className={styles.deleteApplication} alt="del" src='./img/deleteApplication.svg'
                    onClick={(i)=>{
                        Axios.delete(`http://localhost:3001/delapplication/${e.id}`)
                        setApplications(applications.filter(f=> f.id !== e.id))
                    }}
                    />
                    </div>
                <div style={{display:'flex'}}>
                    <p style={{marginRight:5}}>ФИО:</p>
                    <p style={{color:'black', }}>{e.name}</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{marginRight:5}}>Номер:</p>
                    <p style={{color:'black', }}>{e.number}</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{marginRight:5}}>Курс:</p>
                    <p style={{color:'black', }}>{e.course}</p>
                </div>
                </div>
            ))}
        </div>
    )

}

export default Application

