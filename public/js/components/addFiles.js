/**
 * Created by 十九 on 2018/2/23.
 */
require('../../css/addFilesStyle.css');
require('../../css/button.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';
import request from 'superagent';

class AddFiles extends React.Component{

    return(){
        browserHistory.push(`/userHomePage?user_id=${this.props.location.query.user_id}`);
    }

    clear(){
        document.getElementById("files").value="";
        document.getElementById("select").value="0";
        document.getElementById("introduce").value="";
    }

    isClick(){
        let file=this.refs.file;
        if(file.files && file.files[0]){
            let fileObj = new FileReader();
            fileObj.readAsDataURL(file.files[0]);
        }
        this.handleClick(file.files[0]);
    }

    handleClick(file){
        let formData = new FormData();
        formData.append('avatar',file);
        request
            .post('/profile')
            .send(formData)
            .end((err,res)=>{
                console.log(res.body.filePath+"____ha");
                this.props.upload(res.body.filePath);
                //this.props.addFiles(info);
            })
    }

    focusChoose(){
        $("#chooseTip").text("");
    }

    addFile(){

        let name=this.refs.file.value;
        if(name ===""){
            $("#chooseTip").text("您没有选择文件，请选择后上传！");
        }
        else{
            let info={file_name:document.getElementById("files").files[0].name,
                file_type:parseInt(this.refs.select.value),
                user_id: parseInt(this.props.location.query.user_id),
                file_intro:this.refs.intro.value,
                file_route:this.props.uploadFile
            }
            console.log("addFile____"+info.file_intro+info.file_name+info.file_route+info.file_type+info.user_id);
            this.props.addFiles(info);
        }

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.addFileTip + "_________register__")
        if (nextProps.addFileTip) {
            alert("恭喜您，上传成功！");
            this.clear();
            this.props.resetAddFile({addFileTip: false});

        }
    }

    render(){

        return<div  className="pageBody"  >
            <button className="returnButton glyphicon glyphicon-arrow-left" value="回上页" onClick={this.return.bind(this)} />
                    <div  className="body">
                    <div className="upload">
                        <input  className="file" id="files" ref="file" type="file" onChange={this.isClick.bind(this)} onFocus={this.focusChoose.bind(this)} />
                        <span  id="chooseTip" className="chooseTip"></span>
                    </div>
                    <div className="div">
                        <label className="label">文件类型</label>
                        <select ref="select" className="select" id="select">
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
                    <div className="div">
                        <label className="label">文件简介</label><input ref="intro" id="introduce" className="text" type="text"/>
                    </div>
                    <div>
                        <button  className="button" onClick={this.addFile.bind(this)} >上传</button>
                        <button  className="button"  onClick={this.clear.bind(this)} >取消</button>
                    </div>


                </div>
        </div>
    }
}

export default AddFiles;