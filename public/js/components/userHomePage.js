/**
 * Created by 十九 on 2018/2/23.
 */
require ('../../css/userHomePage.css');
require('../../css/background.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';

class UserHomePage extends React.Component{

    render(){

        return <div className="mainB">
            <div className="horizontal">
                <a href="../addFiles"  className="share">分享</a>
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