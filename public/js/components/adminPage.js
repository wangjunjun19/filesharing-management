/**
 * Created by 十九 on 2018/5/10.
 */
require ('../../css/adminStyle.css');
import React from 'react';
import {Link,browserHistory} from 'react-router';
import AllFile from '../containers/adminFiles'
import AdminPer from '../containers/adminPer'
import Employee from '../containers/employee'

class UserHomePage extends React.Component{

    componentWillMount() {
         /*let cookies = {};
         document.cookie.split(';').forEach((Cookie)=> {
         let parts = Cookie.split('=');
         cookies[parts[0].trim()] = (parts[1]).trim();
         });
         let id = cookies.user_name;
         let name=this.props.location.query.user_name;
         if(name!=id){
         alert("请您先登录！")
         browserHistory.push('');
         }*/
    }

    personalCenter(){
        /*let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let id = cookies.user_name;
        console.log(id+"___id");
        if (id ) {
            browserHistory.push(`/personalCenter?user_name=${id}`);
        }else{
            browserHistory.push('');
        }*/
        browserHistory.push(`/personalCenter?user_name=${id}`);
    }


    return(){

        browserHistory.push('');
        this.props.logoutUser();
    }

    onAside(e){

        if(e.target.className != "menu"){
            var child =e.target.parentNode.children;
            for(var i=0;i<child.length;i++){
                child[i].style.backgroundColor="transparent";
            }
            e.target.style.backgroundColor=e.target.style.backgroundColor ==="transparent"?"#e4b9c0":"transparent";
            this.props.getPresentShow(e.target.id);

        }
    }



    getAllFile(){
        this.props.getAllFileList();
    }
    getEmployeeList(){
        //this.props.getEmployeeList();
    }
    personalCenter(){
       // this.props.getAllFileList();
    }

    render(){

        var p=<AllFile   getAllFileList={this.props.getAllFile} />;

        switch (this.props.presentShow){
            case "allFile":
                p=<AllFile  getAllFileList={this.props.getAllFileList}/>;
                break;
            case "employee":
                p=<Employee getEmployeeList={this.props.getEmployeeList}/>
                break;
            case "personalCenter":
                p=<AdminPer personalCenter={this.props.personalCenter}/>
                break;


        }

        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let user= cookies.user_name;
        return<div >
            <div id="layoutHeader">
            <div   className="module-header-wrapper" >
                    <dl className="xtJbHcb">
                        <dt className="EHazOI">  <span id="logo">FSMS</span></dt>
                        <dd> <span  id="return" onClick={this.return.bind(this)}>退出登录</span></dd>
                        <dd><span  id="username" className="user glyphicon glyphicon-user">{user},欢迎您</span></dd>
               </dl>
            </div>
            </div>
            <div  className="module-aside DtJtsC">
                <ul className="fOHAbxb"  onClick={this.onAside.bind(this)} >
                    <li className="hnegd6z bac-color"  id="allFile" onClick={this.getAllFile.bind(this)}>文件管理</li>
                    <li className="hnegd6z"  id="employee" onClick={this.getEmployeeList.bind(this)}>用户管理</li>
                    <li className="hnegd6z" id="personalCenter" onClick={this.personalCenter.bind(this)}>个人中心</li>
                </ul>
            </div>
            <div id="layoutMain" >
                    <div>
                            {p}
                    </div>
                </div>

        </div>
    }
}

export default UserHomePage;