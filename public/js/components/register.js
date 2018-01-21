/**
 * Created by 十九 on 2018/1/21.
 */
require('../../css/registerStyle.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';

export default
class Register extends React.Component {

    render() {
        return <div >
            <div>
                <div className="quicklogin">
                    <Link to="/login">登录</Link>
                </div>
                <div className="register">
                    <div className="headline">
                        <span>注册账号</span>
                    </div>
                    <div>
                        <input type="text" className="username" ref="userName" placeholder="请输入用户名" />
                        <span className="input-tips" id="usernameTip"></span>
                    </div>
                    <div>
                        <input type="password" className="pass" ref="passWord" placeholder="请输入密码" />
                        <span className="input-tips" id="passwordTip"></span>
                    </div>
                    <div>
                        <input type="password" className="pass" ref="passWord" placeholder="请再次输入密码" />
                        <span className="input-tips" id="repasswordTip"></span>
                    </div>
                    <button  className="submit">注册</button>
                </div>
            </div>
        </div>
    }
}
