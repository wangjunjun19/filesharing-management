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

        if(e.target.className != "fOHAbxb"){
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
            cookies[parts[0].trim()] = (parts[1].trim());
        });
        let id = cookies.user_name;
        if(id!=""&&id)
        {

            browserHistory.push(`/addFiles?user_name=${id}`);
        }else{
            alert("请登录")
            browserHistory.push(`/`);
        }
    }

    getDifferentTypeList(file_type){
        let info={
            file_type:file_type
        }
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
        let user= cookies.user_name;
        if(user!=""&&user)
        {

            let id = cookies.user_id;
            let info={
                user_id:id
            }
            this.props.getMyShareList(info);
        }else{
            alert("请登录")
            browserHistory.push(`/`);
        }

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

        return<div>
            <Nav/>
            <div  >
                <div id="layoutMain" >
                    <div>
                        <button type="button" onClick={this.nextPage.bind(this)} className="btn btn-default dropdown-toggle buttonBac glyphicon glyphicon-open" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            上传 <span class="caret"></span>
                        </button>
                    </div>
                    <div>
                            {p}
                    </div>
                </div>
                <div  className="module-aside DtJtsC">
                    <ul className="fOHAbxb "   onClick={this.onAside.bind(this)} >
                        <li className="hnegd6z bac-color"id="allFile" onClick={this.getAllFile.bind(this)}>全部文件</li>
                        <li className="hnegd6z" id="economic"  onClick={this.getDifferentTypeList.bind(this,4)}>经管类</li>
                        <li className="hnegd6z" id="philosophy" onClick={this.getDifferentTypeList.bind(this,0)}>文哲类</li>
                        <li className="hnegd6z" id="law" onClick={this.getDifferentTypeList.bind(this,1)}>法学类</li>
                        <li className="hnegd6z" id="science" onClick={this.getDifferentTypeList.bind(this,2)}>理学类</li>
                        <li className="hnegd6z" id="engineering"  onClick={this.getDifferentTypeList.bind(this,3)}>工学类</li>
                        <li className="hnegd6z" id="foreignLanguage" onClick={this.getDifferentTypeList.bind(this,5)}>外语类</li>
                        <li className="hnegd6z" id="arts" onClick={this.getDifferentTypeList.bind(this,6)}>艺术类</li>
                        <li className="hnegd6z" id="other" onClick={this.getDifferentTypeList.bind(this,7)} >其他</li>
                        <li className="hnegd6z" id="myShare"   onClick={this.getMyShareList.bind(this)}>我的分享</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default UserHomePage;