/**
 * Created by 十九 on 2018/3/7.
 */
require('../../css/allFile.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class differentTypeListShow extends Component{

    searchByType() {
        let info = {
            file_name:this.refs.search.value,
            file_type: 0
        }
        switch (this.props.presentShow) {
            case "economic":
                info.file_type = 4;
                break;
            case "law":
                info.file_type = 1;
                break;
            case "science":
                info.file_type = 2;
                break;
            case "engineering":
                info.file_type = 3;
                break;
            case "foreignLanguage":
                info.file_type = 5;
                break;
            case "arts":
                info.file_type = 6;
                break;
            case "other":
                info.file_type = 7;
                break;
        }
        if(info.file_name !='')
        {
            this.props.searchByType(info);
        }
    }

    selectByType() {
        let info = {
            file_intro:this.refs.intro.value,
            file_type: 0
        }
        switch (this.props.presentShow) {
            case "economic":
                info.file_type = 4;
                break;
            case "law":
                info.file_type = 1;
                break;
            case "science":
                info.file_type = 2;
                break;
            case "engineering":
                info.file_type = 3;
                break;
            case "foreignLanguage":
                info.file_type = 5;
                break;
            case "arts":
                info.file_type = 6;
                break;
            case "other":
                info.file_type = 7;
                break;
        }
            this.props.selectByType(info);
         // this.refs.intro.value="";
    }

    downFile(file_id,file_type){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let info={
            file_id:file_id,
            file_type:file_type,
            user_id:parseInt(cookies.user_id)
        }
        this.props.downFile(info);
    }

    render(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let user= cookies.user_name;

        if(this.props.differentTypeListTip != '')
        {
            var p=this.props.differentTypeListTip.map((value,index)=>{
                return <div>
                    <div className="file-div">
                        <div className="span-file"><span >{value.file_name}</span></div>
                        <div className="span-label"><span >{value.file_label}</span></div>
                        <div className="span-intro"><span >{value.file_intro}</span></div>
                        <div className="span-down ">
                            <div >
                            <a className="glyphicon glyphicon-download-alt down" href={value.file_route}  download={value.file_name} onClick={this.downFile.bind(this,value.file_id,value.file_type)}></a></div>
                            </div>
                        </div>
                </div>
            });
        }
        else{
            var p=<div className = "errTip">
                    <div >
                        <div className="errTip-t">
                            <img src="../image/tip.png"/>
                        </div>
                        <div>
                            当前资料库中，没有找到相应的文件
                        </div>
                    </div>
                </div>
        }

        return<div >
            <div  className="row" >
                <div className="col-lg-3" id="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." ref="search"/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.searchByType.bind(this)}>Go!</button>
                        </span>
                    </div>
                </div>
            </div>
            <div >
                <span className="span-d">文件名</span>
                <span className="span-b">文件标签</span>
                <div className="span-l">
                    <span >适用人群</span>
                    <select ref="intro"  className="btn btn-default dropdown-toggle"  onClick={this.selectByType.bind(this)}>
                        <option value="">全部</option>
                        <option value="大一">大一</option>
                        <option value="大二">大二</option>
                        <option value="大三">大三</option>
                        <option value="大四">大四</option>
                    </select>
                </div>
            </div>
            <div  className="mainShow" >
            {p}
            </div>
        </div>
    }
}

export default differentTypeListShow;