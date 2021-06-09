import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';

var querystring = require('querystring');
class ForgotPassword extends React.Component {
  constructor() {
        super();
  this.state = {
          cpwd: '',
          npwd:'',
          cnpwd:'',
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
          cpwd: '',
          npwd:'',
          cnpwd:'',
         
          messageFromServer: ''
        });
      }
  
  
  onClick(e) {
        this.UpdatePassword(this);
      }
  UpdatePassword(e) {
        axios.post('/update',
          querystring.stringify({
            cpwd: e.state.cpwd,
            npwd:e.state.npwd,
            cnpwd:e.state.cnpwd,
            
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
        if (e.target.name == "cpwd") {
          this.setState({
            cpwd: e.target.value
          });
        }
        if (e.target.name == "npwd") {
          this.setState({
            npwd: e.target.value
          });
        }
         if (e.target.name == "cnpwd") {
          this.setState({
            cnpwd: e.target.value
          });
        }
        
      }
  render() {
     if(this.state.messageFromServer == ''){
        return (
          <div>
        <Button bsStyle="success" bsSize="large" onClick={this.openModal} > Forgot Password</Button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Forgot Password"
         className="Modal">
  <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
         <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
        </Link><br/>
  <fieldset>
         <label for="cp">Current Password:</label><input type="text" id="cpwd" name="cpwd" value={this.state.name} onChange={this.handleTextChange} required></input>
         <label for="np">New Password:</label><input type="text" id="npwd" name="cpwd" value={this.state.email} onChange={this.handleTextChange} required></input>
         <label for="cnp">Confirm Password:</label><input type="password" id="cnpwd" name="cpwd" value={this.state.password} onChange={this.handleTextChange} required></input>
         
        </fieldset>
  <div className='button-center'>
          <br/>
          <Button bsStyle="success" bsSize="large" onClick={this.onClick}>Change Password</Button>
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
          contentLabel="Update Password"
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
  export default ForgotPassword;