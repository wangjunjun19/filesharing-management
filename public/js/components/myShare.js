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
            this.props.searchMy(info);

    }

    selectMyShare(){
        let info={
            file_intro:this.refs.intro.value,
            user_id:this.props.loginTip
        }

            this.props.selectMyShare(info);

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

        if(this.props.myShareList != '')
        {
            var p=this.props.myShareList.map((value,index)=>{
                return <div>
                    <div className="file-div">
                        <div className="span-file"><span >{value.file_name}</span></div>
                        <div className="span-label"><span >{value.file_label}</span></div>
                        <div className="span-intro"><span >{value.file_grade}</span></div>
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
                            <button className="btn btn-default" type="button" onClick={this.search.bind(this)}>Go!</button>
                        </span>
                    </div>
                </div>
            </div>
            <div >
                <span className="span-d">文件名</span>
                <span className="span-b">文件标签</span>
                <div className="span-l">
                    <span >适用人群</span>
                    <select ref="intro"  className="btn btn-default dropdown-toggle"  id="intro" onClick={this.selectMyShare.bind(this)}>
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

export default MyShare;