require('../../css/personalCenter.css')
import React from 'react';
import {Link,browserHistory} from 'react-router';
import Nav from './nav'

class PersonalCenter extends React.Component{

    verifyPass(){
        let password=this.refs.password.value;
        let regexp=/^[A-Za-z0-9]{6,16}$/;

        if(!regexp.test(password)){
            $("#password").text("密码为6-16位字母数字组合");
        }
    }

    focusPass(){
        $("#password").text("");
    }

    verifyTel(){
        let tel=this.refs.tel.value;
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(tel))){
            $("#tel").text("手机号不正确");
        }
    }
    focusTel(){
        $("#tel").text("");
    }

    cancellation(){
            let tip = confirm("您确认要注销该账户吗？")
            if(tip === true){
                let info={
                    user_id:this.props.location.query.user_id
                }
                this.props.cancellation(info);
            }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.cancelTip) {
            alert("恭喜您，账户注销成功，请重新登录！");
            browserHistory.push('');
        }
    }

    render(){


        return<div className="per-bac">
            <Nav/>
            <div className="per-main">
                <div className="per-div">
                    <lable className="per-mes">个人信息</lable>
                </div>
                <div className="per-div">
                    <label className="per-lab">用户名:</label><input type="text" disabled/>
                </div>
                <div className="per-div">
                    <label className="per-lab">密码:</label><input type="password" ref="password"
                    onBlur={this.verifyPass.bind(this)} onFocus={this.focusPass.bind(this)}/>
                    <span className="per-tips" id="password"></span>
                </div>
                <div className="per-div">
                    <label className="per-lab">性别:</label><input type="text"/>
                </div>
                <div className="per-div">
                    <label className="per-lab">年龄:</label><input type="text"/>
                </div>
                <div className="per-div">
                    <label className="per-lab">手机号:</label><input type="tel" ref="tel"
                    onBlur={this.verifyTel.bind(this)} onFocus={this.focusTel.bind(this)}/>
                    <span className="per-tips" id="tel"></span>
                </div>
                <div className="per-div">
                    <button className="per-but">保存账号信息</button>
                    <button className="per-but" onClick={this.cancellation.bind(this)}>注销账户</button>
                </div>.
            </div>
        </div>
    }
}

export default PersonalCenter;