/**
 * Created by 十九 on 2018/3/5.
 */
require('../../css/allFile.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class AllFile extends Component{

    componentWillMount() {
        this.props.getAllFileList();
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

    select(){
        let info={
            file_intro:this.refs.intro.value
        }
        this.props.select(info);
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
        if(this.props.allFileList != '')
        {
            var p=this.props.allFileList.map((value,index)=>{
                switch (value.file_type) {
                    case 4:
                        var type="经管类";
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
                        var type="文哲类"
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
                        <div className="span-intro"><span >{value.file_intro}</span></div>
                        <div className="span-down ">
                            <a className="glyphicon glyphicon-download-alt down" href={value.file_route}  download={value.file_name} onClick={this.downFile.bind(this,value.file_id,value.file_type)}></a>
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
            <div className="search">
                <input className="input" type="text"  placeholder="搜索您的文件" ref="search"/>
                <button  className="buttonBac" onClick={this.search.bind(this)}>搜索</button>
            </div>
            <div >
                <span className="span-d">文件名</span>
                <span className="span-b">文件标签</span>
                <div className="span-l">
                    <span >适用人群</span>
                <select ref="intro"  id="intro" onClick={this.select.bind(this)}>
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

export default AllFile;