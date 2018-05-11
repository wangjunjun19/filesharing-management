/**
 * Created by 十九 on 2018/3/5.
 */
require('../../css/allFile.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Employee extends Component{

    componentWillMount() {
        //this.props.getAllFileList();
    }


    search(){
        let info={
            file_name:this.refs.search.value
        }
        console.log(info.file_name+"___info.file_name");
        if(info.file_name != '')
        {
            this.props.search(info);
        }

    }

    deleteFile(file_id){
        let tip = confirm("您确认要删除该资料吗？")
        if(tip === true){
            let info={
                file_id:file_id
            }
            this.props.deleteFile(info);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteFileTip) {
            this.props.getAllFileList();
            this.props.resetDeleteTip({modifyPassTip: false});
            alert("删除成功！")
        }
    }

    render(){
       /* if(this.props.allFileList != '')
        {
            var p=this.props.allFileList.map((value,index)=>{

                return <div>
                    <div className="file-div">
                        <div className="span-file"><span >{value.file_name}</span></div>
                        <div className="span-label"><span >{value.file_label}</span></div>
                        <div className="span-intro"><span >{value.file_intro}</span></div>
                        <div className="span-down "><a className="glyphicon glyphicon-download-alt down" href={value.file_route}  download={value.file_name} onClick={this.downFile.bind(this,value.file_id,value.file_type)}></a></div>
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
                        您搜索的用户不存在
                    </div>
                </div>
            </div>
        }*/

        return<div >
            <div className="horizontal">
                <button  className="buttonBac" >上传文件</button>
            </div>
            <div className="search">
                <input className="input" type="text"  placeholder="搜索用户" ref="search"/>
                <button  className="buttonBac">搜索</button>
            </div>
            <div >
                <span className="span-d">用户id</span>
                <span className="span-b">用户名</span>
                <div className="span-l">
                    <span >用户类型</span>
                    <select ref="intro"  id="intro" >
                        <option value="">全部</option>
                        <option value="管理员">管理员</option>
                        <option value="一般用户">大二</option>
                    </select>
                </div>
            </div>
            <div  className="mainShow" >

            </div>
        </div>
    }
}

export default Employee;
