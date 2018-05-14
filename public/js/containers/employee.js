/**
 * Created by 十九 on 2018/5/10.
 */

import {connect} from "react-redux";
import Employee from "../components/employee";

const mapStateToProps = (state) => {
    return {
        employeeList:state.employee.employeeList,
        deleteUserTip:state.employee.deleteUserTip
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getEmployeeList:()=>{
            dispatch({type:"GET_EMPLOYEE_LIST"})
        },
        search:(info)=>{
            dispatch({type:"SEARCH_EMPLOYEE",info});
        } ,
        deleteUser:(info)=>{
            dispatch({type:"DELETE_USER",info})
        } ,
        resetDeleteTip:(info)=>{
            dispatch({type:'USER_DELETE_TIP',info})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Employee);