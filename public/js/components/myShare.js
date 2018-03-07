/**
 * Created by 十九 on 2018/3/6.
 */
require('../../css/allFile.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class MyShare extends Component{

    componentWillMount() {
        console.log("getMyShareList")
        var user_id=this.props.loginTip;
        console.log(this.props.loginTip+"______userId");
        let info={
            user_id:user_id
        }
        this.props.getMyShareList(info);
    }

    render(){

       /** var p=this.props.myShareList.map((value,index)=>{
            return <div>
                <div>
                    <span >{value.file_name}</span>
                    <span >{value.file_intro}</span>
                </div>
            </div>
        });*/

        return<div >
            <div >
                <span className="span-d">文件名</span>
                <span className="span-l">文件简介</span>
            </div>
            <div  className="mainShow" >

            </div>
        </div>
    }
}

export default MyShare;