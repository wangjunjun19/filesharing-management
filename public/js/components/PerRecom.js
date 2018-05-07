/**
 * Created by 十九 on 2018/3/24.
 */
require('../../css/perRecomStyle.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';
import Nav from './nav'

class PerRecom extends React.Component{

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
        }else{
            let info={
                user_id:parseInt(cookies.user_id)
            }
            this.props.getPerRecomList(info);
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
        if(this.props.perRecomList != '')
        {
            var p=this.props.perRecomList.map((value,index)=>{
                return <div key={index}>
                    <li className="divItem divLi">
                        <div >
                        <img src="../image/file.jpg" className="im"/>
                        </div>
                        <div className="divT">
                            资料名：<a href={value.file_route}  download={value.file_name} onClick={this.downFile.bind(this,value.file_id,value.file_type)}>{value.file_name}</a>
                        </div>
                        <div className="divT">上传者ID：{value.user_id}</div>
                        <div className="divT">下载次数：{value.file_count}</div>
                    </li>
                    </div>
            });
        }

        return<div >
            <div className="per-bac">
            <Nav/>
                </div>
            <div>
                <ul className="divUl">
                {p}
                </ul>
            </div>
        </div>
    }
}

export default PerRecom;