import React from 'react'
import app from './base'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>app.auth().signOut()} >Sign Out</button>
        </div>
    )
}
