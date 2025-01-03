import React ,{useState} from 'react'

const Form = () => {
    // console.log(document.getElementsByName(target.Username.value))
    const [formData,setFormData] = useState({
        username:'',
        password:''
    })
    const handleChange = (event) => {
        const { name, value } = event.target; // Destructure the name and value from the input field
        setFormData((prevData) => ({
          ...prevData,
          [name]: value // Dynamically update the corresponding field in formData
        }));
      };
      const handleSubmit = (event)=>{
        event.preventDefault()
        console.log("this is formData")
        // console.log(formData)
      }
  return (
    <form onSubmit={handleSubmit}>
        <label > Name:
            <input type='text' name='username' value={formData.username} onChange={handleChange}/>
        </label>
        <label > Password:
            <input type='password' value={formData.password} onChange={handleChange}name='password'/>
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form