let inp=document.getElementById("inp");
let btn=document.getElementById("btn");
let pra=document.getElementById("pra");
btn.onclick=function(){
    if(inp !=undefined){
    pra.innerHTML=inp.value;
    inp.value='';
    }
}
