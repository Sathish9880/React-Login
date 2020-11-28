import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import LoginForm from './LoginForm';

function App() {
  const adminUser={
    email:'admin',pass:'123'
  }
  const [user,setUser]= useState({name:'',email:''})
  const [error,setError]=useState("");
  const Login = details=>{
    console.log(details);
    if(details.email===adminUser.email && details.pass === adminUser.pass){
      console.log('login successfully');
      setUser({
        name:details.name,
        email:details.email
      })
      
    }else{
      setError('error details ')
      console.log('login failed..');
      
    }
  }
  const Logout =() =>{
    console.log('logout..!');
    setUser({
      name:'',
      email:''
    })
    
  }

  return (
    <div className="App">
     {
       (user.email!="")?(<div>
         <h2>Welcome to <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
       </div>
       ) : (
       <LoginForm Login={Login} error={error}></LoginForm>
     )}
    </div>
  );
  }

export default App;
