
const App = () => 
{

  return (
    <div className="App">
      <form className="reg-form" action="">
        <input 
          type="text" 
          className="form-field"
          name="firstname" 
          placeholder="First Name"
        /> <br />
        <input 
          type="text" 
          className="form-field"
          name="lastname" 
          placeholder="Last Name"
        /> <br />
        <input 
          type="email" 
          className="form-field"
          name="email" 
          placeholder="Email"
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
