/**
 * Created by 十九 on 2018/1/21.
 */
require('../../css/registerStyle.css');
require('../../css/background.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';

export default
class Register extends React.Component {

    verifyUsername(){
        let username=this.refs.username.value;
        let regexp=/^[A-Za-z0-9]{6,16}$/;

        if(!regexp.test(username)){
            $("#nameTip").text("用户名为6-16位字母数字组合");
        }
    }


    verifyPass(){
        let password=this.refs.password.value;
        let regexp=/^[A-Za-z0-9]{6,16}$/;

        if(!regexp.test(password)){
            $("#passTip").text("密码为6-16位字母数字组合");
        }
    }

    verifyRe(){
        let password=this.refs.password.value;
        let rep=this.refs.pass.value;

        if(rep !== password){
            $("#repTip").text("与初始密码不一致");
        }
    }

    focusName(){
        $("#nameTip").text("");
    }

    focusPass(){
        $("#passTip").text("");
    }

    focusRe(){
        $("#repTip").text("");
    }

    register(){
        let name=$("#username").text();
        let psTip=$("#passTip").text();
        let reTip=$("#repTip").text();

        let username=this.refs.username.value;
        let password=this.refs.password.value;
        let rep=this.refs.pass.value;

        if(username === "" ||password === ""||rep ===""){
            $("#repTip").text("输入框内容不能为空！");
        }
        else if(psTip != ""){
            $("#password").focus();
        }
        else if(reTip != ""){
            $("#rep").focus();
        }
        else if(name != "" ){
            $("#username").focus();
        }
        else {
            let info={ "user_name":this.refs.username.value,
                "user_pass":this.refs.password.value
            }
            this.props.register(info);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.registerTip+"_________register__")
        if (nextProps.registerTip === "该用户名已被注册，请重新输入！") {
            $("#nameTip").text("该用户名已被注册，请重新输入！");
            this.props.reset({registerTip: false});
        } else if (nextProps.registerTip) {
            alert("恭喜您，注册成功！" +
            "点击确定，将跳往登录页面" );
            browserHistory.push('');
            this.props.reset({registerTip: false});
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
                        <span>注册账号</span>
                    </div>
                    <div>
                        <input type="text" className="username" ref="username" placeholder="请输入用户名" id="usernam"
                            onBlur={this.verifyUsername.bind(this)} onFocus={this.focusName.bind(this)}/>
                        <span className="input-tips" id="nameTip"></span>
                    </div>
                    <div>
                        <input type="password" className="pass" ref="password" placeholder="请输入密码"
                            onBlur={this.verifyPass.bind(this)} onFocus={this.focusPass.bind(this)}/>
                        <span className="input-tips" id="passTip"></span>
                    </div>
                    <div>
                        <input type="password" className="pass" ref="pass" placeholder="请再次输入密码"
                            onBlur={this.verifyRe.bind(this)} onFocus={this.focusRe.bind(this)} />
                        <span className="input-tips" id="repTip"></span>
                    </div>
                    <button  className="submit" onClick={this.register.bind(this)} >注册</button>
                </div>
            </div>
            <div  className ="helloB">
                <img  className ="img"  src = "../image/helloB.jpg" alt =""/>
            </div>
        </div>
    }
}