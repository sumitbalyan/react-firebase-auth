import React, {useCallback,useContext} from 'react'
import {withRouter,Redirect} from 'react-router'
import { Link } from "react-router-dom";
import app from './base'
import {AuthContext} from './Auth'

function Login({history}) {
 
   const handleLogin = useCallback(
    async(event) => {
           event.preventDefault()
           const [email,password] = event.target.elements;
           try{
               await app.auth().signInWithEmailAndPassword(email.value,password.value);
               history.push('/')
            }
           catch(err){
               alert(err)
           }
       },
       [history],
   );
   const {currentUser} = useContext(AuthContext)
   if(currentUser){
       return<Redirect to="/" />
   }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>Password
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit">Login</button>
                 <Link to="/signup" style={{padding:5,margin:5}} >Sign Up</Link>
            </form>
           
        </div>
    )
}
export default withRouter(Login)