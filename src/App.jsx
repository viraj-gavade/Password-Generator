import React, { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const passwordRef = useRef(null) 

    
  const copyToClipboard = useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0, 99999) 
    window.navigator.clipboard.writeText(password)
  },[password])

    const passwordGenerator = useCallback(()=>{
      let pass = ''
      let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if(numberAllowed) string+='0123456789'
      if(charAllowed) string +='!@#$%^&*()_+-=[]{}|;,.<>/?`~'
      
      for (let i = 1; i <=length; i++) {
        let char = Math.floor(Math.random()*string.length)
        pass += string.charAt(char)
      }
      setPassword(pass)
    },[length,numberAllowed,charAllowed,setPassword])


    useEffect(() => {
      passwordGenerator()
    }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-10 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-white/20">
        <div className="px-6 py-8 sm:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">Password Generator</h1>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
            <p className="text-slate-300 mt-4 text-sm sm:text-base max-w-sm mx-auto">Create strong, secure passwords to keep your accounts protected</p>
          </div>
          
          <div className="space-y-7">
            <div className="relative">
              <div className="flex overflow-hidden rounded-lg shadow-md">
                <input 
                  type="text" 
                  value={password} 
                  className="w-full px-5 py-4 text-slate-800 bg-slate-100 rounded-l-lg focus:outline-none font-mono text-lg" 
                  readOnly 
                  placeholder="Your secure password" 
                  ref={passwordRef}
                />
                <button 
                  onClick={copyToClipboard}
                  className="bg-indigo-600 text-white px-6 flex items-center justify-center rounded-r-lg hover:bg-indigo-700 transition-all duration-200 font-semibold"
                >
                  Copy
                </button>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-5 sm:p-6 rounded-xl border border-slate-700/50">
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <label className="text-slate-200 font-medium">Password Length</label>
                  <div className="flex items-center">
                    <input 
                      type="range" 
                      min={8} 
                      max={32} 
                      value={length} 
                      className="w-full sm:max-w-[180px] h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer mx-3" 
                      onChange={(e) => {setLength(e.target.value)}}
                    />
                    <span className="bg-indigo-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                      {length}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors border border-slate-600/50">
                  <input 
                    id="numberAllowed" 
                    type="checkbox" 
                    checked={numberAllowed} 
                    onChange={() => {setNumberAllowed(prev => !prev)}}
                    className="w-5 h-5 mr-3 accent-indigo-600 rounded-md"
                  />
                  <label htmlFor="numberAllowed" className="cursor-pointer text-slate-200 font-medium">
                    Include Numbers
                  </label>
                </div>
                
                <div className="flex items-center p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors border border-slate-600/50">
                  <input 
                    id="charAllowed" 
                    type="checkbox" 
                    checked={charAllowed} 
                    onChange={() => {setCharAllowed(prev => !prev)}}
                    className="w-5 h-5 mr-3 accent-indigo-600 rounded-md"
                  />
                  <label htmlFor="charAllowed" className="cursor-pointer text-slate-200 font-medium">
                    Include Symbols
                  </label>
                </div>
              </div>
            </div>
            
            <button 
              onClick={passwordGenerator}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/30 font-bold text-lg"
            >
              Generate New Password
            </button>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-slate-400">All passwords are generated locally and never stored</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
