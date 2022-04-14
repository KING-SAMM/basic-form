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
      <h2>Inputs</h2>
      <h3>{ values.firstname }</h3>
      <h3>{ values.lastname }</h3>
      <h3>{ values.email }</h3>
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
        { submitted && !values.firstname 
        ? <span>First Name is required</span>
        : null
        }
        <br />
        <input 
          type="text" 
          className="form-field"
          name="lastname" 
          placeholder="Last Name"
          value={ values.lastname }
          onChange={ handleLastnameInputChange }
          /> 
          { submitted && !values.lastname 
          ? <span>Last Name is required</span>
          : null
          }
          <br />
        <input 
          type="email" 
          className="form-field"
          name="email" 
          placeholder="Email"
          value={ values.email }
          onChange={ handleEmailInputChange }
          /> 
          { submitted && !values.email 
          ? <span>Email Name is required</span>
          : null
          };
          <br />
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

