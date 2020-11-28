import React, {useState} from 'react'

function LoginForm({Login,error}) {
    const [details, setDetails]= useState({name:'',email:'',pass:''});
    const submitHandler = e=>{
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <h2>Login Page</h2>
                {(error!='')?(<div>{error}</div>):''}
                <div>
                    <label>UserName:</label>
                    <input type="text" onChange={e=>setDetails({...details,name:e.target.value})}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={e=>setDetails({...details,email:e.target.value})} ></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={e=>setDetails({...details,pass:e.target.value})}></input>
                </div>
                <input type="submit" value="Login"></input>
            </div>

        </form>
    )
}

export default LoginForm;
