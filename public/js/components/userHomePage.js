/**
 * Created by 十九 on 2018/2/23.
 */
require ('../../css/userHomePage.css');
require('../../css/background.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';
import Nav from'../containers/nav';
import AllFile from '../containers/allFile'
import MyShare from '../containers/myShare'
import Economic from '../containers/economic'
import Philosophy from '../containers/philosophy'
import Law from '../containers/law'

class UserHomePage extends React.Component{

    onAside(e){

        if(e.target.className != "menu"){
            var child =e.target.parentNode.children;
            for(var i=0;i<child.length;i++){
                child[i].style.backgroundColor="transparent";
            }
            e.target.style.backgroundColor=e.target.style.backgroundColor ==="transparent"?"#e4b9c0":"transparent";
            this.props.getPresentShow(e.target.id);

        }
    }

    nextPage(){
        browserHistory.push(`/addFiles?user_id=${this.props.location.query.user_id}`);
    }

    render(){

        var p=<AllFile  getAllFileList={this.props.getAllFileList}  />;

        switch (this.props.presentShow){
            case "allFile":
                p=<AllFile  getAllFileList={this.props.getAllFileList}  />;
                break;
            case "economic":
                p=<Economic/>;
                break;
            case "philosophy":
                p=<Philosophy/>;
                break;
            case "law":
                p=<Law/>;
                break;
            case "science":
                p=<Nav/>;
                break;
            case "engineering":
                p=<Nav/>;
                break;
            case "foreignLanguage":
                p=<Nav/>;
                break;
            case "arts":
                p=<Nav/>;
                break;
            case "other":
                p=<Nav/>;
                break;
            case "myShare":
                p=< MyShare  getAllFileList={this.props.getMyShareList}/>;
                break;



        }



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
                    <ul className="menu"  onClick={this.onAside.bind(this)} >
                        <li className="li" id="allFile">全部文件</li>
                        <li className="li" id="economic" >经管类</li>
                        <li className="li" id="philosophy">文哲类</li>
                        <li className="li" id="law">法学类</li>
                        <li className="li" id="science">理学类</li>
                        <li className="li" id="engineering" >工学类</li>
                        <li className="li" id="foreignLanguage">外语类</li>
                        <li className="li" id="arts">艺术类</li>
                        <li className="li" id="other">其他</li>
                        <li className="li" id="myShare" >我的分享</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default UserHomePage;