/**
 * Created by 十九 on 2018/3/6.
 */

require('../../css/allFile.css');

import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Economic extends Component{

    componentWillMount() {
        this.props.getEconomicList();
    }

    render(){

        var p=this.props.economicList.map((value,index)=>{
            return <div>
                <div>
                    <span >{value.file_name}</span>
                    <span >{value.file_intro}</span>
                </div>
            </div>
        });

        return<div >
            <div >
                <span className="span-d">文件名</span>
                <span className="span-l">文件简介</span>
            </div>
            <div  className="mainShow" >
            {p}
            </div>
        </div>
    }
}

export default Economic;