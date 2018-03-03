/**
 * Created by 十九 on 2018/1/21.
 */
require('../../css/loginStyle.css');
require('../../css/background.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';

class Login extends React.Component {
    verifyUsername(){
        let username=this.refs.username.value;
        let regexp=/^[A-Za-z0-9]{6,8}$/;

        if(!regexp.test(username)){
            $("#usernameTip").text("用户名为6-8位字母数字组合");
        }
    }

    verifyPass(){
        let password=this.refs.password.value;
        let regexp=/^[A-Za-z0-9]{6,16}$/;

        if(!regexp.test(password)){
            $("#passwordTip").text("密码为6-16位字母数字组合");
        }
    }

    focusName(){
        $("#usernameTip").text("");
        $("#passwordTip").text("");
    }

    focusPass(){
        $("#passwordTip").text("");
    }

    onLogin(){
        let username=this.refs.username.value;
        let password=this.refs.password.value;

        if(username === "" || password === ""){
            $("#passwordTip").text("用户名或密码为空，请重新输入");
        }
        else {
            let info={ "user_name":username,
                "user_pass":password
            }
            console.log("login11");
            console.log(info);
            this.props.onLogin(info);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.loginTip[0]);
        if (nextProps.loginTip[0]) {
            console.log("shujuku");
            browserHistory.push(`/userHomePage?user_id=${nextProps.loginTip[0].id}`);
        } else{
            $("#passwordTip").text("用户名或密码错误！");
        }
    }


    render() {
        return <div  className="pageBody" >
            <div className="title">
                <span>大学生学习资料共享系统</span>
            </div>
            <div className="login">
                <div className="headline">
                    <span >账号登录</span>
                </div>
                <div>
                    <input type="text" className="username" ref="username" placeholder="输入用户名"
                        onBlur={this.verifyUsername.bind(this)} onFocus={this.focusName.bind(this)}/>
                    <span className="input-tips" id="usernameTip"></span>
                </div>
                <div>
                    <input type="password" className="pass" ref="password" placeholder="输入密码"
                        onBlur={this.verifyPass.bind(this)} onFocus={this.focusPass.bind(this)}/>
                    <span className="input-tips" id="passwordTip"></span>
                </div>
                <div className="forget">
                    <Link to = '/modifyPass'>忘记密码？</Link>
                </div>
                <div>
                    <button  className="submit" onClick={this.onLogin.bind(this)}>登录</button>
                </div>
                <div className="registerTip">
                    还没有FSMS账号？
                    <Link to ="/register" >立即注册</Link>
                </div>
            </div>
            <div  className ="helloB">
                <img  className ="img"  src = "../image/helloB.jpg" alt =""/>
            </div>
        </div>
    }
}

export default Login;