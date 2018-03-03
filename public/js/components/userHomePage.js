/**
 * Created by 十九 on 2018/2/23.
 */
require ('../../css/userHomePage.css');
require('../../css/background.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';

class UserHomePage extends React.Component{

    nextPage(){
        browserHistory.push(`/addFiles?user_id=${this.props.location.query.user_id}`);
    }

    render(){

        return <div className="mainB">
            <div className="user glyphicon glyphicon-user">
                <span  id ="user_name"></span>
            </div>

            <div className="horizontal">
                <button className="share" onClick={this.nextPage.bind(this)}>分享</button>
                <span className="personality">个性推荐</span>
            </div>
            <div>
                <ul className="menu" >
                    <li className="li">全部文件</li>
                    <li className="li">我的分享</li>
                    <li className="li">个人中心</li>
                </ul>
                <div>

                </div>
            </div>
        </div>
    }
}

export default UserHomePage;