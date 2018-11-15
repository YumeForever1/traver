//    log单击事件
var Dis=document.querySelector(".container>.text-left a")
Dis.onclick=function(){
    var naV=document.getElementById("dd2")
    if(naV.style.width=="80px")
        naV.style.width="600px";
    else
        naV.style.width="80px";
}
//    验证用户名密码、手机号
        var uName=document.getElementById("Name");
        var uPwd=document.getElementById("Pwd"); 
        var uPhone=document.getElementById("Phone");       
        uName.onblur=function(){
            var Cname=/^\w{6,10}$/;
            var Text1=document.getElementById("TexT1")
            if(Cname.test(uName.value)==true){
                Text1.innerHTML="name import Correct";
                Text1.style.color='green';
            }else{ 
                Text1.innerHTML="import error";
                Text1.style.color='#dc3545';
          }
       }
        uPwd.onblur=function(){
            var Cpwd=/^\w{8,16}$/;
            var Text2=document.getElementById("TexT2");
            if(Cpwd.test(uPwd.value)==true){
                Text2.innerHTML="password import Correct";
                Text2.style.color='green';
            }else {
                Text2.innerHTML="import error";
                Text2.style.color='#dc3545';
            }
        }
        uPhone.onblur=function(){
            var Cphone=/^\d{11}$/;
            var Text3=document.getElementById("TexT3");
            if(Cphone.test(uPhone.value)==true){
                Text3.innerHTML="phone import Correct";
                Text3.style.color='green';
            }else{
                Text3.innerHTML="phone import error";
                Text3.style.color='#dc3545';
            }
        }



        //登录界面的响应式