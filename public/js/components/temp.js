/**
 * Created by 十九 on 2018/5/8.
 */
clickButton(i){

    document.getElementById("label").value=document.getElementsByName("button")[i].value;
}

<div className="div-ba">
    <button  className="button-la" name="button" value="机器学习" onClick={this.clickButton.bind(this,0)}>机器学习</button>
    <button className="button-la" name="button" value="英语四级"  onClick={this.clickButton.bind(this,1)}>英语四级</button >
    <button  className="button-la" name="button" value="高等数学"  onClick={this.clickButton.bind(this,2)}>高等数学</button>
    <button   className="button-la"  name="button" value="java" onClick={this.clickButton.bind(this,3)}>java</button>
    <button className="button-la"  name="button" value="心理学"  onClick={this.clickButton.bind(this,4)}>心理学</button>
    <button className="button-la" name="button" value="现代史"  onClick={this.clickButton.bind(this,5)}>现代史</button>
</div>