import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Courses.module.css';
import Header from './../Header/Header';
const Courses = (props) => {
    const Course = (props) => {
        return (
            <NavLink to={'course/' + props.id} className={styles.navCourseBox}>
                <div className={styles.courseBox}>
                    <div className={styles.card}>
                        <div className={styles.front}>
                            <img src={"./img/" + props.imgName} />
                        </div>
                        <div className={styles.back}>
                            <h4 className={styles.headingCourse}>{props.heading}</h4>
                            <p className={styles.commentCourse}><b>Описание: </b>{props.comment}</p>
                            <p className={styles.durationCourse}><b>Продолжительность: </b>{props.duration}</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        )
    }
    return (
        <div className={styles.fon}>


            <div className={styles.courses}>
                <div className={styles.coursesBox}>
                    <h1 className={styles.head}>Основные программы профессионального обучения</h1>
                    <div className={styles.mainCoursesBox}>
                        {
                            props.courses.map(e => (
                                <Course
                                    {...e}
                                />
                            ))
                        }
                    </div>
                    <h1 className={styles.head}>Дополнительные профессиональные программы</h1>
                    <div className={styles.mainCoursesBox}>
                        {
                            props.dopCourses.map(e => (
                                <Course
                                    {...e}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    courses: state.cors.courses,
    dopCourses: state.cors.dopCourses,
    course: state.cors.course,
})
export default connect(mapStateToProps, {})(Courses);


{/* <Course 
            imgName={'cors_2.png'} 
            heading={'Создание баз данных'}
            comment={"Курс направлен на обучение создания баз даных с помощью SQL Workbench."}
            duration={"3 - 5 недель"}
            />
            <Course  
            imgName={'cors_3.png'}
            heading={'Информационная аналитика'}
            comment={"Этот курс напрален на обучение IT аналитике в сфере программного обеспечения а так же информациооных систем."}
            duration={"4 - 7 недель"}
            /> */}