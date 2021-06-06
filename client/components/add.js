import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {
  constructor() {
        super();
  this.state = {
          name: '',
          email:'',
          password:'',
          dob:'',
          age:'',
          Gender:'Male',
          qual:'',
          clgname:'',
          gy:'',
          gy:'',
          cname:'',
          Skills:'',
          cmpname:'',
          exp:'',
          desg:'',
          proj:'',
          cert:'',
          flance:'Available',
          mno:'',
          addr:'',
          gid:'',
          lid:'',
          
          messageFromServer: '',
          modalIsOpen: false
        }
  this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.insertNewExpense = this.insertNewExpense.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
  openModal() {
        this.setState({
          modalIsOpen: true
        });
      }
  closeModal() {
        this.setState({
          modalIsOpen: false,
          name: '',
          email:'',
          password:'',
          dob:'',
          age:'',
          Gender:'',
          qual:'',
          clgname:'',
          gy:'',
          
          skills:'',
          cmpname:'',
          exp:'',
          desg:'',
          proj:'',
          cert:'',
          flance:'',
          mno:'',
          addr:'',
          gid:'',
          lid:'',
          
          messageFromServer: ''
        });
      }
  componentDidMount() {
        this.setState({
          Gender: this.props.selectedGender
        });
        this.setState({
          skills: this.props.selectedskills
        });
         this.setState({
          flance: this.props.selectedflance
        });
      }
  handleSelectChange(e) {
        if (e.target.name == 'Gender') {
          this.setState({
            Gender: e.target.value
          });
        }
        if (e.target.name == 'skills') {
          this.setState({
            skills: e.target.value
          });
        }
        if (e.target.name == 'flance') {
          this.setState({
            flance: e.target.value
          });
        }
      }
  onClick(e) {
        this.insertNewExpense(this);
      }
  insertNewExpense(e) {
        axios.post('/insert',
          querystring.stringify({
            name: e.state.name,
            email:e.state.email,
            password:e.state.password,
            dob:e.state.dob,
            age:e.state.age,
            Gender:e.state.Gender,
            qual:e.state.qual,
            clgname:e.state.clgname,
            gy:e.state.gy,
           
            skills:e.state.skills,
            cmpname:e.state.cmpname,
            exp:e.state.exp,
            desg:e.state.desg,
            proj:e.state.proj,
            cert:e.state.cert,
            flance:e.state.flance,
            mno:e.state.mno,
            addr:e.state.addr,
            gid:e.state.gid,
            lid:e.state.lid
          }), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }).then(function(response) {
          e.setState({
            messageFromServer: response.data
          });
        });
      }
  handleTextChange(e) {
        if (e.target.name == "name") {
          this.setState({
            name: e.target.value
          });
        }
        if (e.target.name == "email") {
          this.setState({
            email: e.target.value
          });
        }
         if (e.target.name == "password") {
          this.setState({
            password: e.target.value
          });
        }
        if (e.target.name == "dob") {
          this.setState({
            dob: e.target.value
          });
        }
        if (e.target.name == "age") {
          this.setState({
            age: e.target.value
          });
        }
        if (e.target.name == "qual") {
          this.setState({
            qual: e.target.value
          });
        }
        
        if (e.target.name == "cmpname") {
          this.setState({
            cmpname: e.target.value
          });
        }
        if (e.target.name == "exp") {
          this.setState({
            exp: e.target.value
          });
        }
        if (e.target.name == "desg") {
          this.setState({
            desg: e.target.value
          });
        }
        if (e.target.name == "proj") {
          this.setState({
            proj: e.target.value
          });
        }
         if (e.target.name == "cert") {
          this.setState({
            cert: e.target.value
          });
        }
         if (e.target.name == "mno") {
          this.setState({
            mno: e.target.value
          });
        }
         if (e.target.name == "addr") {
          this.setState({
            addr: e.target.value
          });
        }
         if (e.target.name == "gid") {
          this.setState({
            gid: e.target.value
          });
        }
        if (e.target.name == "lid") {
          this.setState({
            lid: e.target.value
          });
        }
        if (e.target.name == "clgname") {
          this.setState({
            clgname: e.target.value
          });
        }
        if (e.target.name == "gy") {
          this.setState({
            gy: e.target.value
          });
        }
      }
  render() {
     if(this.state.messageFromServer == ''){
        return (
          <div>
        <Button bsStyle="success" bsSize="small" onClick={this.openModal} > Register New User</Button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Add New User"
         className="Modal">
  <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
         <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
        </Link><br/>
  <fieldset>
         <label for="name">Name:</label><input type="text" id="name" name="name" value={this.state.name} onChange={this.handleTextChange} required></input>
         <label for="email">Email:</label><input type="text" id="email" name="email" value={this.state.email} onChange={this.handleTextChange} required></input>
         <label for="password">password:</label><input type="password" id="password" name="password" value={this.state.password} onChange={this.handleTextChange} required></input>
         <label for="dob">Date of Birth:</label><input type="date" id="dob" name="dob" value={this.state.dob} onChange={this.handleTextChange} required></input>
         <label for="age">age:</label><input type="text" id="age" name="age" value={this.state.age} onChange={this.handleTextChange} required></input>
         <label for="qual">Qualification:</label><input type="text" id="qual" name="qual" value={this.state.qual} onChange={this.handleTextChange} required></input>
         <label for="clgname">CollegeName:</label><input type="text" id="clgname" name="clgname" value={this.state.clgname} onChange={this.handleTextChange} required></input>
         <label for="gy">Graduation Year:</label><input type="date" id="gy" name="gy" value={this.state.gy} onChange={this.handleTextChange} required></input>
        
         <label for="cmpname">Company Name:</label><input type="text" id="cmpname" name="cmpname" value={this.state.cmpname} onChange={this.handleTextChange} required></input>
         <label for="exp">Experience:</label><input type="text" id="exp" name="exp" value={this.state.exp} onChange={this.handleTextChange} required></input>
         <label for="desg">Designation:</label><input type="text" id="desg" name="desg" value={this.state.desg} onChange={this.handleTextChange} required></input>
         <label for="proj">Projects:</label><input type="text" id="proj" name="proj" value={this.state.proj} onChange={this.handleTextChange} required></input>
         <label for="cert">Certifications:</label><input type="text" id="cert" name="cert" value={this.state.cert} onChange={this.handleTextChange} required></input>
         
        <label for="mno">Mobile Number:</label><input type="text" id="mno" name="mno" value={this.state.mno} onChange={this.handleTextChange} required></input>
        <label for="addr">Address:</label><input type="text" id="addr" name="addr" value={this.state.addr} onChange={this.handleTextChange} required></input>
        <label for="gid">Githubid:</label><input type="text" id="gid" name="gid" value={this.state.gid} onChange={this.handleTextChange} required></input>
        <label for="lid">Linkedin Id:</label><input type="text" id="lid" name="lid" value={this.state.lid} onChange={this.handleTextChange} required></input>
        <label for="Gender">Gender:</label><select id="Gender" name="Gender" value={this.state.Gender} onChange={this.handleSelectChange} >
              <option value="male" id="male">Male</option>
              <option value="female" id="female">Female</option>
              <option value="oth" id="oth">Others</option>
           </select>
         <label for="skills">Skills:</label><select id="skills" name="skills" value={this.state.skills} onChange={this.handleSelectChange}>
              <option value="C" id="16">C</option>
              <option value="Cpp" id="17">Cpp</option>
              <option value="JAVA" id="18">Java</option>
              <option value="React" id="19">react</option>
              <option value="JS" id="20">Js</option>
           </select>
           <label for="flance">Freelance:</label><select id="flance" name="flance" value={this.state.flance} onChange={this.handleSelectChange}>
              <option value="Available" id="Avail">Available</option>
              <option value="Not Available" id="Navail">Not Available</option>
            
           </select>
        </fieldset>
  <div className='button-center'>
          <br/>
          <Button bsStyle="success" bsSize="large" onClick={this.onClick}>Add New Expense</Button>
         </div>
            </Modal>
          </div>
        )
     }
     else{
      return (
       <div>
         <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
         <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Add Expense"
          className="Modal">
  <div className='button-center'>
          <h3>{this.state.messageFromServer}</h3>
          <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
           <Button bsStyle="success" bsSize="large" onClick={this.closeModal}>Close the Dialog</Button>
          </Link>
         </div>
        </Modal>
         </div>
       )
      }
     }
  }
  export default Add;