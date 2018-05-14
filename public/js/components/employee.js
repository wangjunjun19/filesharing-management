/**
 * Created by 十九 on 2018/3/5.
 */
require('../../css/employee.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Employee extends Component{

    componentWillMount() {
        this.props.getEmployeeList();
    }


    search(){
        let info={
            user:this.refs.search.value
        }
        console.log(info.user+"___info.file_name");
        if(info.user != '')
        {
            this.props.search(info);
        }

    }

    deleteUser(id,type){
        if(type===1){
            alert("抱歉，该用户为管理员，您没有权限删除")
        }else{
            let tip = confirm("您确认要删除该用户吗？")
            if(tip === true){
                let info={
                    user_id:id
                }
                this.props.deleteUser(info);
            }
        }
    }



    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteUserTip) {
            this.props.getEmployeeList();
            this.props.resetDeleteTip({deleteUserTip: false});
            alert("删除成功！")
        }
    }

    render(){
        if(this.props.employeeList != '')
        {
            var p=this.props.employeeList.map((value,index)=>{
        return <div key={index}>
            <li className=" per-im btn btn-default dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <button className="glyphicon glyphicon-remove remove" onClick={this.deleteUser.bind(this,value.id,value.user_type)}></button>
                <div >
                    <span className="glyphicon glyphicon-user size"/>
                </div>
                <div className="divT size">用户ID：{value.id}</div>
                <div className="divT size">用户名：{value.user_name}</div>
                <div className="divT size">用户性别：{value.user_sex}</div>
                <div className="divT size">用户年龄：{value.user_age}</div>
                <div className="divT size">用户电话：{value.user_tel}</div>
            </li>
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
                        没有找到该用户
                    </div>
                </div>
            </div>
        }

        return<div >
            <div  className="row" >
                <div className="col-lg-3" id="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter user name..." ref="search"/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.search.bind(this)}>Go!</button>
                        </span>
                    </div>
                </div>
            </div>

            <div  className="mainShow" >
            {p}
            </div>
        </div>
    }
}

export default Employee;
