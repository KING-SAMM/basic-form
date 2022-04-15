import { useState } from 'react';


// Define Input component for form input elements
const Input = ({ placeholder, type, name, value, handleInputChange }) => (
  <input 
      type={ type }
      placeholder={ placeholder }
      value={ value }
      onChange={ (e) => handleInputChange(e, name) }
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const App = () => 
{
  // Define initail states foe input values
  const [ values, setValues ] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  // Define initial states for submition and validation
  const [ submitted, setSubmitted ] = useState(false);
  const [ valid, setValid ] = useState(false);

  // Handle input fields change
  const handleInputChange = (e, name) => 
  {
    //prevState is available to us from React
    setValues((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  // Handle submition
  const handleSubmit = (e) => 
  {
    e.preventDefault();
    if(values.firstname && values.lastname  && values.email )
    {
      setValid(true);
    } 
    else
    {
      setValid(false);
    } 

    setSubmitted(true);
  }

  return (
    <div className="App">
      <h2>Register</h2>
      <form className="reg-form" onSubmit={ handleSubmit }>
        { submitted && valid
        ? <h3 className="success-message">Registration successful!</h3> 
        : null
        }
        <Input 
          type="text" 
          className="form-field"
          name="firstname" 
          placeholder="First Name"
          value={ values.firstname }
          handleInputChange={ handleInputChange }
        /> 
        <br />
        { submitted && !values.firstname 
        ? <><span>First Name is required</span><br /></>
        : null
        }
        
        <Input 
          type="text" 
          className="form-field"
          name="lastname" 
          placeholder="Last Name"
          value={ values.lastname }
          handleInputChange={ handleInputChange }
        /> 
        <br />
          { submitted && !values.lastname 
          ? <><span>Last Name is required</span><br /></>
          : null
          }
          
        <Input 
          type="email" 
          className="form-field"
          name="email" 
          placeholder="Email"
          value={ values.email }
          handleInputChange={ handleInputChange }
        /> 
        <br />
          { submitted && !values.email 
          ? <><span>Email Name is required</span><br /></>
          : null
          }

        <input 
          type="submit" 
          className="form-field"
          name="submit" 
          placeholder="Register"
          />
      </form>
    </div>
  )
}

export default App

