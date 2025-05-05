import React, { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  
    const [length , setLength] = useState(8)
    const [numberAllowed , setNumberAllowed ] = useState(false)
    const [charAllowed , setCharAllowed ] = useState(false)
    const [password , setPassword ] = useState('')

    useCallback()
    
    const passwordGenerator = useCallback(()=>{
      let pass = ''
      let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if(numberAllowed) string+='0123456789'
      if(charAllowed) string +='!@#$%^&*()_+-=[]{}|;,.<>/?`~'
      
      for (let i = 1; i <=array.length; i++) {
        let char = Math.floor(Math.random()*string.length + 1)
        pass = string.charAt(char)
        
      }

      setPassword(pass)
    },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
    <div>
      <h1></h1>
    </div>
    </>
  )
}

export default App
