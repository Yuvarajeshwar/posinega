// import React from 'react'
// import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
// import axios from 'axios';
// import InlineError from "./InlineError";



// class LoginForm extends React.Component {
//     constructor(props){
//       super(props);
//   this.state = {
//         errors : {},
//         loading : false
//     };
 
//       // componentDidMount() {
//       //   axios.get("http:localhost:8080/api/sports")
//       //     .then(res => {
//       //       const message = res.this.state;
//       //       this.setState({ message });
//       //     })
//       // }
// componentDidMount() {
//   setInterval(this.hello,250)
// }
//   hello = () => { 
//       fetch('api/sports')
//           .then(response => response.text())
//           .then(message => {
//               this.setState({message: message});
//               console.log(message);
//           });
//   };
//     onSubmit = () => {
//         const errors = this.validate(this.state.data);
//         this.setState({errors});
//     };
//     onChange = e => this.setState({ 
//         [e.target.name] : e.target.value}
//     );
//     validate = this.state => {
//         const errors = {};
//         if (!this.state.userName) errors.userName = "Invalid userName";
//         if(!this.state.password) errors.password = "Cannot be blank";
//         return errors;
//     }
//     render() {
//         const {errors} = this.state;
//         return (
//             <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//             <Grid.Column style={{ maxWidth: 450 }}>
//               <Header as='h2' color='teal' textAlign='center'>
//               Log-in to your account
//               </Header>
//               <Form size='large' onSubmit = {this.onSubmit}>
//                 <Segment stacked>
                  
//                 <Form.Field error = {errors.userName}>
//                     <label htmlFor = "userName"> userName Address</label>
//                     <input type = "userName" id = "userName" name = "userName"
//                      placeholder = "examp@examp.com" onChange = {this.onChange} value = {this.state.userName} /> 
//                      {errors.userName && <InlineError text = {errors.userName} />}
//                 </Form.Field>
//                 <Form.Field error = {errors.password}>
//                     <label htmlFor = "password"> Password</label>
//                     <input type = "password" id = "password" name = "password"
//                      placeholder = "Make it secure" onChange = {this.onChange} value = {this.state.password} /> 
//                      {errors.password && <InlineError text = {errors.password} />}
//                 </Form.Field>
                 
//                   <Button color='teal' fluid size='large'>
//                     Login
//                   </Button>
//                 </Segment>
//               </Form>
//               <Message>
//                 New to us? <a href='/Register'>Sign Up</a>
//               </Message>
//             </Grid.Column>
//           </Grid>

//         )
//     }
// }
  


// export default LoginForm