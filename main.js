    function add(){
        let li=document.createElement("li");
        let input=document.getElementById('tasking');
        let t=document.createTextNode(input.value);
        li.appendChild(t);
        document.getElementById("myul").appendChild(li);
        input.value='';
        let removetsk=document.createElement('input');
        removetsk.setAttribute('type','image');
        removetsk.setAttribute("src","binimage.png");
        removetsk.setAttribute("class","remove");
        removetsk.setAttribute("onclick","remove();")
        removetsk.setAttribute("height","15px");
        removetsk.setAttribute("width","15px");
       // removetsk.setAttribute("class","btn");
        li.appendChild(removetsk);
        }
    function search(){
        let li=document.createElement("li");
        let input=document.getElementById('search');
        let temp=document.querySelectorAll('li');
        console.log(temp.length);
        for(let i=0;i<temp.length;i++){
            if(temp[i].innerText===input.value)
            {
                let t=document.createTextNode(input.value);
                li.appendChild(t);
                document.getElementById("ul").appendChild(li);
            }
        }
        input.value='';      
    }
    function remove(){
        temp=document.getElementsByClassName("remove");
        for(let i=0;i<temp.length;i++)
        {
           temp[i].onclick=function(){
               let del=temp[i].parentNode;
               del.style.display="none";
           }
        }
    }
    