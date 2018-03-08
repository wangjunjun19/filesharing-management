/**
 * Created by 十九 on 2018/3/4.
 */
require('../../css/navStyle.css')
import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Nav extends Component{

    personalCenter(){
        browserHistory.push(`/personalCenter?user_id=${this.props.loginTip}`);
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