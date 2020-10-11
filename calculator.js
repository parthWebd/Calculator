
var buttons=document.getElementsByTagName('button');
var a=0,b=null,c=null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        console.log(value);
        if(value=='1'||value=='2'||value=='3'|| value=='4'|| value=='5'|| value=='6'|| value=='7'|| value=='8'|| value=='9'|| value=='0'||value=='.'){
            var disp=document.getElementById('resultText').innerHTML;
            console.log("display="+disp)
            if(disp!='+' && disp!='-' && disp!='/' && disp!='*'){
                console.log("no sign")
                document.getElementById('resultText').innerHTML+=value
            }
            else if(disp=='+' || disp=='-' || disp=='/' || disp=='*'){
                console.log("sign")
                document.getElementById('resultText').innerHTML=""+value
            }
        }
        else if(value=='+' || value=='-' || value=='/' || value=='*'){
            var disp=document.getElementById('resultText').innerHTML;
            if(disp=='+' || disp=='-' || disp=='/' || disp=='*'){
                // console.log("sign")
                document.getElementById('resultText').innerHTML=""+value
                c=value;
            }
            else{
                a=document.getElementById('resultText').innerHTML;
                c=value;
                document.getElementById('resultText').innerHTML="" + value;
            }
        }
        else if(value=='='){
            console.log("equal")
            b=document.getElementById('resultText').innerHTML;
            var disp=document.getElementById('resultText').innerHTML;
            if(disp=='+' || disp=='-' || disp=='/' || disp=='*'){
                document.getElementById('resultText').innerHTML="Error";
            }
            else{
                if(b!=null && c!=null){
                    var d=eval(a+c+b);
                    document.getElementById('resultText').innerHTML=""+d;
                }
                else {
                    document.getElementById('resultText').innerHTML=""+a;
                }
            }
        }
        else if(value==="clear"){
            var disp=document.getElementById('resultText').innerHTML;
            var length=disp.length;
            disp =disp.substring(0,length-1);
            document.getElementById('resultText').innerHTML=disp;
        }
        else if(value==="change"){
            var disp=document.getElementById('resultText').innerHTML;
            if(disp!='=' && disp!='+' && disp!='-' && disp!='/' && disp!='*'){
                var num=parseFloat(disp)*-1;
                document.getElementById('resultText').innerHTML=num;
            }
        }
        else if(value==="sqrt"){
           var disp = document.getElementById('resultText').innerHTML;
           var n=parseFloat(disp);
           if(disp!='=' && disp!='+' && disp!='-' && disp!='/' && disp!='*'&&n>=0){
            var num=Math.sqrt(disp);
            document.getElementById('resultText').innerHTML=num;
           }
           else if(n<=0)
           document.getElementById('resultText').innerHTML="Error";
           
        }
        else if(value==="clearAll"){
            document.getElementById('resultText').innerHTML="";
            a=0;
            b=null;
            c=null;
        }
    })
}