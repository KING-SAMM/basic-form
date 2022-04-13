
const App = () => 
{
  const [ values, useValues ] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  const handleFirstnameInoutChange = (e) => 
  {
    setValues({ ...values, firstname: e.target.value });
  }

  return (
    <div className="App">
      <form className="reg-form" action="">
        <input 
          type="text" 
          className="form-field"
          name="firstname" 
          placeholder="First Name"
          value={ values.firstname }
          onChange={ handleFirstnameInoutChange }
        /> <br />
        <input 
          type="text" 
          className="form-field"
          name="lastname" 
          placeholder="Last Name"
          value={ values.lastname }
        /> <br />
        <input 
          type="email" 
          className="form-field"
          name="email" 
          placeholder="Email"
          value={ values.email }
        /> <br />
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
