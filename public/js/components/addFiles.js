/**
 * Created by 十九 on 2018/2/23.
 */
require('../../css/addFilesStyle.css');
require('../../css/button.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';

class AddFiles extends React.Component{

    return(){
        browserHistory.push(`/userHomePage?user_id=${this.props.location.query.user_id}`);
    }

    clear(){
        document.getElementById("files").value="";
        document.getElementById("select").value="0";
        document.getElementById("introduce").value="";
    }

    render(){

        return<div  className="pageBody"  >
            <button className="returnButton glyphicon glyphicon-arrow-left" value="回上页" onClick={this.return.bind(this)} />
                    <div  className="body">
                    <div className="upload">
                        <input  className="file" id="files" type="file"/>
                    </div>
                    <div className="div">
                        <label className="label">文件类型</label>
                        <select className="select" id="select">
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
                        <label className="label">文件简介</label><input id="introduce" className="text" type="text"/>
                    </div>
                    <div>
                        <button  className="button" >确认</button>
                        <button  className="button"  onClick={this.clear.bind(this)} >取消</button>
                    </div>


                </div>
        </div>
    }
}

export default AddFiles;