import React, { useCallback, useEffect, useState } from 'react';
import styles from './ChangeCourse.module.css';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { changeCourse } from './../../Redux/CourseReducer';
import { connect } from 'react-redux';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
    NavLink
} from "react-router-dom";
import Header from '../Header/Header';
const ChangeCourse = (props) => {
    useEffect(() => {
        props.changeCourse(props.match.params.id)
    }, [])
    const [recordingCourseBoll, setRecordingCourseBoll] = useState(false)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState(false)
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);
    const writeCourse = () => {

        if (name === '') {
            setError(true)
        }
        else {
            if (number === '') {
                setError(true)
            }
            else {
                setError(false)
                Axios.post("http://localhost:3001/post/application",
                    {
                        name: name,
                        number: number,
                        course: props.course[0].heading,
                    })
                alert('Вы успешно записались на курс')
                setRecordingCourseBoll(false)
            }
        }
    }
    return (
        props.course ?
            <div className={styles.changeCourseFon}>
                <div className={styles.changeCourseBox}>
                    <button className={styles.recordingCourseButton} onClick={() => {
                        handleOnClick()
                    }}> <h3>Вернуться к просмотру всех курсов</h3></button>
                    
                    <h1 className={styles.nameCourse} >{props.course[0].heading}</h1>
                    <div className={styles.sliderBox}>
                        <AwesomeSlider >
                            {props.course[0].slider.map(e => (

                                <div data-src={"../img/" + e} />
                            ))}
                        </AwesomeSlider>
                    </div>

                    <div style={{ marginBottom: 40 }}>
                        <h3>{props.course[0].masterProgram.heading}</h3>
                        {props.course[0].masterProgram.points.map(e => (
                            <div>
                                <p>{e}</p>
                            </div>
                        ))}
                    </div>

                    {props.course[0].paragraph &&
                        props.course[0].paragraph.map(e => (
                            <div>
                                {e.li
                                    ?
                                    <div style={{ display: 'flex', marginBottom: 30, textAlign: 'center' }}>
                                        <h3>{e.heading}</h3>
                                        <p style={{ marginLeft: 10, marginTop: 18 }}>{e.points}</p>
                                    </div>
                                    :
                                    <div style={{ marginBottom: 30 }}>
                                        <h3>{e.heading}</h3>
                                        {e.points.map(i => (
                                            <div>
                                                <p>{i}</p>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        ))}
                    <a target="_blank" href={props.course[0].link}><p>Более подробная информация здесь</p></a>
                    <button className={styles.recordingCourseButton} onClick={() => { setRecordingCourseBoll(true) }}>
                        <h3>Записаться на данный курс</h3>
                    </button>
                    {recordingCourseBoll &&
                        <div className={styles.recordingCourseFon}>
                            <div className={styles.recordingCourse}>
                                <div className={styles.closeImgBox}>

                                    <img className={styles.closeImg} onClick={(e) => { setRecordingCourseBoll(false) }} src='../img/Close.svg' />
                                </div>
                                <p className={styles.recordingCourseText}>Введите ваше ФИО</p>
                                <input className={styles.recordingCourseInput} onChange={(e) => { setName(e.target.value) }} />
                                <p className={styles.recordingCourseText}>Введите ваш номер телефона</p>
                                {/* <input type='number'
                                    className={styles.recordingCourseInput}
                                    onChange={(e) => {
                                        setNumber(e.target.value)
                                    }} /> */}
                                <PhoneInput
                                    inputStyle={{
                                        border: '1px solid rgba(0, 0, 0, 0.32)',
                                        width: '100% !important',
                                    }}
                                    containerStyle={{ width: '100% !important' }}
                                    country={'ru'}
                                    placeholder={'+7 (000) 000-00-00'}
                                    value={number}
                                    inputClass={'userInput'}
                                    containerClass={'containerUser'}
                                    className={styles.fieldValue}
                                    onChange={e => setNumber(e)}
                                />
                                <div style={{ marginTop: 20 }}>
                                    {error &&
                                        <p style={{ color: 'red' }}>Вы ввели не все данные</p>
                                    }
                                    <button className={styles.writeButton} onClick={() => {
                                        writeCourse()
                                    }}> Записаться на курс</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            :
            <h1>Данных нет</h1>

    )
}
const mapStateToProps = (state) => ({
    course: state.cors.course,
})
export default compose(withRouter, connect(mapStateToProps, { changeCourse }))(ChangeCourse);