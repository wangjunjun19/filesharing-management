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

    render(){

        if(this.props.differentTypeListTip != '')
        {
            var p=this.props.differentTypeListTip.map((value,index)=>{
                return <div>
                    <div className="file-div">
                        <div className="span-file"><span >{value.file_name}</span></div>
                        <div className="span-intro"><span >{value.file_intro}</span></div>
                        <div className="span-down "><button className="glyphicon glyphicon-download-alt down"></button></div>
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
            <div className="search">
                <input className="input" type="text"  placeholder="搜索您的文件" ref="search"/>
                <button  className="buttonBac" onClick={this.searchByType.bind(this)} >搜索</button>
            </div>
            <div >
                <span className="span-d">文件名</span>
                <span className="span-l">文件简介</span>
            </div>
            <div  className="mainShow" >
            {p}
            </div>
        </div>
    }
}

export default differentTypeListShow;