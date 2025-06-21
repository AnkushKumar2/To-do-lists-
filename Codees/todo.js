const addbttn= document.getElementById('addbtn')
const toinput= document.getElementById('todoinput')
const toitems=document.getElementById('todoitems')

addbttn.addEventListener('click',()=>{
    const value= toinput.value;
    
    const li=document.createElement('li')
    li.innerText=value

    const delbutton=document.createElement('button')
    delbutton.innerText='X'
    delbutton.addEventListener('click',()=>{
        li.remove()
    })
    li.appendChild(delbutton)
    toitems.appendChild(li)
      toinput.value=''
 
})
 