/**
 * Created by 十九 on 2018/3/6.
 */
require('../../css/allFile.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class MyShare extends Component{



    deleteFile(file_id){
        let tip = confirm("您确认要删除该资料吗？")
        if(tip === true){
            let info={
                file_id:file_id
            }
            this.props.deleteFile(info);
        }

    }

    search(){
        let info={
            file_name:this.refs.search.value,
            user_id:this.props.loginTip
        }
        console.log(info.file_name+"___info.file_name");
        if(info.file_name != '')
        {
            this.props.searchMy(info);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteFileTip) {
            var user_id=this.props.loginTip;
            let info={
                user_id:user_id
            }
            this.props.getMyShareList(info);
            alert("删除成功！")
        }
    }

    render(){

        if(this.props.myShareList != '')
        {
            var p=this.props.myShareList.map((value,index)=>{
                return <div>
                    <div className="file-div">
                        <div className="span-file"><span >{value.file_name}</span></div>
                        <div className="span-intro"><span >{value.file_intro}</span></div>
                        <div className="span-down "><a className="glyphicon glyphicon-download-alt down" href={value.file_route}  download={value.file_name}></a></div>
                        <div className="span-down "><button className="glyphicon glyphicon-trash down" onClick={this.deleteFile.bind(this,value.file_id)}></button></div>

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
                <button  className="buttonBac" onClick={this.search.bind(this)}>搜索</button>
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

export default MyShare;