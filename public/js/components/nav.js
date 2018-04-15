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
        browserHistory.push(`/perRecom?user_name=${id}`);
    }

    return(){
        browserHistory.push('');
    }

    render(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let user= cookies.user_name;
        return<div>
        <div className="xtJbHcb" >
                <div >
                   <span className="logo"  >FSMS</span>
                   <button className="ZLSButton"    id="zlk" onClick={this.database.bind(this)}>资料库</button>
                   <button className="ZLSButton" id="gxtj" onClick={this.perRecom.bind(this)}>个性推荐</button>
                   <button className="user glyphicon glyphicon-user personalC" onClick={this.personalCenter.bind(this)}>{user}</button>
                    <button className="fan" onClick={this.return.bind(this)}>退出登录</button>
               </div>
        </div>
            </div>
    }
}

export default Nav;