/**
 * Created by 十九 on 2018/1/21.
 */
require('../../css/loginStyle.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';

class Login extends React.Component {

    render() {
        return <div  className="pageBody">
            <div className="title">
                <span>大学生学习资料共享系统</span>
            </div>
            <div className="login">
                <div className="headline">
                    <span >账号登录</span>
                </div>
                <div>
                    <input type="text" className="username" ref="userName" placeholder="输入用户名" />
                    <span className="input-tips" id="usernameTip"></span>
                </div>
                <div>
                    <input type="password" className="pass" ref="passWord" placeholder="输入密码" />
                    <span className="input-tips" id="passwordTip"></span>
                </div>
                <div className="forget">
                    <span >忘记密码？</span>
                </div>
                <div>
                    <button  className="submit">登录</button>
                </div>
                <div className="registerTip">
                    还没有FSMS账号？
                    <Link to ="/register" >立即注册</Link>
                </div>
            </div>
        </div>
    }
}

export default Login;