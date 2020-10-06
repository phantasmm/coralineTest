import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin:false,
             userName:'',
             password:''
        }
        this.loginHandler=this.loginHandler.bind(this)
        this.logoutHandler=this.logoutHandler.bind(this)
    }
    changeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
        
    }
    loginHandler(){
        if(this.state.password==="P@$$W0RD"){
            this.setState({
                isLogin:true
            })
        }
        else{
            alert('Wrong Password')
        }
    }
    logoutHandler(){
        this.setState({
            isLogin:false
        })
    }
    render() {
        const {isLogin,userName,password}=this.state
        return (
            <div>
                {
                    isLogin?
                    <div>
                    <h1>ยินดีต้อนรับ : {this.state.userName}</h1>
                    {/* <button onClick={()=>console.log(this.state)}>Log</button> */}
                    <button onClick={this.logoutHandler}>Logout</button>
                    </div>
                    :
                    <div>
                    <label>User Name:</label>
                    
                    <input type="text" 
                        name="userName" 
                        value={userName}
                        onChange={this.changeHandler}
                    ></input>
                    <br></br>
                    <label>Password:</label>
                    
                    <input type="password" 
                    name="password" 
                    value={password}
                    onChange={this.changeHandler}
                    ></input>
                    <br></br>
                    {/* <button onClick={()=>console.log(this.state)}>Log</button> */}
                    <button onClick={this.loginHandler}>Login</button>
                    </div>
                }
            </div>
        )
    }
}

export default Login
