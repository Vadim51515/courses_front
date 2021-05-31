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
        const time = setInterval(timer, 1000);
    }, []);
    const timer = () => {
        // Axios.get('http://localhost:3001/login')
        //     .then(response => {
        //         if (response.data !== undefined) {
        //             // setUsers(response.data);
        //         }
        //     })
    }
    
    return (
        <div className={styles.applicationBack}>
            {applications.map(e=>(
                <div className={styles.applicationBox}>
                    <div className={styles.deleteApplicationBox}>
                    <img className={styles.deleteApplication} src='./img/deleteApplication.svg'/>
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

