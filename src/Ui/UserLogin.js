import React, { Component } from 'react';
import axios from 'axios';

export default class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            user_name: '',
            password: '',
        }
    }

    onChangeUserName(e){
        this.setState({
            user_name: e.target.value

        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value

        });
    }
    onSubmit(e){
        e.preventDefault();
    

    const obj = {
        user_name: this.state.user_name,
        password: this.state.password,
    };

    axios.post('http://localhost/bizlogic/index.php', obj)
    .then(res => console.log(res.data));
    //console.log(obj)
    }

    render() {
        return (
            <div syle = {{marginTop: 10}}>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit} >
                    <div className="form-grop">
                        <label>User Name: </label>
                        <input type="text" className = "form-control"
                        value={this.state.user_name}
                        onChange={this.onChangeUserName}/>
                    </div>
                    <div className="form-grop">
                        <label>Password: </label>
                        <input type="text" className = "form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-grop">
                        
                        <input type="submit" value= "Login" className = "btn btn-primary"/>
                    </div>

                </form>
                </div>
        )
    }
}