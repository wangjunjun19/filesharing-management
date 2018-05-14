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
        this.refs.username.value ="";
        this.refs.password.value = "";
    }

    verifyRe(){
        let password=this.refs.password.value;
        let rep=this.refs.repass.value;

        if(rep !== password){
            $("#repTip").text("与初始密码不一致");
        }
    }

    focusRe(){
        $("#repTip").text("");
    }

    modifyPass(){
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let rep=this.refs.repass.value;

      //  console.log("user_"+username+"pass_"+password);

        let name = $("#username").text();
        let psTip = $("#passTip").text();
        let reTip=$("#repTip").text();

        if(username === "" || password ==="" || rep===""){
            $("#psTip").text("输入框内容不能为空！");
        }else if(psTip != ""){
            $("#password").focus();
        }else if(name != ""){
            $("#username").focus();
        }else if(reTip != ""){
            $("#repTip").focus();
        } else{
            let info = {
            username,password
            }
            this.props.modifyPass({username:this.refs.username.value,password:this.refs.password.value});

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modifyPassTip === "该用户名未注册！") {
            $("#nameTip").text("该用户名未注册！");
            this.props.resetModifyPass({modifyPassTip: false});
        } else if (nextProps.modifyPassTip) {
            alert("恭喜您，密码修改成功！" +
            "点击确定，将跳往登录页面" );
            browserHistory.push('');
            this.props.resetModifyPass({modifyPassTip: false});
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
                        <input type="text" className="username" ref="username" placeholder="您的用户名" id="usernam"
                            onBlur={this.verifyUsername.bind(this)} onFocus={this.focusName.bind(this)}/>
                        <span className="input-tips" id="nameTip"></span>
                    </div>
                    <div>
                        <input type="password" className="pass" ref="password" placeholder="您的新密码"
                            onBlur={this.verifyPass.bind(this)} onFocus={this.focusPass.bind(this)}/>
                        <span className="input-tips" id="passTip"></span>
                    </div>
                    <div>
                        <input type="password" className="pass" ref="repass" placeholder="再次输入您的新密码"
                            onBlur={this.verifyRe.bind(this)} onFocus={this.focusRe.bind(this)}/>
                        <span className="input-tips" id="repTip"></span>
                    </div>
                    <div>
                        <button  className="button-m" onClick={this.modifyPass.bind(this)} >确认</button>
                        <button  className="button-m"  onClick={this.return.bind(this)} >取消</button>
                    </div>
                </div>
            </div>
            <div  className ="helloB">
                <img  className ="img"  src = "../image/helloB.jpg" alt =""/>
            </div>
        </div>
    }
}