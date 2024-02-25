import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SignedOut, SignedIn, SignInButton, SignOutButton} from "@clerk/clerk-react"
function App() {
   

  return (
    <div className='w-full bg-blue-400'>
      <SignedOut>
      <SignInButton/>

        <p>This content is public . Only signed out users can see this.</p>
      </SignedOut>
    <SignedIn>
    <SignOutButton signOutCallback={() => redirect('/')} />
      <p>this content is private. Onlhy signed in users can see this.</p>
    </SignedIn>
    </div>
  )
}

export default App
