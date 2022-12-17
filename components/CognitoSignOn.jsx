// chatGPT3: Please provide me code in for NextJS using NextAuth to sign in through AWS cognito.
import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import {CognitoUserPool, CognitoUserAttribute, CognitoUser} from 'amazon-cognito-identity-js'

export default function SignIn(){
  const [session, loading] = useSession()
  const router = useRouter()

  if (session){ 
    router.push('/')
  } 
  
  const poolData = {
    UserPoolId: process.env.AWS_COGNITO_USERPOOL_ID, 
    ClientId: process.env.AWS_COGNITO_CLIENT_ID 
  }
  
  const userPool =  new CognitoUserPool(poolData)
  
  async function handleFormSubmit(formData){
    const username = formData.username
    const password = formData.password
    
    //CognitoUser object
    const user = new CognitoUser({
      Username: username,
      Pool: userPool
    })
    
    //Authenticate User
    const cognitoUser = await new Promise((resolve, reject) => 
      user.authenticateUser(
        new CognitoUserSession({
            Username: username,
            Pool: userPool
        }),
        (err, result) => {
          if (err){
            reject(err)
            return
          }
          resolve(result)
        }
      )
    )
    
    //Get user attributes
    const attributes = await new Promise((resolve, reject) => 
      user.getUserAttributes((err, attributes) => {
        if (err) {
          reject(err)
        }
        resolve(attributes) 
      }) 
    )
    
    return {
      idToken: cognitoUser.idToken.jwtToken,
      accessToken: cognitoUser.accessToken.jwtToken,
      expiresAt: cognitoUser.expiration,
      username,
      attributes
    }
  }
  
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="submit" />
    </form>
  )
}