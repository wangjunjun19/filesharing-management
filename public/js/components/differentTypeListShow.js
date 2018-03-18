/**
 * Created by 十九 on 2018/3/7.
 */
require('../../css/allFile.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class differentTypeListShow extends Component{
    componentWillMount() {
        this.props.getDifferentTypeList();
    }

    render(){

        var p=this.props.differentTypeListTip.map((value,index)=>{
            return <div>
                <div className="file-div">
                    <div className="span-file"><span >{value.file_name}+{value.file_id}</span></div>
                    <div className="span-intro"><span >{value.file_intro}</span></div>
                    <div className="span-down "><button className="glyphicon glyphicon-download-alt down"></button></div>
                </div>
            </div>
        });

        return<div >
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