import React from 'react'
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import InlineError from "./InlineError";
import ApiService from "../../service/ApiService"


class RegistrationForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      confirmPassword : '', 
      message: null,
      errors : {},
      loading : false
    }
    this.saveUser = this.saveUser.bind(this);
}

saveUser = (e) => {
    e.preventDefault();
    let user = {userName: this.state.userName, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, confirmPassword: this.state.confirmPassword};
    ApiService.addUser(user)
        .then(res => {
            this.setState({message : 'User added successfully.'});
            this.props.history.push('/users');
        });
}
    onSubmit = () => {
        const errors = this.validate(this.state);
        this.setState({errors});
    };
    onChange = e => this.setState({ 
         [e.target.name] : e.target.value}
    );
    // validate = (state) => {
    //     const errors = {};
    //     if(!this.state.firstName) errors.firstName = "First Name is Mandatory";
    //     if(!this.state.lastName) errors.lastName = "Last Name is mandatory"
    //     if(!this.state.userName) errors.userName = "Invalid userName";
    //     if(!this.state.password) errors.password = "Cannot be blank";
    //     if(this.state.password !== this.state.confirmPassword ) errors.password = "Password and Confirm password do not match"
    //     return errors;
    // }
    render() {
        const {errors} = this.state;
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
              </Header>
              <Form size='large' onSubmit = {this.onSubmit}>
                <Segment stacked>
                <Form.Field error = {errors.firstName}>
                    <label htmlFor = "firstName"> firstName</label>
                    <input type = "text" id = "firstName" name = "firstName"
                     placeholder = "Enter first name" onChange = {this.onChange} value = {this.state.firstName} /> 
                     {errors.firstName && <InlineError text = {errors.firstName} />}
                </Form.Field>
                <Form.Field error = {errors.lastName}>
                    <label htmlFor = "lastName"> Last Name</label>
                    <input type = "text" id = "lastName" name = "lastName"
                     placeholder = "Enter Last Name" onChange = {this.onChange} value = {this.state.lastName} /> 
                     {errors.lastName && <InlineError text = {errors.lastName} />}
                </Form.Field>
                <Form.Field error = {errors.userName}>
                    <label htmlFor = "userName"> User Name</label>
                    <input type = "email" id = "userName" name = "userName"
                     placeholder = "Enter your mail" onChange = {this.onChange} value = {this.state.userName} /> 
                     {errors.userName && <InlineError text = {errors.userName} />}
                </Form.Field>
              
                <Form.Field error = {errors.password}>
                    <label htmlFor = "password">  Password</label>
                    <input type = "password" id = "password" name = "password"
                     placeholder = "Make it secure" onChange = {this.onChange} value = {this.state.password} /> 
                     {errors.password && <InlineError text = {errors.password} />}
                </Form.Field>
                <Form.Field error = {errors.password}>
                    <label htmlFor = "confirmPassword"> Confirm Password</label>
                    <input type = "password" id = "confirmPassword" name = "confirmPassword"
                     placeholder = "Make it secure" onChange = {this.onChange} value = {this.state.confirmPassword} /> 
                     {errors.password && <InlineError text = {errors.password} />}
                </Form.Field>
                {/* <Form.Field>
                    

                    <label htmlFor = "interest"> Select Interest of Topics</label>
                    <div id = "ui radio">
                    <table align = "center"> 
                      <tr>
                        <td width = "70" className = "align-bottom">
                    <input type = "radio" id = "interest" name = "interest"
                    onChange = {this.onChange} value = {this.state.interest} /> 
                     </td>
                     <td >Entertainment</td> <br />
                     </tr>
                     <tr>
                        <td >
                    <input type = "radio" id = "interest" name = "interest"
                    onChange = {this.onChange} value = {this.state.interest} /> 
                     </td>
                     <td align = "center">Technology</td> <br />
                     </tr>
                     <tr>
                        <td align = "center">
                    <input type = "radio" id = "interest" name = "interest"
                    onChange = {this.onChange} value = {this.state.interest} /> 
                     </td>
                     <td>Movies</td> <br />
                     </tr>
                     <tr>
                        <td>
                    <input type = "radio" id = "interest" name = "interest"
                    onChange = {this.onChange} value = {this.state.interest} /> 
                     </td>
                     <td>Sports</td> <br />
                     </tr>
                     <tr>
                        <td align = "center">
                    <input type = "radio" size = "large" id = "interest" name = "interest"
                    onChange = {this.onChange} value = {this.state.interest} /> 
                     </td>
                     <td>Spiritual</td> <br />
                     </tr>
                     
                    
                    
                     </table>
                     </div>
                </Form.Field> */}
                 
                  <Button color='teal' fluid size='large' onClick={this.saveUser}>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                Already Registered? <a href='Login'>Go to Login</a>
              </Message>
            </Grid.Column>
          </Grid>

        )
    }
}
  


export default RegistrationForm;