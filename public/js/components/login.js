/**
 * Created by 十九 on 2018/1/21.
 */
import React from 'react';
import {Link,browserHistory} from 'react-router';

class Login extends React.Component{

    render(){
        return <div>
            <div>
                <span>大学生学习资料共享系统</span>
            </div>
            <div id="login">
                <div><span>账号登录</span></div>
                <input type="text" className="username" ref="userName" placeholder="输入用户名" />
                <input type="password" className="pass" ref="passWord" placeholder="输入密码" />
                <span>忘记密码？</span>
                <button  className="submit">登录</button>
                <div>
                    <h5>还没有FSMS账号？</h5>
                    <Link to ="/register" className="register-now">立即注册</Link>
                </div>
            </div>
        </div>
    }
}

export default Login;