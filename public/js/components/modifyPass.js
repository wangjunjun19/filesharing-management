/**
 * Created by 十九 on 2018/2/13.
 */
require('../../css/registerStyle.css');
require('../../css/button.css');
require('../../css/background.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';

export default
class ModifyPass extends React.Component {

    verifyUsername(){
        let username=this.refs.username.value;
        let regexp=/^[A-Za-z0-9]{6,8}$/;

        if(!regexp.test(username)){
            $("#nameTip").text("用户名为6-8位字母数字组合");
        }
    }


    verifyPass(){
        let password=this.refs.password.value;
        let regexp=/^[A-Za-z0-9]{6,16}$/;

        if(!regexp.test(password)){
            $("#passTip").text("密码为6-16位字母数字组合");
        }
    }


    focusName(){
        $("#nameTip").text("");
    }

    focusPass(){
        $("#passTip").text("");
    }

    return(){
        browserHistory.push('');
    }

    modifyPass(){
        let username = this.refs.username.value;
        let password = this.refs.password.value;

      //  console.log("user_"+username+"pass_"+password);

        let name = $("#username").text();
        let psTip = $("#passTip").text();

        if(username === "" || password ===""){
            $("#psTip").text("输入框内容不能为空！");
        }else if(psTip != ""){
            $("#password").focus();
        }else if(name != ""){
            $("#username").focus();
        }else{
            let info = {
            username,password
            }
            console.log("user_"+username+"pass_"+password +"info"+info);
            console.log("hello modify");
            console.log({username:this.refs.username.value,password:this.refs.password.value});
            this.props.modifyPass({username:this.refs.username.value,password:this.refs.password.value});

        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.modifyPassTip+"_________modifyPassTip__");
        if (nextProps.modifyPassTip === "该用户名未注册！") {
            $("#nameTip").text("该用户名未注册！");
            this.props.reset({modifyPassTip: false});
        } else if (nextProps.modifyPassTip) {
            alert("恭喜您，密码修改成功！" +
            "点击确定，将跳往登录页面" );
            browserHistory.push('');
            this.props.reset({modifyPassTip: false});
        }
    }


    render() {
        return <div >
            <div>
                <div className="quicklogin">
                    <Link to="">登录</Link>
                </div>
                <div className="register">
                    <div className="headline">
                        <span>重置登录密码</span>
                    </div>
                    <div>
                        <input type="text" className="username" ref="username" placeholder="用户名" id="username"
                            onBlur={this.verifyUsername.bind(this)} onFocus={this.focusName.bind(this)}/>
                        <span className="input-tips" id="nameTip"></span>
                    </div>
                    <div>
                        <input type="password" className="pass" ref="password" placeholder="新密码"
                            onBlur={this.verifyPass.bind(this)} onFocus={this.focusPass.bind(this)}/>
                        <span className="input-tips" id="passTip"></span>
                    </div>
                    <div>
                        <button  className="button" onClick={this.modifyPass.bind(this)} >确认</button>
                        <button  className="button"  onClick={this.return.bind(this)} >取消</button>
                    </div>
                </div>
            </div>
            <div  className ="helloB">
                <img  className ="img"  src = "../image/helloB.jpg" alt =""/>
            </div>
        </div>
    }
}