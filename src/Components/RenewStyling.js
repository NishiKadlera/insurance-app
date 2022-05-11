import React, { Component } from 'react'
//npm install react-jss for css
import {createUseStyles} from 'react-jss'
 
const styles = createUseStyles({
  student : {
    // marginTop :'50px',
    // marginLeft :'100px',
    border : '2px solid orange',
    width: '80%',

    listStyleType:'none'
  },
 
  studentDetails : {
    color : 'black',
    fontSize: '15px'
  }
})
 
const StudentList = (props) => {
  const classes = styles()
  const {Title, text} = props
  return(
    <ul className={classes.student}>
      <li className={classes.studentDetails}><strong>Question :</strong>  {Title}</li>
      <li className={classes.studentDetails}><strong>Answer:</strong>  {text}</li>
      {/* <li className={classes.studentDetails}>Roll: {roll}</li>
      <li className={classes.studentDetails}>Address : {addr}</li> */}
    </ul>
  )
}
 
export default StudentList;