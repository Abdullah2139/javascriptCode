const clock=document.getElementById('clock');
setInterval(()=>{
    clock.innerHTML=new Date().toLocaleTimeString();
},1000);