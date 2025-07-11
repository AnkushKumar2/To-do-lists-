const addbttn= document.getElementById('addbtn')
const toinput= document.getElementById('todoinput')
const toitems=document.getElementById('todoitems')

addbttn.addEventListener('click',()=>{
    const value= toinput.value;
    if(toinput.value===''){
        alert("You must write something");
    }
    else{
          const li=document.createElement('li')
          li.innerText=value;
           const delbutton=document.createElement('span')
    delbutton.innerText="\u00d7"
    delbutton.addEventListener('click',()=>{
        li.remove()
    })
    li.appendChild(delbutton)
    toitems.appendChild(li)
    }
    
    

   
      toinput.value=''
 
})
 