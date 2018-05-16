/**
 * Created by 十九 on 2018/2/23.
 */
require('../../css/addFilesStyle.css');
require('../../css/button.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';
import request from 'superagent';
import Nav from'../containers/nav';
class AddFiles extends React.Component{
    componentWillMount() {
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_name;
        let name=this.props.location.query.user_name;
        if(name!=id){
            alert("请您先登录！")
            browserHistory.push('');
        }
        else{
            this.props.getLabel();
        }
    }

    return(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_name;
        browserHistory.push(`/userHomePage?user_name=${id}`);
    }

    clear(){
        document.getElementById("files").value="";
        document.getElementById("select").value="0";
        document.getElementById("intro").value="全部";
        document.getElementById("label").value="";
    }

    getFileSize(){
        let dom = document.getElementById('files');
        let size=dom.files[0].size/1024/1024;
            return size;
    }

    test(){
        let isOK=this.getFileSize();
        //判断文件大小是否大于10M
        if(isOK<=10){
            this.isClick();
        }
        else{
            alert("上传的文件不能超过10M,请重新上传!");
            this.clear();
        }

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
            })
    }

    focusChoose(){
        $("#chooseTip").text("");
    }

    addFile(){

        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_id;
        let name=this.refs.file.value;
        if(name ===""){
            $("#chooseTip").text("您没有选择文件，请选择后上传！");
        }
        else{
            let info={file_name:document.getElementById("files").files[0].name,
                file_type:parseInt(this.refs.select.value),
                user_id: id,
                file_intro:this.refs.intro.value,
                file_route:this.props.uploadFile,
                file_label:this.refs.label.value
            }
            this.props.addFiles(info);
        }
        let label=this.refs.label.value;
        if(label!=''){
            let info={
                label_name:label
            }
            this.props.insertLabel(info);
        }
    }

    clickButton(i){

        document.getElementById("label").value=i;
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
        if(this.props.labelList != '')
        {
            var p=this.props.labelList.map((value,index)=>{
                return<div className="label-q">
                        <button  className=" button-la btn btn-info dropdown-toggle" name="button" value={value.label_name} onClick={this.clickButton.bind(this,value.label_name)}>{value.label_name}</button>
                    </div>
            });

        }




        return<div>
            <div>
                <Nav/>
            </div>
            <div className="b-s">
            <button className="glyphicon glyphicon-arrow-left buttonBac  btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="回上页" onClick={this.return.bind(this)} >返回上一页
            </button>
                </div>
                    <div>
                    <div className="input-group per-mess">
                        <input  className=" file  form-control"  aria-describedby="basic-addon2"  id="files" ref="file" type="file" onChange={this.test.bind(this)} onFocus={this.focusChoose.bind(this)} />
                        <span  id="chooseTip" className="chooseTip"></span>
                    </div>
                    <div className="input-group per-mess">
                        <span className="input-group-addon" id="basic-addon1">文件类型</span>
                        <select ref="select" className="form-control" aria-describedby="basic-addon1" id="select">
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
                        <div className="input-group per-mess">
                            <span className="input-group-addon" id="basic-addon1">适用人群</span>
                            <select ref="intro" className="form-control" aria-describedby="basic-addon1" id="intro">
                                <option value="全部">全部</option>
                                <option value="大一">大一</option>
                                <option value="大二">大二</option>
                                <option value="大三">大三</option>
                                <option value="大四">大四</option>
                            </select>
                        </div>
                        <div className="input-group per-mess">
                            <span className="input-group-addon" id="basic-addon1">文件标签</span>
                            <input ref="label" id="label"  className="form-control" aria-describedby="basic-addon1"   placeholder="例如：机器学习" type="text"></input>
                        </div>
                        <div className="div-ba input-group per-mess">
                            热门标签：
                       {p}
                       </div>

                    <div className=" input-group per-mess" id="up-re">
                        <button  className="button"  onClick={this.addFile.bind(this)} >上传</button>
                        <button  className="button left"  onClick={this.clear.bind(this)} >取消</button>
                    </div>
                </div>
        </div>
    }
}

export default AddFiles;