import React, { Component } from 'react';  
// import axios from 'axios';  
//import { Link } from 'react-router-dom'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    // DeleteStudent= () =>{  
    //  axios.delete('http://localhost:44357/Api/Student/Deletestudent?id='+this.props.obj.Id)  
    // .then(json => {  
    // if(json.data.Status==='Delete'){  
    // alert('Record deleted successfully!!');  
    // }  
    // })  
    // }  
  render() {  
    return (  
        <tr>  
          {/* <td>  
            {this.props.obj.Id}  
          </td> */}
          <td>  
            {this.props.obj.Insurance_type}  
          </td>  
          <td>  
            {this.props.obj.Plan_type}  
          </td>  
          <td>  
            {this.props.obj.Amount}  
          </td>  
          <td>  
            {this.props.obj.Payment_Period}  
          </td>
          {/* <td>  
            {this.props.obj.Password}  
          </td>   */}
          {/* <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>   */}
        </tr>  
    );  
  }  
}  
  
export default Table;  