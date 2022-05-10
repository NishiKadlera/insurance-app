import React, { Component } from 'react'
//npm install react-jss for css
import {createUseStyles} from 'react-jss'
 
const styles = createUseStyles({
  student : {
<<<<<<< HEAD
    // marginTop :'50px',
    // marginLeft :'100px',
    border : '2px solid orange',
    width: '80%',
=======
    marginTop :'50px',
    marginLeft :'100px',
    border : '5px solid purple',
    width: '40%',
>>>>>>> 2d463311fec6081dd1dd318faa7ede9915a812e5
    listStyleType:'none'
  },
 
  studentDetails : {
<<<<<<< HEAD
    color : 'black',
    fontSize: '15px'
=======
    color : 'blue',
    fontSize : '24px'
>>>>>>> 2d463311fec6081dd1dd318faa7ede9915a812e5
  }
})
 
const StudentList = (props) => {
  const classes = styles()
<<<<<<< HEAD
  const {Title, text} = props
  return(
    <ul className={classes.student}>
      <li className={classes.studentDetails}><strong>Question :</strong>  {Title}</li>
      <li className={classes.studentDetails}><strong>Answer:</strong>  {text}</li>
=======
  const {image,Title} = props
  return(
    <ul className={classes.student}>
      <li className={classes.studentDetails}>image : {image}</li>
      <li className={classes.studentDetails}>Title: {Title}</li>
>>>>>>> 2d463311fec6081dd1dd318faa7ede9915a812e5
      {/* <li className={classes.studentDetails}>Roll: {roll}</li>
      <li className={classes.studentDetails}>Address : {addr}</li> */}
    </ul>
  )
}
 
export default StudentList;