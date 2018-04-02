/**
 * Created by 十九 on 2018/3/4.
 */
require('../../css/navStyle.css')
import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Nav extends  React.Component{

    componentWillMount() {
    this.props.getUserId();
}

    personalCenter(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let isLogin = this.props.nav;
        let id = cookies.user_id;
        console.log(isLogin+"__islogin")
        console.log(id+"___id")
        if (id ) {
            browserHistory.push(`/personalCenter?user_id=${id}`);
        }else{
            browserHistory.push('');
        }

    }
    database(){
        let isLogin=this.props.nav;
        browserHistory.push(`/userHomePage?user_id=${isLogin}`);
    }

    perRecom(){
        let isLogin=this.props.nav;
        browserHistory.push(`/perRecom?user_id=${isLogin}`);
    }

    render(){
        return<div>
        <div className="xtJbHcb">
                <div>
                   <span className="logo"  >FSMS</span>
                   <button className="ZLSButton"  onClick={this.database.bind(this)}>资料库</button>
                   <button className="ZLSButton" onClick={this.perRecom.bind(this)}>个性推荐</button>
                   <li className="user glyphicon glyphicon-user personalC" onClick={this.personalCenter.bind(this)}>用户</li>
               </div>
        </div>
            </div>
    }
}

export default Nav;