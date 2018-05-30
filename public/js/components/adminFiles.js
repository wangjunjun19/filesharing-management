/**
 * Created by 十九 on 2018/3/5.
 */
require('../../css/allFile.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class AdminFiles extends Component{

    componentWillMount() {
        this.props.getAllFileList();
    }


    search(){
        let info={
            file_name:this.refs.search.value
        }
        console.log(info.file_name+"___info.file_name");
            this.props.search(info);


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

    select(){
        let info={
            file_type:this.refs.type.value
        }
        this.props.select(info);
    }

    downFile(file_id,file_type){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        if(cookies.user_id==="")
        {

            //document.getElementById("down").style.display="display";
            alert("请登录")
        }else{
            let info={
                file_id:file_id,
                file_type:file_type,
                user_id:parseInt(cookies.user_id)
            }
            this.props.downFile(info);
        }
        /*let info={
         file_id:file_id,
         file_type:file_type,
         user_id:parseInt(cookies.user_id)
         }
         this.props.downFile(info);*/
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteFileTip) {
            this.props.getAllFileList();
            this.props.resetDeleteTip({modifyPassTip: false});
            alert("删除成功！")
        }
    }

    render(){
        if(this.props.allFileList != '')
        {
            var p=this.props.allFileList.map((value,index)=>{
                switch (value.file_type) {
                    case 0:
                        var type="文史哲类";
                        break;
                    case 1:
                        var type="法学类";
                        break;
                    case 2:
                        var type="理学类";
                        break;
                    case 3:
                        var type="工学类";
                        break;
                    case 4:
                        var type="经管类";
                        break;
                    case 5:
                        var type="外语类"
                        break;
                    case 6:
                        var type="艺术类";
                        break;
                    case 7:
                        var type="其他";
                        break;
                }
                return <div>
                    <div className="file-div">
                        <div className="span-file"><span >{value.file_name}</span></div>
                        <div className="span-label"><span >{value.file_label}</span></div>
                        <div className="span-intro"><span >{type}</span></div>
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
                <div id="type-btn" className="dropdown">
                    <select ref="type"  className="btn btn-default dropdown-toggle"  id="type" onClick={this.select.bind(this)}>
                        <option  value="">全部</option>
                        <option value="0">文史哲类</option>
                        <option value="1">法学类</option>
                        <option value="2">理学类</option>
                        <option value="3">工学类</option>
                        <option value="4">经济管理类</option>
                        <option value="5">外语类</option>
                        <option value="6">艺术类</option>
                        <option value="7">其他</option>
                    </select>
                </div>
                </div>

            <div id ="main-title" >
                <span className="span-d">文件名</span>
                <span className="span-b">文件标签</span>
                <div className="span-l">
                    <span >文件类型</span>
                </div>
            </div>
            <div  className="mainShow" >
            {p}
            </div>
        </div>
    }
}

export default AdminFiles;
