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
import DifferentTypeListShow from '../containers/differentTypeListShow'

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
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_name;
        browserHistory.push(`/addFiles?user_name=${id}`);
    }

    getDifferentTypeList(file_type){
        let info={
            file_type:file_type
        }
        console.log(info.file_type+"~~~~~")
        this.props.getDifferentTypeList(info);
    }

    getAllFile(){
        this.props.getAllFileList();
    }

    getMyShareList() {
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_id;
        //let id=this.props.location.query.user_id;
        let info={
            user_id:id
        }
        this.props.getMyShareList(info);
    }

    render(){

        var p=<AllFile   getAllFileList={this.props.getAllFile} />;

        switch (this.props.presentShow){
            case "allFile":
                p=<AllFile  getAllFileList={this.props.getAllFileList}/>;
                break;
            case "economic":
                p=<DifferentTypeListShow getDifferentTypeList={this.props.getDifferentTypeList}/>
                break;
            case "philosophy":
                p=<DifferentTypeListShow getDifferentTypeList={this.props.getDifferentTypeList}/>
                break;
            case "law":
                p=<DifferentTypeListShow getDifferentTypeList={this.props.getDifferentTypeList}/>
                break;
            case "science":
                p=<DifferentTypeListShow getDifferentTypeList={this.props.getDifferentTypeList}/>
                break;
            case "engineering":
                p=<DifferentTypeListShow getDifferentTypeList={this.props.getDifferentTypeList}/>
                break;
            case "foreignLanguage":
                p=<DifferentTypeListShow getDifferentTypeList={this.props.getDifferentTypeList}/>
                break;
            case "arts":
                p=<DifferentTypeListShow getDifferentTypeList={this.props.getDifferentTypeList}/>
                    break;
            case "other":
                console.log("case___other___compan");
                p=<DifferentTypeListShow getDifferentTypeList={this.props.getDifferentTypeList} />;
                break;
            case "myShare":
                p=<MyShare/>;
                break;


        }



        return<div className="background-l">
            <Nav/>
            <div  >
                <div className=" SC ">

                    <div className="horizontal">
                        <button  className="buttonBac" onClick={this.nextPage.bind(this)}>上传文件</button>
                    </div>
                    <div>
                            {p}
                    </div>
                </div>
                <div >
                    <ul className="menu"  onClick={this.onAside.bind(this)} >
                        <li className="li" id="allFile" onClick={this.getAllFile.bind(this)}>全部文件</li>
                        <li className="li" id="economic"  onClick={this.getDifferentTypeList.bind(this,4)}>经管类</li>
                        <li className="li" id="philosophy" onClick={this.getDifferentTypeList.bind(this,0)}>文哲类</li>
                        <li className="li" id="law" onClick={this.getDifferentTypeList.bind(this,1)}>法学类</li>
                        <li className="li" id="science" onClick={this.getDifferentTypeList.bind(this,2)}>理学类</li>
                        <li className="li" id="engineering"  onClick={this.getDifferentTypeList.bind(this,3)}>工学类</li>
                        <li className="li" id="foreignLanguage" onClick={this.getDifferentTypeList.bind(this,5)}>外语类</li>
                        <li className="li" id="arts" onClick={this.getDifferentTypeList.bind(this,6)}>艺术类</li>
                        <li className="li" id="other" onClick={this.getDifferentTypeList.bind(this,7)} >其他</li>
                        <li className="li" id="myShare"  onClick={this.getMyShareList.bind(this)}>我的分享</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default UserHomePage;