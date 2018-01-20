//var line = readline().split("");
var lin="abracadabra";
var line=lin.split("");
var pos=-1;
var length=0;

for(var i=line.length-1;i>0;i--){
    if(line[i]===line[0]){
        var j=i;
        var k=0;
        var templength=1;
        var temppos=i;
        while(j+1<line.length-1&&line[++j]==line[++k])
        {
            templength++;
        }
        if(j!=line.length-1)
        {break;}
        else if(templength>length){
            pos=temppos;
            length=templength;
        }
    }

}
for(var i=pos;i<line.length-1;i++){
    line.push(line[i]);
}
var   str=line.toString();
console.log(str);



