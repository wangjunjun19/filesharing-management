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

    verifyAge(){
        let age=this.refs.age.value;
        if((age<=0 && age!='') || (age>200 && age!='') ){
            $("#age").text("请输入正确年龄");
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
    focusAge(){
        $("#age").text("");
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
        let age=$("#age").text();

        if(pass!=''|| sex != ''|| tel !=''|| age !='')
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
            let tip = confirm("您确认要修改账户信息吗？")
            if(tip === true){
                let info= {
                    user_pass: this.refs.password.value,
                    user_sex: this.refs.sex.value,
                    user_tel: this.refs.tel.value,
                    user_age: this.refs.age.value,
                    user_id: id
                }
                this.props.updateUser(info);
            }
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
            var s=<div>
                <input type="text" className="form-control"  ref="user_name" disabled id="name"  value={value.user_name}  placeholder="请输入您的用户名" aria-describedby="basic-addon1"/>
            </div>
            return s;
        });
        var pass=this.props.userInfoTip.map((value,index)=>{
            return<div>
                <input type="password" className="form-control"  placeholder="请输入您的密码" aria-describedby="basic-addon1" ref="password" id="pass"
                    onBlur={this.verifyPass.bind(this)} onFocus={this.focusPass.bind(this)} defaultValue={value.user_pass}  onChange={this.handleChange}></input>
            </div>
        });

        var sex=this.props.userInfoTip.map((value,index)=>{
            if(value.user_sex === 'null')
                value.user_sex="";
            return<div >
                <input type="text"   className="form-control"  placeholder="请输入您的性别" aria-describedby="basic-addon1" ref="sex" defaultValue ={value.user_sex}  onBlur={this.verifySex.bind(this)} onFocus={this.focusSex.bind(this)}/>
            </div>
        });

        var age=this.props.userInfoTip.map((value,index)=>{
            if(value.user_age === 'null')
                value.user_age="";
            return<div >
                <input type="tel" ref="age"  className="form-control"  placeholder="请输入您的年龄" aria-describedby="basic-addon1"
                    onBlur={this.verifyAge.bind(this)} onFocus={this.focusAge.bind(this)} defaultValue ={value.user_age} />
            </div>
        });

        var tel=this.props.userInfoTip.map((value,index)=>{
            if(value.user_tel === 'null')
                value.user_tel="";
            return<div >
                <input type="tel" ref="tel"  className="form-control"  placeholder="请输入您的电话号码" aria-describedby="basic-addon1"
                    onBlur={this.verifyTel.bind(this)} onFocus={this.focusTel.bind(this)} defaultValue ={value.user_tel} />
            </div>
        });


        return<div >
            <Nav/>
            <div>
                <div className="per-div">
                    <lable className="per-mes">个人信息</lable>
                </div>
                <div className="input-group per-mess">
                    <span className="input-group-addon" id="basic-addon1">用户名</span>{name}
                </div>
                <div className="input-group per-mess">
                    <span className="input-group-addon" id="basic-addon1">密码</span>{pass}
                    <span className="per-tips" id="password"></span>
                </div>
                <div className="input-group per-mess">
                    <span className="input-group-addon" id="basic-addon1">性别</span>{sex}
                    <span className="per-tips" id="sex"></span>
                </div>
                <div className="input-group per-mess">
                    <span className="input-group-addon" id="basic-addon1">年龄</span>{age}
                    <span className="per-tips" id="age"></span>
                </div>
                <div className="input-group per-mess">
                    <span className="input-group-addon" id="basic-addon1">电话</span>{tel}
                    <span className="per-tips" id="tel"></span>
                </div>
                <div className="input-group per-mess">
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