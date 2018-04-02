require('../../css/personalCenter.css')
import React from 'react';
import {Link,browserHistory} from 'react-router';
import Nav from './nav'

class PersonalCenter extends React.Component{

    componentWillMount() {
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_id;
        let info={
            user_id:id
        }
        this.props.getUserInfo(info);

    }

    verifyPass(){
        let password=this.refs.password.value;
        let regexp=/^[A-Za-z0-9]{6,16}$/;

        if(!regexp.test(password)&& password!=''){
            $("#password").text("密码为6-16位字母数字组合");
        }
    }

    focusPass(){
        $("#password").text("");
        $("#mtip").text("");
    }

    verifyTel(){
        let tel=this.refs.tel.value;
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(tel)) && tel!=''){
            $("#tel").text("手机号不正确");
        }
    }

    verifySex(){
        let sex=this.refs.sex.value;
        if(sex != "女"&& sex!="男" && sex!=''){
            $("#sex").text("请输入女/男/不输入");
        }
    }
    focusSex(){
        $("#sex").text("");
        $("#mtip").text("");
    }

    focusTel(){
        $("#tel").text("");
        $("#mtip").text("");
    }

    changPass(){
        document.getElementById("pass").value="";

    }

    cancellation(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_id;
            let tip = confirm("您确认要注销该账户吗？")
            if(tip === true){
                let info={
                    user_id:id
                }
                this.props.cancellation(info);
            }
    }

    updateUser(){
        let pass=$("#password").text();
        let sex=$("#sex").text();
        let tel=$("#tel").text();

        if(pass!=''|| sex != ''|| tel !='')
        {
            $("#mtip").text("修改项格式有误，请根据提示填写正确格式的内容");
        }
        else{
            let cookies = {};
            document.cookie.split(';').forEach((Cookie)=> {
                let parts = Cookie.split('=');
                cookies[parts[0].trim()] = (parts[1]).trim();
            });
            let id = cookies.user_id;
            let info= {
                user_pass: this.refs.password.value,
                user_sex: this.refs.sex.value,
                user_tel: this.refs.tel.value,
                user_id: id
            }
            this.props.updateUser(info);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.cancelTip) {
            alert("恭喜您，账户注销成功，请重新登录！");
            this.props.resetPer({cancelTip: false});
            browserHistory.push('');
        }

        if(nextProps.updateTip) {
            this.props.resetPer({updateTip: false});
            alert("恭喜您，信息修改成功！");
            let cookies = {};
            document.cookie.split(';').forEach((Cookie)=> {
                let parts = Cookie.split('=');
                cookies[parts[0].trim()] = (parts[1]).trim();
            });
            let id = cookies.user_id;
            let info={
                user_id:id
            }
            this.props.getUserInfo(info);
        }
    }

    render(){
        var name=this.props.userInfoTip.map((value,index)=>{
            var s=<div className="per-addDiv">
                <input type="text" ref="user_name" disabled id="name"  value={value.user_name} ></input>
            </div>
            return s;
        });
        var pass=this.props.userInfoTip.map((value,index)=>{
            return<div className="per-addDiv">
                <input type="password" ref="password" id="pass"
                    onBlur={this.verifyPass.bind(this)} onFocus={this.focusPass.bind(this)} defaultValue={value.user_pass}  onChange={this.handleChange}></input>
            </div>
        });

        var sex=this.props.userInfoTip.map((value,index)=>{
            if(value.user_sex === 'null')
                value.user_sex="";
            return<div className="per-addDiv">
                <input type="text" ref="sex" defaultValue ={value.user_sex}  onBlur={this.verifySex.bind(this)} onFocus={this.focusSex.bind(this)}/>
            </div>
        });

        var tel=this.props.userInfoTip.map((value,index)=>{
            if(value.user_tel === 'null')
                value.user_tel="";
            return<div className="per-addDiv">
                <input type="tel" ref="tel"
                    onBlur={this.verifyTel.bind(this)} onFocus={this.focusTel.bind(this)} defaultValue ={value.user_tel} />
            </div>
        });


        return<div className="per-bac">
            <Nav/>
            <div className="per-main">
                <div className="per-div">
                    <lable className="per-mes">个人信息</lable>
                </div>
                <div className="per-div">
                    <label className="per-lab">用户名:</label>{name}
                </div>
                <div className="per-div">
                    <label className="per-lab">密码:</label>{pass}
                    <span className="per-tips" id="password"></span>
                </div>
                <div className="per-div">
                    <label className="per-lab">性别:</label>{sex}
                    <span className="per-tips" id="sex"></span>
                </div>
                <div className="per-div">
                    <label className="per-lab">手机号:</label>{tel}
                    <span className="per-tips" id="tel"></span>
                </div>
                <div className="per-div">
                <span className="per-tip" id="mtip"></span>
                </div>
                <div className="per-div">
                    <button className="per-but" onClick={this.updateUser.bind(this)}>保存账号信息</button>
                    <button className="per-but" onClick={this.cancellation.bind(this)}>注销账户</button>
                </div>.
            </div>
        </div>
    }
}

export default PersonalCenter;