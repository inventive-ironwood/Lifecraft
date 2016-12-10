// /login, /logout, /signup
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    console.log('state', this.state)
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        username: 'Bob',
        password: 'Apple'
      })
    }).then(function(response) {
      console.log('got response!')
    }).catch(function(err) {
      console.error(err);
    })
  }

  handleUserChange(e){
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div className='signin-box container'>
        <form className='form-signin' onSubmit={this.handleSubmit}>
          <h2 className='form-signin-header'>HR50 Sign In</h2>
          <label><input onChange={this.handleUserChange} type='text' id='username' className='form-control' placeholder='Enter username'></input></label>
          <label><input onChange={this.handlePasswordChange} type='password' id='password' className='form-control' placeholder='Enter password'></input></label>

          <label><input type='checkbox' value='remember-me' /> Remember Me </label>
          <Link to={`home`}><button className='btn btn-large btn-primary btn-block' type='submit'>Submit</button></Link>
        </form>
        <a href="/home">Home</a>
      </div>
    )
  }
}

window.Login = Login;

// ReactDOM.render(<Login />, document.getElementById('login'))