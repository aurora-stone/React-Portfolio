import {
  useState
} from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const validation = (state) => {
    if(state.target.name === "Email"){
      validateEmail(state)
    }
   if (state.target.value === ""){
    setError("This field is required")
   }
  }
  const validateEmail = (state) => {
    const pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    const regex = new RegExp(pattern)
    if (regex.test(state.target.value)){
      console.log(true)
    }
    else {
      console.log(false)
      setError("Not a valid email")
    }
  }
  return (
    <div>
      <h1>Contact Page</h1>
    <div>
      <p>{error}</p>
      <label>Name</label>
      <input value = {name} onFocus = {() => setError("")} onBlur = {e => validation(e)} onChange = {e => setName(e.value)} name = "Name"></input>
      <label>Email</label>
      <input value = {email} onFocus = {() => setError("")} onBlur = {e => validation(e)} onChange = {e => setEmail(e.value)} name = "Email"></input>
      <label>Message</label>
      <input value = {message} onFocus = {() => setError("")} onBlur = {e => validation(e)} onChange = {e => setMessage(e.value)} name = "Message"></input>
      <button>Submit</button>
    </div>
    </div>
  );
}
