import React, {useCallback} from 'react'
import {withRouter} from 'react-router'
import app from './base'

function SignUp({history}) {
   const onHandleSubmit = useCallback(
    async(event) => {
           event.preventDefault()
           const [email,password] = event.target.elements;
           try{
               await app.auth().createUserWithEmailAndPassword(email.value,password.value);
               history.push('/')
            }
           catch(err){
               alert(err)
           }
       },
       [history],
   )
    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={onHandleSubmit}>
                <label>Email
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>Password
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            
        </div>
    )
}
export default withRouter(SignUp)