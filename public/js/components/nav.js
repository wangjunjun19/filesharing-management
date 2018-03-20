/**
 * Created by 十九 on 2018/3/4.
 */
require('../../css/navStyle.css')
import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Nav extends Component{

    personalCenter(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let isLogin = this.props.nav;
        let id = cookies.user_id;
        if (id === isLogin) {
            let path = "personalCenter?user_id=" + id;
            browserHistory.push(path);
        }else{
            browserHistory.push('');
        }

    }
    database(){
        browserHistory.push(`/userHomePage?user_id=${this.props.loginTip}`);
    }

    render(){
        return<div>
        <div className="xtJbHcb">
                <div>
                   <span className="logo"  >FSMS</span>
                   <button className="ZLSButton"  onClick={this.database.bind(this)}>资料库</button>
                   <button className="ZLSButton">个性推荐</button>
                   <span className="user glyphicon glyphicon-user personalC" onClick={this.personalCenter.bind(this)}>用户</span>
               </div>
        </div>
            </div>
    }
}

export default Nav;