var inp=document.querySelector('button');
var count=0;
inp.addEventListener("click",function()
{
    var invalue=document.getElementsByName("todo_input")[0].value;
    var di=document.getElementsByClassName("todos")[0];
    var para=document.createElement("p");
    var text=document.createTextNode(invalue);
    para.appendChild(text);
    para.setAttribute("key",count++);
    di.appendChild(para);
    para.addEventListener('click',function()
    {
        di.removeChild(para);
    });
    
    

});