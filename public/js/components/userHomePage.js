/**
 * Created by 十九 on 2018/2/23.
 */
require ('../../css/userHomePage.css');
require('../../css/background.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';
import Nav from'../containers/nav';
import AllFile from '../containers/allFile'

class UserHomePage extends React.Component{

    nextPage(){
        browserHistory.push(`/addFiles?user_id=${this.props.location.query.user_id}`);
    }

    render(){

        var p=<AllFile/>;

        return<div className="background-l">
            <Nav/>
            <div  >
                <div className=" SC ">
                    <div className="search">
                        <input className="input" type="text"  placeholder="输入XXX" />
                        <button  className="buttonBac">搜索</button>
                    </div>
                    <div className="horizontal">
                        <button  className="buttonBac" onClick={this.nextPage.bind(this)}>上传文件</button>
                    </div>
                    <div>
                            {p}
                    </div>
                </div>
                <div >
                    <ul className="menu" >
                        <li className="li">全部文件</li>
                        <li className="li">经管类</li>
                        <li className="li">文哲类</li>
                        <li className="li">法学类</li>
                        <li className="li">理学类</li>
                        <li className="li">工学类</li>
                        <li className="li">外语类</li>
                        <li className="li">艺术类</li>
                        <li className="li">其他</li>
                        <li className="li">我的分享</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default UserHomePage;