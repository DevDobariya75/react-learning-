import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)

  const [charAllowed , setCharAllowed] = useState(false)
  const[password , setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
  setPassword(pass)
  } , [length , numberAllowed , charAllowed , setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0 ,20  )
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  } , [length , numberAllowed , charAllowed , passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-xl mx-auto mt-20 text-orange-500 bg-slate-800 rounded-xl px-5 py-4 shadow-xl">

        <h1 className="text-white text-lg font-medium text-center mb-4">
          Password generator
        </h1>

        <div className="flex items-center bg-white rounded-lg overflow-hidden mb-3">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="w-full px-3 py-2 text-sm text-gray-700 outline-none"
            ref = {passwordRef}
          />
          <button onClick={copyPasswordToClipboard} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm shrink-0">
            copy
          </button>
        </div>

        <div className="flex items-center gap-x-4 text-sm text-orange-400">

          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer accent-blue-500 h-1"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="whitespace-nowrap">
              Length: {length}
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
              className="accent-blue-500"
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
              className="accent-blue-500"
            />
            <label>Characters</label>
          </div>

        </div>
    </div>
    </>
  )
}

export default App
