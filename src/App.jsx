import { useState } from 'react';

const App = () => 
{
  const [ values, setValues ] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  const [ submitted, setSubmitted ] = useState(false);
  const [ valid, setValid ] = useState(false);

  const handleFirstnameInputChange = (e) => 
  {
    setValues({ ...values, firstname: e.target.value });
  };

  const handleLastnameInputChange = (e) => 
  {
    setValues({ ...values, lastname: e.target.value });
  };

  const handleEmailInputChange = (e) => 
  {
    setValues({ ...values, email: e.target.value });
  };

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
        <input 
          type="text" 
          className="form-field"
          name="firstname" 
          placeholder="First Name"
          value={ values.firstname }
          onChange={ handleFirstnameInputChange }
        /> 
        <br />
        { submitted && !values.firstname 
        ? <><span>First Name is required</span></>
        : null
        }
        
        <input 
          type="text" 
          className="form-field"
          name="lastname" 
          placeholder="Last Name"
          value={ values.lastname }
          onChange={ handleLastnameInputChange }
        /> 
        <br />
          { submitted && !values.lastname 
          ? <><span>Last Name is required</span><br /></>
          : null
          }
          
        <input 
          type="email" 
          className="form-field"
          name="email" 
          placeholder="Email"
          value={ values.email }
          onChange={ handleEmailInputChange }
        /> 
        <br />
          { submitted && !values.email 
          ? <><span>Email Name is required</span></>
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

