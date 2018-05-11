require('../../css/navStyle.css')
import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Title extends  React.Component{

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


    return(){

        browserHistory.push('');
        this.props.logoutUser();
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
                    <button className="fan" onClick={this.return.bind(this)}>退出登录</button>
                </div>
            </div>
        </div>
    }
}

export default Title;