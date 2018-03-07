/**
 * Created by 十九 on 2018/3/7.
 */
/**
 * Created by 十九 on 2018/3/5.
 */
require('../../css/allFile.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class differentTypeListShow extends Component{

    componentWillMount() {
        console.log(this.props.presentShow+"________present_____getDifferentTypeList")
        let p=this.props.presentShow;
        let info;
        switch (p) {
            case "economic":
                info = {
                    file_type: 4
                }
                break;
            case "philosophy":
                info = {
                    file_type: 0
                }
                break;
            case "law":
                info = {
                    file_type: 1
                }
                break;
            case "science":
                info = {
                    file_type: 2
                }
                break;
            case "engineering":
                info = {
                    file_type: 3
                }
                break;
            case "foreignLanguage":
                info = {
                    file_type: 5
                }
                break;
            case "arts":
                info = {
                    file_type: 6
                }
                break;
            case "other":
                info = {
                    file_type: 7
                }
                break;
        }
                console.log(info.file_type+"_____——info.file_type___conp");
                this.props.getDifferentTypeList(info);
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