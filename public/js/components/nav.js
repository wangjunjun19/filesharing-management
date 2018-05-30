/**
 * Created by 十九 on 2018/3/4.
 */
require('../../css/navStyle.css')
import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Nav extends  React.Component{

    personalCenter(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_name;
        console.log(id+"___id");
        if (id ) {
            browserHistory.push(`/personalCenter?user_name=${id}`);
        }else{

            browserHistory.push('');
        }

    }
    database(){
        document.getElementById("zlk").style.backgroundColor="#e4b9c0";
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_name;
        browserHistory.push(`/userHomePage?user_name=${id}`);
    }

    perRecom(){
        document.getElementById("gxtj").style.backgroundColor="#e4b9c0";
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_name;
        if(id!=""&&id)
        {

            browserHistory.push(`/perRecom?user_name=${id}`);
        }else{
            alert("请登录")
            browserHistory.push(`/`);
        }
    }

    return(){

        browserHistory.push('');
        this.props.logoutUser();
    }
    login(){
    browserHistory.push('');
}

    register(){
        browserHistory.push('/register');
    }
    render(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let user= cookies.user_name;
        return<div>
        <div className="module-header-wrapper" >
                <div  className="xtJbHcb">
                   <span className="EHazOI" id="logo"  >FSMS</span>
                    <div id="login-tip" className={(user!=""&&user)?"":"hidden"}>
                        <div > <span  id="return" onClick={this.return.bind(this)}>|退出登录</span></div>
                        <div><span  id="username" className="user glyphicon glyphicon-user " onClick={this.personalCenter.bind(this)}>{user},欢迎您|</span></div>
                    </div>
                    <div id="login-tip" className={(user!=""&&user)?"hidden":""}>
                        <div > <span  id="return" onClick={this.register.bind(this)}>|注册</span></div>
                        <div><span  id="username"  onClick={this.login.bind(this)}>登录|</span></div>
                    </div>
                    <ul className="nav nav-tabs ff">
                        <li role="presentation" className="fl" >
                            <a className="dropdown-toggle c"   id="zlk" onClick={this.database.bind(this)} data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="true">
                                资料库
                            </a>
                        </li>
                        <li role="presentation" className="fl" >
                            <a className="dropdown-toggle c"  id="gxtj" onClick={this.perRecom.bind(this)} data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
                                个性推荐
                            </a>
                        </li>
                    </ul>
               </div>
        </div>
            </div>
    }
}

export default Nav;